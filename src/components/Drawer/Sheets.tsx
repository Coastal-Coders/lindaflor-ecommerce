import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Menu, Package2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/Sheet';

const Sheets = () => {
  //Apenas Para testes
  const links = [
    {
      value: 'Dashboard',
      href: '/dashboard',
    },   
    {
      value: 'Products',
      href: '/products',
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
            <Menu className='size-5 sm:size-8' />
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
              <SheetPrimitive.Close className='mb-2 flex w-fit items-center gap-3 space-x-1 text-lg font-semibold'>
                <Package2 className='size-5 sm:size-6' />
                <SheetHeader className='text-lg sm:text-xl'>Linda Flor</SheetHeader>
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
