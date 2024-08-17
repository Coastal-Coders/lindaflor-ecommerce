'use client';
import React, { useEffect } from 'react';
import Loading from '@/components/Loading';
import { useProducsView } from '@/hooks/products';
import { ProductCardView, ProductsFilterBar } from '.';

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
  useEffect(() => {
    applyFilters();
  }, [selectedFilters, applyFilters]);

  const state = {
    selectedFilters,
    setSelectedFilters,
  };

  return (
    <main className='m-10 min-h-screen items-center justify-center'>
      <ProductsFilterBar
        filterStates={setIsFiltered}
        isFiltered={isFiltered}
        state={state}
        facets={facets}
      />
      {isLoading ? (
        <>
          <Loading message='Carregando Produtos' />
        </>
      ) : (
        <>
          {isError || produtos == null ? (
            <>
              <h1>ERROR ou Nenhum Produto Encontrado</h1>
            </>
          ) : (
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {productsFilter.map((product) => (
                <ProductCardView
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default ProductsView;
