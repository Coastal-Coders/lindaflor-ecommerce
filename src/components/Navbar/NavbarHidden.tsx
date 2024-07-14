import React from 'react';
import { Grip } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Links } from './Navbar';

const NavbarHidden = () => {
  const pathname = usePathname();
  const scrollToContacts = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const footerContacts = document.querySelector('#footer-contacts');
    if (footerContacts) {
      footerContacts.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size='icon'
            className='flex rounded-full bg-secondary text-cyan-400 transition duration-150 ease-in hover:bg-primary md:hidden'
          >
            <Grip className='size-6 text-cyan-600' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          sideOffset={7}
          className='flex flex-col gap-y-1 rounded-lg bg-gradient-to-bl from-secondary to-background shadow-xl shadow-black md:hidden'
        >
          {Links.map((f) => (
            <Link
              href={f.href}
              key={f.value}
              onClick={f.value === 'Contatos' ? scrollToContacts : undefined}
            >
              <DropdownMenuItem
                className={`rounded-lg p-5 text-sm font-semibold text-cyan-700 hover:bg-primary md:text-base ${pathname === f.href ? 'text-cyan-500' : ''}`}
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

export default NavbarHidden;
