'use client';
import { ThemeToggle } from '@/components/ThemeToggle';
import Sheets from './Sheets';
import UserDropdown from '../UserDropdown';

const Drawer = () => {
  return (
    <nav className='sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
      <Sheets />
      <div className='flex w-full items-center justify-end gap-4 sm:gap-0.5 md:ml-auto md:gap-2 lg:gap-4'>
        <ThemeToggle />
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Drawer;
