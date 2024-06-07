'use client';
import React from 'react';
import SearchBar from './SearchBar';
import Sheets from './Sheets';
import { ThemeToogle } from './ThemeToogle';
import UserDropdown from './UserDropdown';

const Drawer = () => {
  return (
    <nav className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
      <Sheets />
      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <SearchBar />
        <ThemeToogle />
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Drawer;
