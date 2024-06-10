import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '../../../ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/Select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className='flex items-center justify-end px-2'>
      <div className='flex items-center space-x-6 sm:space-x-3 lg:space-x-8'>
        <div className='flex items-center space-x-2 sm:space-x-1'>
          <p className='break-words text-sm font-medium sm:text-[12px]'>Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem
                  key={pageSize}
                  value={`${pageSize}`}
                >
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex w-[100px] items-center justify-center text-sm font-medium sm:text-[12px]'>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className='flex items-center space-x-2 sm:space-x-1'>
          <Button
            variant='outline'
            className='hidden size-8 p-0 sm:size-6 lg:flex xl:flex'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Go to first page</span>
            <DoubleArrowLeftIcon className='size-4' />
          </Button>
          <Button
            variant='outline'
            className='size-8 p-0 sm:size-6'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Go to previous page</span>
            <ChevronLeftIcon className='size-4' />
          </Button>
          <Button
            variant='outline'
            className='size-8 p-0 sm:size-6'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className='sr-only'>Go to next page</span>
            <ChevronRightIcon className='size-4' />
          </Button>
          <Button
            variant='outline'
            className='hidden size-8 p-0 sm:size-6 lg:flex xl:flex'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className='sr-only'>Go to last page</span>
            <DoubleArrowRightIcon className='size-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
