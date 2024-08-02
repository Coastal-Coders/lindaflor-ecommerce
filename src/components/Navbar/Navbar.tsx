// src/components/Navbar.tsx
'use client';

import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/utils/CartProvider/CartProvider';
import { Navigation, SearchBar, UserDropdown } from '.';
import { Button } from '../ui/Button';

const Navbar = () => {
  const { state } = useCart();

  return (
    <nav className='sticky top-0 z-[60] items-center border-b border-secondary bg-background py-0.5'>
      <div className='my-2 grid w-full grid-flow-col grid-cols-3 items-center gap-4 bg-gradient-to-r from-secondary to-primary py-2'>
        <Link
          href={'/'}
          className='relative mx-auto hidden h-14 w-40 grid-cols-1 duration-1000 ease-in-out hover:scale-110 md:block'
        >
          <Image
            src='/Logo.png'
            alt='Logo'
            fill
            priority
            quality={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </Link>

        <div className='col-span-2 px-5 md:col-span-1 md:px-0'>
          <SearchBar />
        </div>

        <div className='mr-5 flex items-center justify-end gap-5 lg:gap-2'>
          <Navigation />
          <Link href='/cart'>
            <Button
              variant='secondary'
              size='icon'
              aria-label='User Options'
              className='relative flex rounded-full p-1 shadow-sm shadow-background transition duration-300 ease-in hover:scale-105 hover:bg-secondary/50'
            >
              <ShoppingCart className='text-white' />
              {state.totalItems > 0 && (
                <span className='absolute -right-2 -top-2 rounded-full bg-red-600 px-2 py-0.5 text-xs text-white'>
                  {state.totalItems}
                </span>
              )}
            </Button>
          </Link>
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
