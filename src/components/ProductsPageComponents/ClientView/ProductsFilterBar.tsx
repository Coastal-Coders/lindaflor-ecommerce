'use client';
import React, { ChangeEvent, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Cross2Icon } from '@radix-ui/react-icons';
import FilterListView from './FilterListView';

interface iFilterBar {
  filterProducts: (nome: string) => void;
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
}

const ProductsFilterBar = ({
  filterProducts,
  filterStates,
  isFiltered,
  selectedFilters,
  setSelectedFilters,
}: iFilterBar) => {
  const handleFilterProducts = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    filterProducts(event.target.value);
  };

  const resetFilters = () => {
    setSelectedFilters({});
    filterStates(false);
  };

  return (
    <div className='mb-5 flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Procure o Produto Aqui ...'
          onChange={handleFilterProducts}
          className='h-8 w-[150px] ring-1 hover:ring-1 hover:ring-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0 sm:placeholder:text-[10px] md:w-[200px] md:placeholder:text-[12px] lg:w-[250px] xl:w-[300px]'
        />
        <FilterListView
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          isFiltered={isFiltered}
          resetFilters={resetFilters}
        />
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={resetFilters}
            className='h-8 px-2 sm:hidden md:hidden lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 size-4' />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductsFilterBar;
