'use client';
import React from 'react';
import { ArrowLeft, Link } from 'lucide-react';
import EditForm from '@/app/_components/(admin)/products/editproducts/EditForm';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useGetProductsById } from '@/hooks/products/useGetProducts';

const EditProductPage = ({ id }: { id: number }) => {
  const { produto, isError, isLoading } = useGetProductsById(id);
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 py-4 md:gap-8 md:p-8'>
        <Link
          href={'/admin/products'}
          className='ml-4 w-fit transition duration-500 ease-in-out hover:scale-105'
        >
          <Button
            size={'lg'}
            variant={'ghost'}
            className='p-1 px-2 font-semibold text-secondary shadow-sm shadow-black'
          >
            <ArrowLeft />
            Voltar
          </Button>
        </Link>
        {isLoading ? (
          <>
            <Loading message='Carregando Produtos' />
          </>
        ) : (
          <>
            {isError || produto == null ? (
              <>
                <h1>ERROR ou Nenhum Produto Encontrado</h1>
              </>
            ) : (
              <Card className='m-4 items-center border border-black bg-primary shadow-black'>
                <CardHeader>
                  <CardTitle className='text-center'>Atualizar seu produto</CardTitle>
                </CardHeader>
                <CardContent className='items-center justify-center'>
                  <EditForm produto={produto} />
                </CardContent>
              </Card>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default EditProductPage;
