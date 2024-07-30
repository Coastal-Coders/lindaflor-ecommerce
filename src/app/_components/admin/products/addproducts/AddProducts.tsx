'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProductsForm } from '@/app/_components/admin/products';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const AddProducts = () => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 py-4 md:gap-8 md:p-8'>
        <Link
          href={'/admin/products'}
          className='ml-4 w-fit hover:scale-105'
        >
          <Button
            size={'lg'}
            variant={'default'}
            className='p-1 px-2 font-semibold text-secondary shadow-sm shadow-black'
          >
            <ArrowLeft />
            Voltar
          </Button>
        </Link>
        <Card className='m-4 w-[350px] items-center border border-black shadow-black sm:w-[400px]'>
          <CardHeader>
            <CardTitle>Cadastre seu produto</CardTitle>
          </CardHeader>
          <CardContent className='flex'>
            <ProductsForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddProducts;
