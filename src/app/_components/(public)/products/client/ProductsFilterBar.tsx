/* eslint-disable no-unused-vars */
'use client';
import React from 'react';
import { state } from './FacetedFilterView';
import FilterListView from './FilterListView';

interface iFilterBar {
  filterStates: (filtered: boolean) => void;
  isFiltered: boolean;
  state: state;
  facets: {
    Peças: Map<string, number>;
    Tamanho: Map<string, number>;
    Cor: Map<string, number>;
  };
}

const ProductsFilterBar = ({ filterStates, isFiltered, state, facets }: iFilterBar) => {
  const resetFilters = () => {
    state.setSelectedFilters({});
    filterStates(false);
  };

  return (
    <div className='mb-5 flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <FilterListView
          state={state}
          isFiltered={isFiltered}
          resetFilters={resetFilters}
          facets={facets}
        />
      </div>
    </div>
  );
};

export default ProductsFilterBar;
