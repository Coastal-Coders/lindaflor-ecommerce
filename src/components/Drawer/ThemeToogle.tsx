'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown-menu';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToogle() {
  const { setTheme, themes } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='focus-visible:ring-0'
          >
            <SunIcon className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme}
              onClick={() => setTheme(theme)}
            >
              {theme}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
