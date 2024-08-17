'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProductsForm } from '@/app/_components/(admin)/products';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const AddProducts = () => {
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
        <Card className='m-4 items-center border border-black bg-primary shadow-black'>
          <CardHeader>
            <CardTitle className='text-center'>Cadastre seu produto</CardTitle>
          </CardHeader>
          <CardContent className='items-center justify-center'>
            <ProductsForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddProducts;
