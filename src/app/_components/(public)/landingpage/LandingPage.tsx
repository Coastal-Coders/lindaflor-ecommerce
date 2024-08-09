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
    <section className='grid min-h-dvh w-full grid-rows-[auto_auto_1fr]'>
      <section className='relative flex min-h-98 w-full flex-col items-center rounded-b-md bg-gradient-to-b from-background via-secondary/80 to-secondary p-5'>
        <h1 className='absolute top-5 z-10 text-lg font-semibold italic text-primary md:text-4xl'>
          Monte o Seu Biquíni Perfeito!
        </h1>
        <Image
          src='https://images.pexels.com/photos/20646776/pexels-photo-20646776/free-photo-of-mar-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Logo'
          priority
          quality={100}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute bottom-1 z-10 my-2 flex justify-center'>
          <Link
            href={'/products'}
            className='z-10 text-lg font-semibold text-background transition duration-500 ease-in-out hover:scale-110 md:text-3xl'
          >
            Adquira Agora!
          </Link>
        </div>
      </section>

      <section className='mx-auto my-10 grid w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            className='grid min-h-18 w-full grid-flow-col grid-cols-[auto_1fr] items-center border-2 border-black bg-secondary shadow-sm shadow-black'
          >
            <card.Icon className='mx-5 size-8' />
            <CardTitle className='m-5 text-center text-base sm:text-lg lg:text-xl xl:mx-2 xl:text-2xl'>
              {card.title}
            </CardTitle>
          </Card>
        ))}
      </section>

      <section className='grid min-h-100 grid-cols-1 gap-5 px-5 py-2 sm:grid-cols-2 md:gap-10 lg:gap-20'>
        <div className='relative min-h-98 transition duration-1000 ease-in-out hover:scale-95'>
          <h1 className='absolute top-3 z-10 w-full bg-slate-500 text-center text-2xl text-secondary'>
            Biquínis
          </h1>
          <Image
            src='/Biquíni.jpg'
            alt='Biquíni'
            fill
            quality={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='overflow-hidden rounded-md object-cover'
          />
        </div>

        <div className='relative min-h-98 transition duration-1000 ease-in-out hover:scale-95'>
          <h1 className='absolute top-3 z-10 w-full bg-slate-500 text-center text-2xl text-secondary'>
            Maiôs
          </h1>
          <Image
            src='/Maiô.jpg'
            alt='Maiô'
            fill
            quality={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='overflow-hidden rounded-md object-cover'
          />
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
