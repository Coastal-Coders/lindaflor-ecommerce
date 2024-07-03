'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ProductCardView, ProductsFilterBar } from '.';
import { Products } from '../data/schema';
import * as produs from '../data/tasks.json';
import { PaginationView } from './PaginationView';

const b = () => {
  return produs.map((e) => e);
};
type ProductsKey = {
  [key: string]: Set<string>;
};
const ProductsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [products] = useState<Products[]>(b);
  const [productsFilter, setProductsFilter] = useState<Products[]>(products);
  const [selectedFilters, setSelectedFilters] = useState<ProductsKey>({});

  // Função para aplicar filtros
  const applyFilters = useCallback(() => {
    const filteredProducts = products.filter((product: Products) => {
      return Object.keys(selectedFilters).every((filterKey) => {
        const filterSet = selectedFilters[filterKey as keyof ProductsKey];
        if (filterKey === 'Peças') {
          if (filterSet != null && filterSet.size > 0) {
            return [...filterSet].some((piece) =>
              product.nome.toLowerCase().includes(piece.toLowerCase())
            );
          }
        }
        if (filterSet != null && filterSet.size > 0) {
          const filter = filterKey.toLocaleLowerCase() as keyof Products;
          const productValue = product[filter];
          // Verifica se o valor do produto está no conjunto de filtros
          if (productValue != null) {
            return filterSet.has(productValue.toString());
          }
        }
        return true;
      });
    });
    setProductsFilter(filteredProducts);
  }, [selectedFilters, products]);

  useEffect(() => {
    applyFilters();
    setIsFiltered(Object.values(selectedFilters).some((set) => set.size > 0));
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
      />
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
