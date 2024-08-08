'use client';
import React from 'react';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { Label } from '@/components/ui/Label';
import useProducts from '@/hooks/products/useProducts';
import { FacetedFilterView } from '.';
import { state } from './FacetedFilterView';

interface iFilterProps {
  state: state;
  isFiltered: boolean;
  resetFilters: () => void;
  facets: {
    Peças: Map<string, number>;
    Tamanho: Map<string, number>;
    Cor: Map<string, number>;
  };
}
export function FilterList({ state, isFiltered, resetFilters, facets }: iFilterProps) {
  const { categories, colors, sizes } = useProducts();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='default'
            size='sm'
            className='my-5 flex h-8 w-[150px] p-5 text-base font-semibold shadow-black transition duration-500 ease-in-out hover:scale-95 sm:hidden'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        {isFiltered && (
          <Button
            variant='secondary'
            onClick={resetFilters}
            className='flex h-8 px-2 shadow-black transition duration-500 ease-in-out hover:scale-95 sm:hidden'
          >
            <Cross2Icon className='size-4' />
          </Button>
        )}
        <DropdownMenuContent className='flex flex-col gap-y-1 border border-black shadow-black'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator className='bg-black' />
          <span className='flex sm:hidden'>
            <FacetedFilterView
              title='Peças'
              options={categories}
              state={state}
              facets={facets.Peças}
            />
          </span>
          <span className='flex sm:hidden'>
            <FacetedFilterView
              title='Tamanho'
              options={sizes}
              state={state}
              facets={facets.Tamanho}
            />
          </span>
          <span className='flex sm:hidden'>
            <FacetedFilterView
              title='Cor'
              options={colors}
              state={state}
              facets={facets.Cor}
            />
          </span>
        </DropdownMenuContent>
      </DropdownMenu>
      {/*Web View */}
      <Label className='hidden text-base font-semibold sm:flex'>Filtros: </Label>
      <div className='hidden gap-x-1 rounded-md p-1 sm:flex'>
        <span className='hidden sm:flex'>
          <FacetedFilterView
            title='Peças'
            options={categories}
            state={state}
            facets={facets.Peças}
          />
        </span>
        <span className='hidden sm:flex'>
          <FacetedFilterView
            title='Tamanho'
            options={sizes}
            state={state}
            facets={facets.Tamanho}
          />
        </span>
        <span className='hidden sm:flex'>
          <FacetedFilterView
            title='Cor'
            options={colors}
            state={state}
            facets={facets.Cor}
          />
        </span>
        {isFiltered && (
          <Button
            variant='secondary'
            onClick={resetFilters}
            className='h-8 px-2 shadow-black transition duration-500 ease-in-out hover:scale-95 lg:px-3'
          >
            Reset
            <Cross2Icon className='size-4' />
          </Button>
        )}
      </div>
    </>
  );
}

export default FilterList;
