'use client';

import React from 'react';
import { CreditCard, Package2, Shirt, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle } from '@/components/ui/Card';

const cardData = [
  {
    Icon: ShoppingBag,
    title: 'Atacado e Varejo',
  },
  {
    Icon: Shirt,
    title: 'Aceitamos Encomendas',
  },
  {
    Icon: Package2,
    title: 'Entregamos em Toda Aracaju',
  },
  {
    Icon: CreditCard,
    title: 'Parcelamos em até 12x',
  },
];

const LandingPage = () => {
  return (
    <section className='mb-5 min-h-screen w-full'>
      <section className='relative mb-5 flex min-h-[500px] w-full flex-col items-center rounded-b-md bg-gradient-to-b from-primary via-secondary/80 to-secondary shadow-sm shadow-black'>
        <h1 className='absolute top-1 text-lg font-semibold italic text-background md:text-4xl'>
          Monte o Seu Biquíni Perfeito!
        </h1>
        {/* TODO: Use other image, image with low resolution */}
        <Image
          src='/Logo.png'
          alt='Logo'
          priority
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{ minHeight: '500px' }}
          className='p-6'
        />
        <div className='absolute bottom-1 my-2 flex justify-center'>
          <Link
            href={'/products'}
            className='text-lg font-semibold text-background transition duration-500 ease-in-out hover:scale-110 md:text-3xl'
          >
            Adquira Agora!
          </Link>
        </div>
      </section>

      <section className='mx-auto my-10 grid w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            className='grid min-h-18 w-full grid-flow-col grid-cols-[auto,1fr] items-center border-2 border-black bg-secondary shadow-sm shadow-black'
          >
            <card.Icon className='mx-5 size-8' />
            <CardTitle className='m-5 text-center text-base sm:text-lg lg:text-xl xl:mx-2 xl:text-2xl'>
              {card.title}
            </CardTitle>
          </Card>
        ))}
      </section>

      <section className='grid min-h-[600px] grid-cols-1 gap-5 px-5 py-2 sm:grid-cols-2 md:gap-10 lg:gap-20'>
        <div className='relative min-h-[500px] shadow-sm shadow-black transition duration-1000 ease-in-out hover:scale-95'>
          <h1 className='absolute top-3 z-10 w-full bg-slate-500 text-center text-2xl text-secondary'>
            Biquínis
          </h1>
          <Image
            src='/Biquíni.jpg'
            alt='Biquíni'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ minHeight: '500px' }}
            className='overflow-hidden rounded-md object-cover'
          />
        </div>

        <div className='relative min-h-[500px] shadow-sm shadow-black transition duration-1000 ease-in-out hover:scale-95'>
          <h1 className='absolute top-3 z-10 w-full bg-slate-500 text-center text-2xl text-secondary'>
            Maiôs
          </h1>
          <Image
            src='/Maiô.jpg'
            alt='Maiô'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ minHeight: '500px' }}
            className='overflow-hidden rounded-md object-cover'
          />
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
