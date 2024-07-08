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
      value: 'Settings',
      href: '/',
    },
    {
      value: 'Support',
      href: '/',
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
            <CircleUser className='size-8 text-cyan-500' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>User name</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {fields.map((f) => (
            <Link
              href={f.href}
              key={f.value}
            >
              <DropdownMenuItem>{f.value}</DropdownMenuItem>
            </Link>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className='focus:bg-red-300'>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropdown;
