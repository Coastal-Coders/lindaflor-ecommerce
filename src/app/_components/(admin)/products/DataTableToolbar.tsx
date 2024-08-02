'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { DataTableViewOptions, FilterList } from '.';

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
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] ring-1 hover:ring-1 hover:ring-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 sm:placeholder:text-[10px] md:w-[200px] md:placeholder:text-[12px] lg:w-[250px] xl:w-[300px]'
        />
        <FilterList table={table} />
        {isFiltered && (
          <Button
            variant='secondary'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 shadow-black transition duration-500 ease-in-out hover:scale-95 lg:px-3'
          >
            <p className='hidden md:flex'>Reset</p>
            <Cross2Icon className='size-4 md:ml-2' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
