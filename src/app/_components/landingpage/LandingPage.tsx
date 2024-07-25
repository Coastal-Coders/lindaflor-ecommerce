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
      <h1 className='my-4 text-center text-lg font-semibold italic text-primary md:text-4xl'>
        Monte o Seu Biquíni Perfeito!
      </h1>
      <section className='relative my-5 flex h-96 w-full flex-col items-center justify-center bg-gradient-to-b from-background via-secondary/80 to-secondary'>
        {/* TODO: Use other image, image with low resolution */}
        <Image
          src='/Logo.png'
          alt='Logo'
          priority
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </section>

      <div className='my-2 flex justify-center'>
        <Link
          href={'/products'}
          className='text-lg font-semibold text-primary hover:scale-110 md:text-3xl'
        >
          Adquira Agora!
        </Link>
      </div>

      <section className='mx-auto mb-4 grid w-full grid-cols-1 items-center justify-center gap-5 p-2 px-5 text-center text-base sm:grid-cols-2 lg:grid-cols-4'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            className='flex min-h-[70px] items-center justify-center gap-x-2 border-black bg-secondary p-1 shadow-sm shadow-black'
          >
            <card.Icon className='size-8' />
            <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
              {card.title}
            </CardTitle>
          </Card>
        ))}
      </section>

      <section className='grid h-[600px] grid-cols-2 gap-5 px-5 py-2 md:gap-10 lg:gap-32'>
        <div className='relative h-auto'>
          <h1 className='absolute top-5 z-10 w-full bg-slate-500 text-center text-2xl text-secondary'>
            Biquínis
          </h1>
          <Image
            src='/Biquíni.jpg'
            alt='Biquíni'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='overflow-hidden rounded-md object-cover'
          />
        </div>

        <div className='relative h-auto'>
          <h1 className='absolute top-5 z-10 w-full bg-slate-500 text-center text-2xl text-secondary'>
            Maiôs
          </h1>
          <Image
            src='/Maiô.jpg'
            alt='Maiô'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='overflow-hidden rounded-md object-cover'
          />
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
