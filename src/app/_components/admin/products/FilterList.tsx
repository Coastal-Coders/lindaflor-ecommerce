import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { DataTableFacetedFilter } from '.';
import { colors, sizes } from '../../products/data';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}
export function FilterList<TData>({ table }: DataTableToolbarProps<TData>) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='default'
            size='sm'
            className='ml-auto flex h-8 px-4 text-base font-semibold shadow-black transition duration-500 ease-in-out hover:scale-95 md:hidden'
          >
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='flex flex-col gap-y-1 border border-black shadow-black'>
          <DropdownMenuLabel className='flex justify-center'>Filtros</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table.getColumn('size') && (
            <span className='flex md:hidden'>
              <DataTableFacetedFilter
                column={table.getColumn('size')}
                title='Tamanho'
                options={sizes}
              />
            </span>
          )}
          {table.getColumn('color') && (
            <span className='flex md:hidden'>
              <DataTableFacetedFilter
                column={table.getColumn('color')}
                title='Cor'
                options={colors}
              />
            </span>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {table.getColumn('size') && (
        <span className='hidden md:flex'>
          <DataTableFacetedFilter
            column={table.getColumn('size')}
            title='Tamanho'
            options={sizes}
          />
        </span>
      )}
      {table.getColumn('color') && (
        <span className='hidden md:flex'>
          <DataTableFacetedFilter
            column={table.getColumn('color')}
            title='Cor'
            options={colors}
          />
        </span>
      )}
    </>
  );
}
