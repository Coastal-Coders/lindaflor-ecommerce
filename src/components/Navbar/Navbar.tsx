'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, SearchBar, UserDropdown } from '.';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 items-center border-y-8 border-primary bg-gradient-to-r from-secondary to-background'>
      <div className='my-2 grid w-full grid-flow-col grid-cols-3 items-center gap-4'>
        <Link
          href={'/'}
          className='relative mx-auto hidden h-14 w-40 duration-1000 ease-in-out hover:scale-110 md:block'
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
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
