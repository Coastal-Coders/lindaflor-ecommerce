'use client';

import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { useSignOut } from '@/hooks/auth';

const UserDropdown = () => {
  const fields = [
    {
      value: 'Sign In',
      href: '/signin',
    },
    {
      value: 'Sign Up',
      href: '/signup',
    },
  ];
  const { handleSubmit } = useSignOut();
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  const { data: session } = useSession();
  const handleLogout = async () => {
    await handleSubmit();
    signOut();
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='secondary'
            size='icon'
            aria-label='User Options'
            className={`flex rounded-full shadow-sm shadow-background transition duration-300 ease-in hover:scale-105 ${isAdmin ? 'hover:bg-primary' : 'hover:bg-primary/80'} `}
          >
            <CircleUser className='size-10 text-background' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='z-50 bg-gradient-to-bl from-secondary to-primary'
        >
          <DropdownMenuLabel>{session ? session.user.name : 'User'}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {fields.map((f) => (
            <Link
              href={f.href}
              key={f.value}
              passHref
            >
              <DropdownMenuItem
                className='rounded-lg p-3 text-sm font-semibold hover:bg-primary'
                onClick={() => {
                  if (f.href === '/signin') {
                    signIn();
                  }
                }}
              >
                {f.value}
              </DropdownMenuItem>
            </Link>
          ))}
          {session && (
            <Link
              href={'/admin'}
              passHref
            >
              <DropdownMenuItem className='rounded-lg p-3 text-sm font-semibold hover:bg-primary'>
                Admin
              </DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuSeparator />
          {session && (
            <DropdownMenuItem
              onClick={handleLogout}
              className='cursor-pointer rounded-lg p-3 text-sm font-semibold hover:bg-red-500'
            >
              Logout
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropdown;
