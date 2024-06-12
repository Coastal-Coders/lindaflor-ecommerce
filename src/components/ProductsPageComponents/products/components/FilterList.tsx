import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { statuses, tamanhos } from '../data/data';
import { DataTableFacetedFilter } from './DataTableFacetedFilter';
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
            className='ml-auto hidden h-8 px-4 sm:flex md:flex'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table.getColumn('status') && (
            <span className='hidden sm:flex md:flex'>
              <DataTableFacetedFilter
                column={table.getColumn('status')}
                title='Status'
                options={statuses}
              />
            </span>
          )}
          {table.getColumn('tamanho') && (
            <span className='hidden sm:flex md:flex'>
              <DataTableFacetedFilter
                column={table.getColumn('tamanho')}
                title='Tamanhos'
                options={tamanhos}
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
        <span className='sm:hidden md:hidden'>
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title='Status'
            options={statuses}
          />
        </span>
      )}
      {table.getColumn('tamanho') && (
        <span className='sm:hidden md:hidden'>
          <DataTableFacetedFilter
            column={table.getColumn('tamanho')}
            title='Tamanhos'
            options={tamanhos}
          />
        </span>
      )}
    </>
  );
}
