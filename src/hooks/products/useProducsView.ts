import { useCallback, useEffect, useState } from 'react';
import { AddProduct } from './useAddProduct';
import { useGetProducts } from './useGetProducts';

type ProductsKey = {
  [key: string]: Set<string>;
};

function useProducsView() {
  const { isError, isLoading, produtos } = useGetProducts();
  const calculateFacets = (products: AddProduct[], selectedFilters: ProductsKey) => {
    const facets = {
      Peças: new Map<string, number>(),
      Tamanho: new Map<string, number>(),
      Cor: new Map<string, number>(),
    };

    products.forEach((product) => {
      // Verifica se o produto passa pelos filtros selecionados
      if (
        Object.keys(selectedFilters).every((filterKey) => {
          const filterSet = selectedFilters[filterKey as keyof ProductsKey];
          if (filterSet != null && filterSet.size > 0) {
            if (filterKey === 'Peças') {
              return [...filterSet].some((piece) =>
                product.name.toLowerCase().includes(piece.toLowerCase())
              );
            } else if (filterKey === 'Tamanho') {
              return [...filterSet].some((size) =>
                product.size.some((productSize) => productSize.toLowerCase() === size.toLowerCase())
              );
            } else if (filterKey === 'Cor') {
              return [...filterSet].some((color) =>
                product.color.some(
                  (productColor) => productColor.toLowerCase() === color.toLowerCase()
                )
              );
            } else {
              // Refatorado: trata filtros adicionais
              const filter = filterKey.toLowerCase() as keyof AddProduct;
              const productValue = product[filter];
              if (Array.isArray(productValue)) {
                return productValue.some((value) => filterSet.has(value.toLowerCase()));
              } else if (typeof productValue === 'string') {
                return filterSet.has(productValue.toLowerCase());
              }
            }
          }
          return true;
        })
      ) {
        // Incrementa facetas apenas para os valores selecionados
        const pieces = product.name.split(' ')[0].trim();
        facets.Peças.set(pieces, (facets.Peças.get(pieces) ?? 0) + 1);

        product.size.forEach((size) => {
          if (
            selectedFilters.Tamanho == null ||
            selectedFilters.Tamanho.size === 0 ||
            selectedFilters.Tamanho.has(size)
          ) {
            facets.Tamanho.set(size, (facets.Tamanho.get(size) ?? 0) + 1);
          }
        });

        product.color.forEach((color) => {
          if (
            selectedFilters.Cor == null ||
            selectedFilters.Cor.size === 0 ||
            selectedFilters.Cor.has(color)
          ) {
            facets.Cor.set(color, (facets.Cor.get(color) ?? 0) + 1);
          }
        });
      }
    });

    return facets;
  };
  const [isFiltered, setIsFiltered] = useState(false);
  const [productsFilter, setProductsFilter] = useState<AddProduct[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<ProductsKey>({});
  const [facets, setFacets] = useState(calculateFacets([], selectedFilters));
  useEffect(() => {
    if (!isLoading && produtos) {
      setProductsFilter(produtos);
      setFacets(calculateFacets(produtos, selectedFilters));
    }
  }, [isLoading, produtos, selectedFilters]);
  // Função para aplicar filtros
  const applyFilters = useCallback(() => {
    if (produtos) {
      const filteredProducts = produtos.filter((product: AddProduct) => {
        return Object.keys(selectedFilters).every((filterKey) => {
          const filterSet = selectedFilters[filterKey as keyof ProductsKey];
          if (filterSet != null && filterSet.size > 0) {
            if (filterKey === 'Peças') {
              return [...filterSet].some((piece) =>
                product.name.toLowerCase().includes(piece.toLowerCase())
              );
            } else if (filterKey === 'Tamanho') {
              return [...filterSet].some((size) =>
                product.size.some((productSize) => productSize.toLowerCase() === size.toLowerCase())
              );
            } else if (filterKey === 'Cor') {
              return [...filterSet].some((color) =>
                product.color.some(
                  (productColor) => productColor.toLowerCase() === color.toLowerCase()
                )
              );
            } else {
              const filter = filterKey.toLowerCase() as keyof AddProduct;
              const productValue = product[filter];
              if (Array.isArray(productValue)) {
                return productValue.some((value) => filterSet.has(value.toLowerCase()));
              } else if (typeof productValue === 'string') {
                return filterSet.has(productValue.toLowerCase());
              }
            }
          }
          return true;
        });
      });
      setProductsFilter(filteredProducts);
      setFacets(calculateFacets(filteredProducts, selectedFilters));
      setIsFiltered(Object.values(selectedFilters).some((set) => set.size > 0));
    }
  }, [selectedFilters, produtos]);

  return {
    applyFilters,
    isFiltered,
    productsFilter,
    facets,
    selectedFilters,
    setSelectedFilters,
    setIsFiltered,
    isError,
    isLoading,
    produtos,
  };
}

export default useProducsView;
