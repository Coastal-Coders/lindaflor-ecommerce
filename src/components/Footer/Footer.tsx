import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='static bottom-0 z-0 mx-auto flex w-full flex-col items-center justify-center rounded-t-md border-t-2 border-secondary bg-secondary px-4 py-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div
          className='mb-2 flex flex-col gap-5 border-b border-black pb-5 sm:border-none'
          id='footer-contacts'
        >
          <h1 className='text-2xl font-semibold'>Linda Flor Moda Praia</h1>
          <Link
            href={'/about'}
            className='w-fit text-base font-semibold hover:italic'
          >
            Sobre Nós
          </Link>
          <Link
            href={'/sizes'}
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
          <Link
            href={
              'https://www.google.com/maps/place/Linda+Flor/@-10.9660432,-37.0862045,19z/data=!4m6!3m5!1s0x71ab19c48e02123:0x40748afa03db60ad!8m2!3d-10.9654973!4d-37.0861437!16s%2Fg%2F11b62m4j07?entry=ttu'
            }
            className='gap-x-1 text-lg font-semibold hover:italic md:flex'
          >
            R. Renato Barreto de Menezes, 1100 - São Conrado, Aracaju - SE, 49043-240
          </Link>
          <h4 className='text-lg font-semibold'>Telefone: 079 3023-0103</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
