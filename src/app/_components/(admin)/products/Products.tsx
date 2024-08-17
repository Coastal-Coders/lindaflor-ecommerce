'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useGetProducts } from '@/hooks/products/useGetProducts';
import { Columns } from './Columns';
import { DataTable } from './DataTable';

export function Product() {
  const { isError, isLoading, produtos } = useGetProducts();

  return (
    <>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <Link
            href={'/admin/products/addproducts'}
            className='w-fit transition duration-500 ease-in-out hover:scale-105'
          >
            <Button
              variant={'ghost'}
              className='font-semibold text-secondary shadow-sm shadow-black'
            >
              Adicionar Produtos
            </Button>
          </Link>
          <DataTable
            data={produtos ?? []}
            columns={Columns}
            isError={isError}
            isLoading={isLoading}
          />
          ;
        </main>
      </div>
    </>
  );
}
{
  /*  */
}
