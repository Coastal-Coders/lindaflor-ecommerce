'use client';

import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
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
          {session && <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>}
          <DropdownMenuSeparator />
          {fields.map((f) => (
            <Link
              href={f.href}
              key={f.value}
            >
              <DropdownMenuItem className='rounded-lg p-3 text-sm font-semibold hover:bg-primary'>
                {f.value}
              </DropdownMenuItem>
            </Link>
          ))}
          {/*TODO: Ajustar para quando o usuário for Manager ter esse acesso */}
          {session && (
            <Link href={'/admin'}>
              <DropdownMenuItem className='rounded-lg p-3 text-sm font-semibold hover:bg-primary'>
                Admin
              </DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuSeparator />
          {session && (
            <DropdownMenuItem
              onClick={(e) => void handleSubmit(e)}
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
