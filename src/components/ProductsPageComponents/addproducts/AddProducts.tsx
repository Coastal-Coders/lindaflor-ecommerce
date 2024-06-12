'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ProductsForm } from './ProductsForm';

const AddProducts = () => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 py-4 md:gap-8 md:p-8'>
        <Card className='m-4 w-[400px] items-center sm:w-[320px]'>
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
