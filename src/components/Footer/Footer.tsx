import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='static bottom-0 z-0 mx-auto flex w-full flex-col items-center justify-center rounded-t-sm bg-gradient-to-b from-primary/60 via-background to-secondary px-4 py-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='mb-2 flex flex-col gap-5 border-b border-black pb-5 sm:border-none'>
          <h1 className='text-xl font-semibold'>Linda Flor Moda Praia</h1>
          <Link
            href={'/'}
            className='w-fit text-base font-semibold hover:italic'
          >
            Sobre Nós
          </Link>
          <Link
            href={'/'}
            className='w-fit text-base font-semibold hover:italic'
          >
            Guia de Tamanhos
          </Link>
          <Link
            href={'https://www.instagram.com/biquinislindaflor/?hl=pt-br'}
            className='flex w-fit items-center text-base font-semibold hover:italic'
          >
            <FaInstagram className='size-6' />
            <p>biquinislindaflor</p>
          </Link>
          <Link
            href={'https://api.whatsapp.com/message/KVRL354VW77FE1?autoload=1&app_absent=0'}
            className='flex w-fit items-center text-base font-semibold hover:italic'
          >
            <FaWhatsapp className='size-6' />
            <p>Fale Conosco</p>
          </Link>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-lg font-semibold'>
            Linda Flor - Copyright © {new Date().getFullYear()}
          </h1>
          <h2 className='text-lg font-semibold'>CNPJ: 12.345.678/0001-00</h2>
          <h3 className='gap-x-1 text-lg font-semibold md:flex'>
            R. Renato Barreto de Menezes, 1100 - São Conrado, Aracaju - SE, 49043-240
          </h3>
          <h4 className='text-lg font-semibold'>Telefone: 079 3023-0103</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
