'use client';
import React, { useState, useEffect } from 'react';
import { Products } from '../data/schema';
//import * as products from '../data/tasks.json';
import { PaginationView } from './PaginationView';
import ProductCardView from './ProductCardView';
import ProductsFilterBar from './ProductsFilterBar';

const ProductsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [products, setProducts] = useState<Products[]>([
    {
      id: '1',
      nome: 'Camiseta Básica',
      preço: 29.99,
      cor: 'Branco',
      tamanho: 'M',
      status: 'Disponível',
    },
    {
      id: '2',
      nome: 'Calça Jeans Skinny',
      preço: 89.99,
      cor: 'Azul',
      tamanho: '42',
      status: 'Disponível',
    },
    {
      id: '3',
      nome: 'Vestido Longo Floral',
      preço: 139.99,
      cor: 'Vermelho',
      tamanho: 'G',
      status: 'Indisponível',
    },
  ]);
  const [productsFilter, setProductsFilter] = useState<Products[]>(products);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: Set<string>;
  }>({});
  function filterProd(name: string) {
    console.log(selectedFilters);
    setProductsFilter(
      products?.filter((e: Products) => e.nome.toLowerCase().includes(name.trim().toLowerCase())) ??
        []
    );
  }
  useEffect(() => {
    setIsFiltered(Object.values(selectedFilters).some((set) => set.size > 0));
    console.log('teste', selectedFilters);
  }, [selectedFilters]);

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
