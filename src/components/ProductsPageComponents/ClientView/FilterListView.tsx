import React from 'react';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Cross2Icon } from '@radix-ui/react-icons';
import { statuses, tamanhos, cor } from '../data/data';
import { FacetedFilterView } from './FacetedFilterView';

interface iFilterProps {
  selectedFilters: {
    [key: string]: Set<string>;
  };
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<{
      [key: string]: Set<string>;
    }>
  >;
  isFiltered: boolean;
  resetFilters: () => void;
}
export function FilterList({
  selectedFilters,
  setSelectedFilters,
  isFiltered,
  resetFilters,
}: iFilterProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            className='ml-auto hidden h-8 px-4 sm:flex md:flex'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <span className='hidden sm:flex md:flex'>
            <FacetedFilterView
              title='Status'
              options={statuses}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </span>
          <span className='hidden sm:flex md:flex'>
            <FacetedFilterView
              title='Tamanhos'
              options={tamanhos}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </span>
          <span className='hidden sm:flex md:flex'>
            <FacetedFilterView
              title='Cor'
              options={cor}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </span>
          {isFiltered && (
            <Button
              variant='ghost'
              onClick={resetFilters}
              className='h-8 px-2 lg:px-3'
            >
              Reset
              <Cross2Icon className='ml-2 size-4' />
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <span className='sm:hidden md:hidden'>
        <FacetedFilterView
          title='Status'
          options={statuses}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </span>
      <span className='sm:hidden md:hidden'>
        <FacetedFilterView
          title='Tamanhos'
          options={tamanhos}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </span>
      <span className='sm:hidden md:hidden'>
        <FacetedFilterView
          title='Cor'
          options={cor}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </span>
    </>
  );
}

export default FilterList;
