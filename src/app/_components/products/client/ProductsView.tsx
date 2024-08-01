'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { ProductCardView, ProductsFilterBar } from '.';
import { PaginationView } from './PaginationView';
import { Products } from '../data/schema';
import * as produs from '../data/tasks.json';

const b = (): Products[] => {
  return produs.map((e) => ({
    ...e,
    price: typeof e.price === 'string' ? parseFloat(e.price) : e.price,
    stock: typeof e.stock === 'string' ? parseInt(e.stock, 10) : e.stock,
  }));
};

type ProductsKey = {
  [key: string]: Set<string>;
};

const calculateFacets = (products: Products[], selectedFilters: ProductsKey) => {
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
            const filter = filterKey.toLowerCase() as keyof Products;
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

const ProductsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [products] = useState<Products[]>(b);
  const [productsFilter, setProductsFilter] = useState<Products[]>(products);
  const [selectedFilters, setSelectedFilters] = useState<ProductsKey>({});
  const [facets, setFacets] = useState(calculateFacets(products, selectedFilters));

  // Função para aplicar filtros
  const applyFilters = useCallback(() => {
    const filteredProducts = products.filter((product: Products) => {
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
            const filter = filterKey.toLowerCase() as keyof Products;
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
    setFacets(calculateFacets(products, selectedFilters));
    setIsFiltered(Object.values(selectedFilters).some((set) => set.size > 0));
  }, [selectedFilters, products]);

  useEffect(() => {
    applyFilters();
  }, [selectedFilters, applyFilters]);

  const totalPages = Math.ceil(productsFilter.length / 20);
  const startIdx = (currentPage - 1) * 20;
  const currentProducts = productsFilter.slice(startIdx, startIdx + 20);

  return (
    <main className='m-10 min-h-screen items-center justify-center'>
      <ProductsFilterBar
        filterStates={setIsFiltered}
        isFiltered={isFiltered}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        facets={facets}
      />
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {currentProducts.map((product) => (
          <ProductCardView
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <PaginationView
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default ProductsView;
