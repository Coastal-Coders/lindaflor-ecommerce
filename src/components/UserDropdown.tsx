import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { CircleUser } from 'lucide-react';

const UserDropdown = () => {
  //Apenas Para Testes
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
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='secondary'
            size='icon'
            className='rounded-full bg-transparent focus-visible:ring-0'
          >
            <CircleUser className='size-10 text-cyan-500' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='bg-gradient-to-bl from-secondary to-background'
        >
          <DropdownMenuLabel>User name</DropdownMenuLabel>
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
          <DropdownMenuSeparator />
          <DropdownMenuItem className='rounded-lg p-3 text-sm font-semibold hover:bg-red-500'>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropdown;
