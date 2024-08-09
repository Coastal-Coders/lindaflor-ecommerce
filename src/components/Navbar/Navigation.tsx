'use client';

import React from 'react';
import { Grip } from 'lucide-react';
import Link from 'next/link';
import { useNavigation } from '@/hooks/Navigation';
import { Button } from '../ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';

const Links = [
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

const Navigation = () => {
  const { pathname, scrollToContacts } = useNavigation();
  return (
    <>
      <span className='flex flex-row gap-2'>
        {Links.map((links) => (
          <Link
            href={links.href}
            key={links.value}
            onClick={links.value === 'Contatos' ? scrollToContacts : undefined}
            className={`hidden flex-row rounded-md text-sm font-semibold text-foreground transition duration-700 ease-in-out hover:shadow-sm hover:shadow-background md:px-0 md:text-base lg:block xl:px-1 ${pathname === links.href ? 'shadow-md shadow-background' : ''}`}
          >
            {links.value}
          </Link>
        ))}
      </span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size='icon'
            variant={'secondary'}
            className='flex rounded-full p-1 shadow-sm shadow-background transition duration-300 ease-in hover:scale-105 hover:bg-secondary/50 lg:hidden'
          >
            <Grip className='size-6 text-background' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          sideOffset={7}
          className='z-50 flex flex-col gap-y-1 rounded-lg bg-gradient-to-bl from-secondary to-primary shadow-xl shadow-black lg:hidden'
        >
          <Link href={'/'}>
            <DropdownMenuItem
              className={`rounded-lg p-5 text-sm font-semibold text-foreground hover:bg-primary md:hidden md:text-base ${pathname === '/' ? 'bg-background/80 hover:bg-background/80' : ''}`}
            >
              Home
            </DropdownMenuItem>
          </Link>
          {Links.map((f) => (
            <Link
              href={f.href}
              key={f.value}
              onClick={f.value === 'Contatos' ? scrollToContacts : undefined}
            >
              <DropdownMenuItem
                className={`rounded-lg p-5 text-sm font-semibold text-foreground transition duration-500 ease-in-out hover:bg-primary md:text-base ${pathname === f.href ? 'bg-background/80 hover:bg-background/80' : ''}`}
              >
                {f.value}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Navigation;
