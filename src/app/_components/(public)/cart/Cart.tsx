'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import useCarts from '@/hooks/cart/useCarts';

const Cart = () => {
  const { state, RemoveFromCart, ClearCart } = useCarts();

  const totalPrice = state.products
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div className='container mx-auto my-8 min-h-screen p-4'>
      <h1 className='mb-4 text-3xl font-bold'>Meu Carrinho</h1>
      {state.products.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {state.products.map((product) => (
              <li
                key={product.id}
                className='mb-4 max-w-96 border-b pb-4'
              >
                <Card className='flex items-center justify-between border border-black p-2 shadow-black transition duration-300 ease-in-out hover:scale-105'>
                  <CardHeader className='p-0'>
                    <CardTitle>{product.name}</CardTitle>
                    <CardContent className='flex items-center justify-between gap-x-3 p-0'>
                      <Image
                        src={
                          'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=300'
                        }
                        alt='test'
                        width={150}
                        height={100}
                        priority
                        quality={100}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        style={{ maxHeight: '100px', maxWidth: '150px' }}
                        className='w-full rounded-md'
                      />
                      <CardContent className='space-y-2 p-0'>
                        <CardDescription className='text-base text-black'>
                          Preço: R${product.price}
                        </CardDescription>
                        <CardDescription className='text-base text-black'>
                          Quantidade: {product.quantity}
                        </CardDescription>
                        <CardDescription className='text-base text-black'>
                          Total: R${(product.price * product.quantity).toFixed(2)}
                        </CardDescription>
                      </CardContent>
                    </CardContent>
                  </CardHeader>
                  <CardFooter className='p-0'>
                    <Button
                      size='sm'
                      variant='destructive'
                      style={{ boxShadow: '0 2px 2px black', border: '1px solid black' }}
                      onClick={() => RemoveFromCart(product.id)}
                      className='p-2 transition duration-300 ease-in-out hover:scale-95 hover:font-semibold'
                    >
                      Remover
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
          <Button
            size='lg'
            variant='outline'
            onClick={ClearCart}
            style={{ boxShadow: '0 2px 2px black', border: '1px solid black' }}
            className='rounded-md p-2 text-base transition duration-300 ease-in hover:scale-105 hover:font-semibold'
          >
            Limpar Carrinho
          </Button>
        </div>
      )}
      <div className='mt-8'>
        <h2 className='text-2xl font-semibold'>Total: R${totalPrice}</h2>
        <Button
          size='lg'
          variant='default'
          onClick={ClearCart}
          disabled={totalPrice == '0.00'}
          style={{ boxShadow: '0 2px 2px black', border: '1px solid black' }}
          className='mt-4 rounded-md p-2 text-base transition duration-300 ease-in hover:scale-105 hover:font-semibold'
        >
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
};

export default Cart;
