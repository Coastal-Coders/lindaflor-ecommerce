'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavbarHidden from './NavbarHidden';
import * as Logo from '../../../public/LindaFlorLogo-Photoroom.png';
import SearchBar from '../SearchBar';
//import { ThemeToogle } from '../ThemeToogle';
import UserDropdown from '../UserDropdown';

export const Links = [
  {
    value: 'Sobre',
    href: '/about',
  },
  {
    value: 'Loja',
    href: '/products',
  },
  {
    value: 'Tamanhos',
    href: '/sizes',
  },
  {
    value: 'Contatos',
    href: '#footer-contacts',
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const scrollToContacts = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const footerContacts = document.querySelector('#footer-contacts');
    if (footerContacts) {
      footerContacts.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='sticky top-0 z-10 mb-2 flex items-center border-b bg-primary py-3'>
      <div className='flex w-full items-center bg-gradient-to-r from-secondary to-background py-2'>
        <Link
          href={'/'}
          className='ml-5 flex w-fit duration-1000 ease-in-out hover:scale-110'
        >
          <Image
            src={Logo}
            alt='Logo'
            width={300}
            height={50}
            className='max-h-[100px] min-w-[180px]'
          />
        </Link>
        <div className='ml-auto flex items-center justify-end gap-1 px-1 lg:gap-4 lg:px-6'>
          <SearchBar />
          <NavbarHidden />
          <ul className='hidden items-center gap-x-1 px-1 md:flex lg:mr-4 lg:gap-x-8'>
            {Links.map((l) => (
              <Link
                href={l.href}
                key={l.value}
                onClick={l.value === 'Contatos' ? scrollToContacts : undefined}
                className={`rounded-md px-1 text-sm font-semibold text-primary transition duration-1000 ease-in-out hover:shadow-sm hover:shadow-primary md:text-base ${pathname === l.href ? 'shadow-md shadow-primary hover:shadow-md hover:shadow-current' : ''}`}
              >
                {l.value}
              </Link>
            ))}
          </ul>
          <UserDropdown />
          {/* <ThemeToogle /> */}
          {/*Refazer usando DropDown assim como UserDrop*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
