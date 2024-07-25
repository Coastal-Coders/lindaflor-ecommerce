import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { DataTableFacetedFilter } from '.';
import { cor, statuses, tamanho } from '../../products/data';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}
export function FilterList<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            className='ml-auto flex h-8 px-4 md:hidden'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col bg-background'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table.getColumn('status') && (
            <span className='flex md:hidden'>
              <DataTableFacetedFilter
                column={table.getColumn('status')}
                title='Status'
                options={statuses}
              />
            </span>
          )}
          {table.getColumn('tamanho') && (
            <span className='flex md:hidden'>
              <DataTableFacetedFilter
                column={table.getColumn('tamanho')}
                title='Tamanho'
                options={tamanho}
              />
            </span>
          )}
          {table.getColumn('cor') && (
            <span className='flex md:hidden'>
              <DataTableFacetedFilter
                column={table.getColumn('cor')}
                title='Cor'
                options={cor}
              />
            </span>
          )}
          {isFiltered && (
            <Button
              variant='ghost'
              onClick={() => table.resetColumnFilters()}
              className='h-8 px-2 lg:px-3'
            >
              Reset
              <Cross2Icon className='ml-2 size-4' />
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {table.getColumn('status') && (
        <span className='hidden md:flex'>
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title='Status'
            options={statuses}
          />
        </span>
      )}
      {table.getColumn('tamanho') && (
        <span className='hidden md:flex'>
          <DataTableFacetedFilter
            column={table.getColumn('tamanho')}
            title='Tamanhos'
            options={tamanho}
          />
        </span>
      )}
      {table.getColumn('cor') && (
        <span className='hidden md:flex'>
          <DataTableFacetedFilter
            column={table.getColumn('cor')}
            title='Cor'
            options={cor}
          />
        </span>
      )}
    </>
  );
}