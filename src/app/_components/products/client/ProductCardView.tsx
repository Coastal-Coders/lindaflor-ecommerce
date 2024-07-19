import React from 'react';
import Image from 'next/image';
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
      <Card className='border-2 border-secondary bg-gradient-to-br from-primary to-cyan-200/50'>
        <CardHeader>
          <CardTitle className='break-before-auto text-sm md:text-base lg:text-lg xl:text-xl'>
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
            width={500}
            height={250}
            priority
            className='w-full rounded-md'
          />
        </CardContent>
        <CardContent className='gap-y-2 text-base'>
          <p>Tamanhos: {product.tamanho}</p>
          <p>Preço: R${product.preço.toFixed(2)}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCardView;
