import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Menu, Package2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/Sheet';

const Sheets = () => {
  const links = [
    {
      value: 'Dashboard',
      href: '/admin',
    },
    {
      value: 'Products',
      href: '/admin/products',
    },
    {
      value: 'New Employee',
      href: '/',
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='default'
            size='icon'
            className='shrink-0 border border-background bg-transparent shadow-sm shadow-black transition duration-300 ease-in hover:scale-105 hover:bg-primary/80'
          >
            <SheetTitle>
              <Menu className='size-5 text-background sm:size-8' />
            </SheetTitle>
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='w-72 bg-secondary sm:w-60'
        >
          <section className='grid gap-6 text-lg font-medium'>
            <Link
              href='/admin'
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
                className='w-fit text-2xl hover:text-white sm:text-lg'
                key={e.value}
              >
                <SheetPrimitive.Close>{e.value}</SheetPrimitive.Close>
              </Link>
            ))}
          </section>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sheets;
