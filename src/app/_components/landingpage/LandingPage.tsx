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
    <main className='min-h-screen'>
      <section className='relative flex w-full flex-col items-center justify-center rounded-md bg-gradient-to-b from-background via-secondary/80 to-secondary'>
        <h1 className='absolute top-10 text-lg font-semibold italic text-primary sm:top-20 md:text-4xl'>
          Monte o Seu Biquini Perfeito!
        </h1>
        <Image
          src={Logo}
          alt='Logo'
          width={2000}
          height={2000}
          className='max-h-[500px] w-full'
        />
        <Link
          href={'/products'}
          className='absolute bottom-10 text-lg font-semibold italic text-primary underline underline-offset-2 hover:scale-110 sm:bottom-20 md:text-3xl'
        >
          Compre Agora!
        </Link>
      </section>
      <section className='my-4 grid w-full grid-cols-1 items-center justify-center gap-5 px-2 text-center text-base sm:grid-cols-2 lg:grid-cols-4'>
        <Card className='flex items-center justify-center gap-x-2 border-none bg-background'>
          <Shirt className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Aceitamos Encomendas
          </CardTitle>
        </Card>
        <Card className='flex items-center justify-center gap-x-2 border-none bg-background'>
          <ShoppingBag className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Atacado e Varejo
          </CardTitle>
        </Card>
        <Card className='flex items-center justify-center gap-x-2 border-none bg-background'>
          <Package2 className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Entregamos em Toda Aracaju
          </CardTitle>
        </Card>
        <Card className='flex items-center justify-center gap-x-2 border-none bg-background'>
          <CreditCard className='size-8' />
          <CardTitle className='text-base sm:text-lg lg:text-xl xl:text-2xl'>
            Parcelamos em até 12x
          </CardTitle>
        </Card>
      </section>
      <section className='my-10 flex w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-semibold sm:text-4xl'>Entregando Qualidade em </h1>
        <div className='flex w-full flex-col items-center justify-center gap-5 md:flex-row md:gap-10 lg:gap-28'>
          <div className='relative flex flex-col items-center justify-center text-center'>
            <h1 className='absolute top-5 w-full bg-slate-500 text-center text-2xl text-primary'>
              Biquinis
            </h1>
            <Image
              src={Biquini}
              alt='Logo'
              width={2000}
              height={2000}
              className='min-h-[600px] w-[400px] rounded-md sm:w-[350px]'
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
              className='min-h-[600px] w-[400px] rounded-md sm:w-[350px]'
            />
          </div>
        </div>
      </section>
      <span className='my-6 flex w-full items-center justify-center text-center text-3xl font-semibold italic sm:text-4xl'>
        Siga-nos @biquinislindaflor
      </span>
    </main>
  );
};

export default LandingPage;
