'use client';
import React, { useState, useEffect } from 'react';
import { Products } from '../data/schema';
import * as produs from '../data/tasks.json';
import { PaginationView } from './PaginationView';
import ProductCardView from './ProductCardView';
import ProductsFilterBar from './ProductsFilterBar';
import { ProductsType } from '@/types/ProductType';
const b = () => {
  return produs.map((e) => e);
};
type ProductsKey = {
  [key: string]: Set<string>;
};
const ProductsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [products, setProducts] = useState<Products[]>(b);
  const [productsFilter, setProductsFilter] = useState<Products[]>(products);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: Set<string>;
  }>({});

  // Função para aplicar filtros
  const applyFilters = () => {
    const filteredProducts = products.filter((product: any) => {
      return Object.keys(selectedFilters).every((filterKey) => {
        const filterSet = selectedFilters[filterKey as keyof ProductsKey];
        if (filterSet && filterSet.size > 0) {
          const filter = filterKey.toLocaleLowerCase() as any;
          const productValue = product[filter];
          // Verifica se o valor do produto está no conjunto de filtros
          return filterSet.has(productValue);
        }
        return true;
      });
    });

    setProductsFilter(filteredProducts);
  };

  useEffect(() => {
    console.log('teste', selectedFilters);
    applyFilters();
    setIsFiltered(Object.values(selectedFilters).some((set) => set.size > 0));
  }, [selectedFilters]);

  function filterProd(name: string) {
    console.log(selectedFilters);
    setProductsFilter(
      products?.filter((e: Products) => e.nome.toLowerCase().includes(name.trim().toLowerCase())) ??
        []
    );
  }

  const totalPages = Math.ceil(productsFilter.length / 20);
  const startIdx = (currentPage - 1) * 20;
  const currentProducts = productsFilter.slice(startIdx, startIdx + 20);
  return (
    <main className='m-10 min-h-screen items-center justify-center'>
      <ProductsFilterBar
        filterProducts={filterProd}
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
