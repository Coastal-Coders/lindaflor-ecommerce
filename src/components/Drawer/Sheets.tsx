import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/Sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Menu, Package2 } from 'lucide-react';
import { Button } from '../ui/Button';

const Sheets = () => {
  //Apenas Para testes
  const links = [
    {
      value: 'Dashboard',
      href: '/dashboard',
    },
    {
      value: 'Orders',
      href: '/',
    },
    {
      value: 'Products',
      href: '/products',
    },
    {
      value: 'Costumers',
      href: '/',
    },
    {
      value: 'Analytics',
      href: '/',
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='shrink-0'
          >
            <Menu className='size-8 sm:size-5' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='w-[300px] sm:w-[250px]'
        >
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='/'
              className='w-fit'
            >
              <SheetPrimitive.Close className='mb-2 flex w-fit items-center gap-3 space-x-2 text-lg font-semibold'>
                <Package2 className='size-8 sm:size-5' />
                <SheetHeader className='text-2xl sm:text-lg'>Linda Flor</SheetHeader>
              </SheetPrimitive.Close>
            </Link>
            {links.map((e) => (
              <Link
                href={e.href}
                className='w-fit text-2xl text-muted-foreground hover:text-foreground sm:text-lg'
                key={e.value}
              >
                <SheetPrimitive.Close>{e.value}</SheetPrimitive.Close>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sheets;
