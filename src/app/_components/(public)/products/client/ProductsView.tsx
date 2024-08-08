'use client';
import React, { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import { useProducsView } from '@/hooks/products';
import { ProductCardView, ProductsFilterBar } from '.';
import { PaginationView } from './PaginationView';

const ProductsView = () => {
  const {
    applyFilters,
    facets,
    isFiltered,
    productsFilter,
    selectedFilters,
    setSelectedFilters,
    setIsFiltered,
    isError,
    isLoading,
    produtos,
  } = useProducsView();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    applyFilters();
  }, [selectedFilters, applyFilters]);

  const totalPages = Math.ceil(productsFilter.length / 20);
  const startIdx = (currentPage - 1) * 20;
  const currentProducts = productsFilter.slice(startIdx, startIdx + 20);
  const state = {
    selectedFilters,
    setSelectedFilters,
  };
  if (isLoading) {
    return (
      <main className='m-10 min-h-screen items-center justify-center'>
        <Loading message='Carregando produtos' />
      </main>
    );
  }
  if (isError || !produtos) {
    return (
      <main className='m-10 min-h-screen items-center justify-center'>
        <h1>ERROR ou Nenhum Produto Encontrado</h1>
      </main>
    );
  }
  return (
    <main className='m-10 min-h-screen items-center justify-center'>
      <ProductsFilterBar
        filterStates={setIsFiltered}
        isFiltered={isFiltered}
        state={state}
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
