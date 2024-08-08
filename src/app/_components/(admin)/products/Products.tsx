'use client';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/Button';
import { useGetProducts } from '@/hooks/products/useGetProducts';
import { Columns } from './Columns';
import { DataTable } from './DataTable';

export function Product() {
  const { isError, isLoading, produtos } = useGetProducts();
  if (isLoading) {
    return (
      <div className='flex min-h-screen w-full flex-col'>
        <Loading message='Carregando Produtos' />
      </div>
    );
  }
  if (isError || !produtos) {
    return (
      <div className='flex min-h-screen w-full flex-col'>
        <h1>ERROR ou Nenhum Produto Encontrado</h1>
      </div>
    );
  }
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
            data={produtos}
            columns={Columns}
          />
        </main>
      </div>
    </>
  );
}
