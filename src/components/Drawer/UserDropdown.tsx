import { CircleUser } from 'lucide-react';
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
import { useSignOut } from '@/hooks/auth';

const UserDropdown = () => {
  const { handleSubmit } = useSignOut();
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
            className='rounded-full focus-visible:ring-0'
          >
            <CircleUser className='size-8 sm:size-5' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
          <DropdownMenuItem onClick={(e) => void handleSubmit(e)}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropdown;
