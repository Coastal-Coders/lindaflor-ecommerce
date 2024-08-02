// src/components/ProductCardView.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
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
import { colorOptions } from '../../../(admin)/products/addproducts/Selectors';
import { Products } from '../data/schema';

const ProductCardView = ({ product }: { product: Products }) => {
  const { addProductToCart } = useCarts();
  const colorOptionsMap = new Map(colorOptions.map((option) => [option.label, option.value]));
  const colorsToShow = Array.isArray(product.color) ? product.color : [product.color];

  return (
    <>
      <Card className='border-2 border-secondary bg-gradient-to-br from-primary/30 to-primary/10 shadow-sm shadow-black'>
        <CardHeader>
          <CardTitle className='break-before-auto text-sm md:text-base lg:text-lg xl:text-xl'>
            {product.name}
          </CardTitle>
          <CardDescription className='text-base text-black'>
            Cores:
            {colorsToShow.map((colorLabel) => {
              const colorValue = colorOptionsMap.get(colorLabel);
              return colorValue != null ? (
                <span
                  key={colorLabel}
                  title={colorLabel}
                  style={{
                    display: 'inline-block',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: colorValue,
                    marginLeft: '8px',
                    verticalAlign: 'middle',
                    border: '1px solid black',
                  }}
                  className='transition duration-500 ease-in-out hover:scale-150'
                />
              ) : null;
            })}
          </CardDescription>
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
            quality={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ maxHeight: '250px', maxWidth: '500px' }}
            className='w-full rounded-md'
          />
        </CardContent>
        <CardContent className='gap-y-2 text-base'>
          <p>Tamanhos: {product.size.join(', ')}</p>
          <p>Preço: R${product.price}</p>
        </CardContent>
        <CardFooter className='justify-center'>
          <Button
            size={'lg'}
            variant={'secondary'}
            style={{ border: '1px solid black', boxShadow: ' 0 4px 4px black' }}
            className='transition duration-500 ease-in-out hover:scale-90'
            onClick={() => addProductToCart(product)}
          >
            <ShoppingCart />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCardView;
