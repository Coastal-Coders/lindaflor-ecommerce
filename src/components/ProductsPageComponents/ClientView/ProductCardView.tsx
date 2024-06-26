import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  //CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Products } from '../data/schema';

const ProductCardView = ({ product }: { product: Products }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='break-before-auto sm:text-sm md:text-sm lg:text-base xl:text-xl'>
            {product.nome}
          </CardTitle>
          <CardDescription>{product.cor}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={
              'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=300'
            }
            alt='test'
            width={300}
            height={150}
            priority
          />
        </CardContent>
        <CardContent>
          <p>Preço: R${product.preço.toFixed(2)}</p>
          <p>Tamanhos: {product.tamanho}</p>
        </CardContent>
        {/* <CardFooter className='block text-center'>
          <p className='text-center'>Status: {product.status}</p>
        </CardFooter> */}
      </Card>
    </>
  );
};

export default ProductCardView;
