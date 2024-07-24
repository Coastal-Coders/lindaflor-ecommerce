'use client';

import React from 'react';
import { Grip } from 'lucide-react';
import Link from 'next/link';
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
    href: '#',
  },
];

const Navigation = () => {
  return (
    <>
      <span className='flex flex-row gap-2'>
        {Links.map((links) => (
          <Link
            href={links.href}
            key={links.value}
            className='hidden flex-row rounded-md text-sm font-semibold text-primary transition duration-1000 ease-in-out hover:shadow-sm hover:shadow-primary md:text-base lg:block'
          >
            {links.value}
          </Link>
        ))}
      </span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size='icon'
            className='flex rounded-full bg-transparent shadow-sm shadow-primary transition duration-300 ease-in hover:bg-secondary/80 lg:hidden'
          >
            <Grip className='size-6 text-primary' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          sideOffset={7}
          className='flex flex-col gap-y-1 rounded-lg bg-gradient-to-bl from-secondary to-background shadow-xl shadow-black lg:hidden'
        >
          {Links.map((f) => (
            <Link
              href={f.href}
              key={f.value}
            >
              <DropdownMenuItem className='rounded-lg p-5 text-sm font-semibold text-foreground hover:bg-primary md:text-base'>
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
