'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import * as Logo from '../../../public/LindaFlorLogo-Photoroom.png';
import SearchBar from '../SearchBar';
//import { ThemeToogle } from '../ThemeToogle';
import UserDropdown from '../UserDropdown';
import NavbarHidden from './NavbarHidden';
export const Links = [
  {
    value: 'Sobre',
    href: '/',
  },
  {
    value: 'Loja',
    href: '/products',
  },
  {
    value: 'Tamanhos',
    href: '/signin',
  },
  {
    value: 'Contatos',
    href: '/signup',
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-10 mb-2 flex items-center border-b bg-gradient-to-r from-cyan-200 via-cyan-100 to-yellow-200 py-3'>
      <div className='flex w-full items-center bg-gradient-to-r from-secondary to-background py-2'>
        <Link
          href={'/'}
          className='ml-5 flex w-fit'
        >
          <Image
            src={Logo}
            alt='Logo'
            width={300}
            height={50}
            className='max-h-[100px] min-w-[180px]'
          />
        </Link>
        <div className='ml-auto flex items-center justify-end gap-2 px-2 lg:gap-4 lg:px-6'>
          <SearchBar />
          <NavbarHidden />
          <ul className='hidden items-center gap-x-2 px-2 md:flex lg:mr-4 lg:gap-x-8'>
            {Links.map((l) => (
              <Link
                href={l.href}
                key={l.value}
                className={`rounded-md px-1 text-sm font-semibold text-primary hover:shadow-sm hover:shadow-primary md:text-base ${pathname === l.href ? 'text-cyan-400/95 shadow-md shadow-cyan-400 hover:shadow-md hover:shadow-current' : ''}`}
              >
                {l.value}
              </Link>
            ))}
          </ul>
          <UserDropdown />
          {/*<ThemeToogle />*/}
          {/*Refazer usando DropDown assim como UserDrop*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
