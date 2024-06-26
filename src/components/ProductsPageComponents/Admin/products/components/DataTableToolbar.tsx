'use client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { DataTableViewOptions } from './DataTableViewOptions';
import { FilterList } from './FilterList';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Procure o Produto Aqui ...'
          value={(table.getColumn('nome')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('nome')?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] ring-1 hover:ring-1 hover:ring-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:ring-offset-0 sm:placeholder:text-[10px] md:w-[200px] md:placeholder:text-[12px] lg:w-[250px] xl:w-[300px]'
        />
        <FilterList table={table} />
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 sm:hidden md:hidden lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 size-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
