'use client';
import React from 'react';
import { CreditCard, Package2, Shirt, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle } from '@/components/ui/Card';
import * as Biquini from '../../../../public/Biquini.jpg';
import * as Logo from '../../../../public/LindaFlorLogo-Photoroom.png';
import * as Maio from '../../../../public/Maiô.jpg';

const LandingPage = () => {
  return (
    <main className='min-h-screen bg-background/80'>
      <section className='relative flex w-full flex-col items-center justify-center rounded-md bg-gradient-to-b from-background via-secondary/80 to-secondary'>
        <h1 className='absolute top-10 text-lg font-semibold italic text-primary sm:top-20 md:text-4xl'>
          Monte o Seu Biquini Perfeito!
        </h1>
        <Image
          src={Logo}
          alt='Logo'
          width={3000}
          height={3000}
          className='max-h-[500px] w-full rounded-b-md shadow-sm shadow-black'
        />
        <Link
          href={'/products'}
          className='absolute bottom-10 text-lg font-semibold text-primary hover:scale-110 sm:bottom-20 md:text-3xl'
        >
          Adquira Agora!
        </Link>
      </section>
      <section className='mx-auto mb-4 grid w-11/12 grid-cols-1 items-center justify-center gap-5 p-2 text-center text-base sm:grid-cols-2 lg:grid-cols-4'>
        <Card className='flex min-h-[70px] items-center justify-center gap-x-2 border-black bg-secondary p-1 shadow-sm shadow-black'>
          <Shirt className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Aceitamos Encomendas
          </CardTitle>
        </Card>
        <Card className='flex min-h-[70px] items-center justify-center gap-x-2 border-black bg-secondary p-1 shadow-sm shadow-black'>
          <ShoppingBag className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Atacado e Varejo
          </CardTitle>
        </Card>
        <Card className='flex min-h-[70px] items-center justify-center gap-x-2 border-black bg-secondary p-1 shadow-sm shadow-black'>
          <Package2 className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Entregamos em Toda Aracaju
          </CardTitle>
        </Card>
        <Card className='flex min-h-[70px] items-center justify-center gap-x-2 border-black bg-secondary p-1 shadow-sm shadow-black'>
          <CreditCard className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Parcelamos em até 12x
          </CardTitle>
        </Card>
      </section>
      <section className='my-10 flex w-full items-center justify-center gap-5 py-2 md:gap-10 lg:gap-32'>
        <div className='relative flex flex-col items-center'>
          <h1 className='absolute top-5 w-full bg-slate-500 text-center text-2xl text-primary'>
            Biquinis
          </h1>
          <Image
            src={Biquini}
            alt='Logo'
            width={2000}
            height={2000}
            className='min-h-[600px] w-[400px] rounded-md shadow-md shadow-secondary sm:w-[350px]'
          />
        </div>
        <div className='relative flex flex-col'>
          <h1 className='absolute top-5 w-full bg-slate-500 text-center text-2xl text-primary'>
            Maiôs
          </h1>
          <Image
            src={Maio}
            alt='Logo'
            width={2000}
            height={2000}
            className='min-h-[600px] w-[400px] rounded-md shadow-md shadow-secondary sm:w-[350px]'
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
