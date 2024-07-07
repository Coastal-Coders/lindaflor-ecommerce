import React from 'react';

const Footer = () => {
  return (
    <footer className='static bottom-0 z-0 mt-2 flex w-full flex-col items-center justify-center rounded-t-sm bg-gradient-to-b from-primary via-background to-secondary px-4 py-6'>
      <h1 className='text-lg font-semibold'>
        Linda Flor - Copyright © {new Date().getFullYear()}
      </h1>
      <h2 className='text-lg font-semibold'>CNPJ: 12.345.678/0001-00</h2>
      <h3 className='gap-x-1 text-lg font-semibold md:flex'>
        R. Renato Barreto de Menezes, 1100 -<p>São Conrado, Aracaju - SE, 49043-240</p>
      </h3>
      <h4 className='text-lg font-semibold'>Telefone: 079 3023-0103</h4>
    </footer>
  );
};

export default Footer;
