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
import { tamanho, cor, Peças } from '../data/data';
import { FacetedFilterView } from './FacetedFilterView';
import { Label } from '@/components/ui/Label';

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
            className='hidden h-8 border border-white p-5 sm:flex sm:flex-1'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <span className='hidden sm:flex'>
            <FacetedFilterView
              title='Peças'
              options={Peças}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </span>
          <span className='hidden sm:flex'>
            <FacetedFilterView
              title='Tamanho'
              options={tamanho}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </span>
          <span className='hidden sm:flex'>
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
              className='h-8 px-2'
            >
              Reset
              <Cross2Icon className='size-4' />
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <Label className='sm:hidden'>Filtros: </Label>
      <div className='flex rounded-md border border-white p-1 sm:hidden'>
        <span className='sm:hidden'>
          <FacetedFilterView
            title='Peças'
            options={Peças}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </span>
        <span className='sm:hidden'>
          <FacetedFilterView
            title='Tamanho'
            options={tamanho}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </span>
        <span className='sm:hidden'>
          <FacetedFilterView
            title='Cor'
            options={cor}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </span>
      </div>
      {isFiltered && (
        <Button
          variant='ghost'
          onClick={resetFilters}
          className='h-8 border border-white px-2 lg:px-3'
        >
          <Cross2Icon className='size-4' />
        </Button>
      )}
    </>
  );
}

export default FilterList;
