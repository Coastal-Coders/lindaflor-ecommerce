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
import { FacetedFilterView } from '.';
import { cor, Peças, tamanho } from '../data';

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
  facets: {
    Peças: Map<string, number>;
    Tamanho: Map<string, number>;
    Cor: Map<string, number>;
  };
}
export function FilterList({
  selectedFilters,
  setSelectedFilters,
  isFiltered,
  resetFilters,
  facets,
}: iFilterProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            className='my-5 flex h-8 w-[150px] border border-white p-5 sm:hidden'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={resetFilters}
            className='flex h-8 border px-2 sm:hidden'
          >
            <Cross2Icon className='size-4' />
          </Button>
        )}
        <DropdownMenuContent className='flex flex-col bg-background'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <span className='flex sm:hidden'>
            <FacetedFilterView
              title='Peças'
              options={Peças}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              facets={facets.Peças}
            />
          </span>
          <span className='flex sm:hidden'>
            <FacetedFilterView
              title='Tamanho'
              options={tamanho}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              facets={facets.Tamanho}
            />
          </span>
          <span className='flex sm:hidden'>
            <FacetedFilterView
              title='Cor'
              options={cor}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              facets={facets.Cor}
            />
          </span>
        </DropdownMenuContent>
      </DropdownMenu>
      {/*Web View */}
      <Label className='hidden sm:flex'>Filtros: </Label>
      <div className='hidden rounded-md border border-white p-1 sm:flex'>
        <span className='hidden sm:flex'>
          <FacetedFilterView
            title='Peças'
            options={Peças}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            facets={facets.Peças}
          />
        </span>
        <span className='hidden sm:flex'>
          <FacetedFilterView
            title='Tamanho'
            options={tamanho}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            facets={facets.Tamanho}
          />
        </span>
        <span className='hidden sm:flex'>
          <FacetedFilterView
            title='Cor'
            options={cor}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            facets={facets.Cor}
          />
        </span>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={resetFilters}
            className='h-8 px-2 lg:px-3'
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
