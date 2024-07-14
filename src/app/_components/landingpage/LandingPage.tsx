'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardTitle } from '@/components/ui/Card';
import { Shirt, ShoppingBag, CreditCard, Package2 } from 'lucide-react';
import * as Biquini from '../../../../public/Biquini.jpg';
import * as Logo from '../../../../public/LindaFlorLogo-Photoroom.png';
import * as Maio from '../../../../public/Maiô.jpg';
const LandingPage = () => {
  return (
    <main className='min-h-screen bg-gradient-to-b from-primary/80 via-background/80 to-primary/70'>
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
          className='absolute bottom-10 text-lg font-semibold italic text-primary underline underline-offset-2 hover:scale-110 sm:bottom-20 md:text-3xl'
        >
          Compre Agora!
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
      <section className='my-10 flex w-full flex-col items-center justify-center gap-5 py-2'>
        <h1 className='text-center text-3xl font-semibold sm:text-4xl'>
          Entregando Qualidade <p>em</p>
        </h1>
        <div className='flex w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-background/20 via-secondary/80 to-primary/10 py-1 md:flex-row md:gap-8 lg:gap-28'>
          <div className='relative flex flex-col items-center justify-center text-center'>
            <h1 className='absolute top-5 w-full bg-slate-500 text-center text-2xl text-primary'>
              Biquinis
            </h1>
            <Image
              src={Biquini}
              alt='Logo'
              width={2000}
              height={2000}
              className='min-h-[600px] w-[400px] rounded-md shadow-md shadow-cyan-200 sm:w-[350px]'
            />
          </div>
          <span className='text-3xl font-semibold italic sm:text-4xl'>&</span>
          <div className='relative flex flex-col items-center justify-center'>
            <h1 className='absolute top-5 w-full bg-slate-500 text-center text-2xl text-primary'>
              Maiôs
            </h1>
            <Image
              src={Maio}
              alt='Logo'
              width={2000}
              height={2000}
              className='min-h-[600px] w-[400px] rounded-md shadow-md shadow-cyan-200 sm:w-[350px]'
            />
          </div>
        </div>
        <Link
          href={'/products'}
          className='text-lg font-semibold italic underline underline-offset-2 hover:scale-110 md:text-3xl'
        >
          Conheça Nossos Produtos!
        </Link>
        <p className='text-lg font-semibold italic md:text-3xl'>ou</p>
        <Link
          href={'https://api.whatsapp.com/message/KVRL354VW77FE1?autoload=1&app_absent=0'}
          className='text-lg font-semibold italic underline underline-offset-2 hover:scale-110 md:text-3xl'
        >
          Encomende seu biquini personalizado
        </Link>
      </section>
      <span className='mt-6 flex w-full items-center justify-center gap-x-4 rounded-md bg-secondary/80 py-5 text-center text-2xl font-semibold italic sm:text-4xl'>
        Siga-nos
        <Link
          href={'https://www.instagram.com/biquinislindaflor/?hl=pt-br'}
          className='rounded-md bg-primary/70 px-1 text-secondary underline underline-offset-2 hover:scale-105'
        >
          @biquinislindaflor
        </Link>
      </span>
    </main>
  );
};

export default LandingPage;
