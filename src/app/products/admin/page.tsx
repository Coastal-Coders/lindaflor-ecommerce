import Link from 'next/link';
import React from 'react';
import { Products } from '@/app/_components/products/admin/Products';
import { Button } from '@/components/ui/Button';

const page = () => {
  return (
    <>
      <Link href={'/products/admin/addproducts'}>
        <Button className='m-4 w-fit bg-pink-400/80 font-semibold text-yellow-300 hover:bg-pink-500/80 hover:text-yellow-200 md:ml-10'>
          Adicionar Produtos
        </Button>
      </Link>
      <Products />
    </>
  );
};

export default page;
