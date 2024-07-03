/* eslint-disable no-unused-vars */
'use client';
import React from 'react';
import FilterListView from './FilterListView';

interface iFilterBar {
  filterStates: (filtered: boolean) => void;
  isFiltered: boolean;
  selectedFilters: {
    [key: string]: Set<string>;
  };
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<{
      [key: string]: Set<string>;
    }>
  >;
  facets: {
    Peças: Map<string, number>;
    Tamanho: Map<string, number>;
    Cor: Map<string, number>;
  };
}

const ProductsFilterBar = ({
  filterStates,
  isFiltered,
  selectedFilters,
  setSelectedFilters,
  facets,
}: iFilterBar) => {
  const resetFilters = () => {
    setSelectedFilters({});
    filterStates(false);
  };

  return (
    <div className='mb-5 flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <FilterListView
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          isFiltered={isFiltered}
          resetFilters={resetFilters}
          facets={facets}
        />
      </div>
    </div>
  );
};

export default ProductsFilterBar;
