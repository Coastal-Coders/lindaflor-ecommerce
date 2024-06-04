import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/Sheet';
import { Menu, Package2 } from 'lucide-react';
import { Button } from '../ui/Button';

const Sheets = () => {
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
              className='mb-2 flex w-fit items-center gap-3 space-x-2 text-lg font-semibold'
            >
              <Package2 className='size-8 sm:size-5' />
              <SheetHeader className='text-2xl sm:text-sm'>Linda Flor</SheetHeader>
            </Link>
            <Link
              href='/dashboard'
              className='text-2xl text-muted-foreground hover:text-foreground sm:text-lg'
            >
              Dashboard
            </Link>
            <Link
              href='/'
              className='text-2xl text-muted-foreground hover:text-foreground sm:text-lg'
            >
              Orders
            </Link>
            <Link
              href='/products'
              className='text-2xl text-muted-foreground hover:text-foreground sm:text-lg'
            >
              Products
            </Link>
            <Link
              href='#'
              className='text-2xl text-muted-foreground hover:text-foreground sm:text-lg'
            >
              Customers
            </Link>
            <Link
              href='#'
              className='text-2xl text-muted-foreground hover:text-foreground sm:text-lg'
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sheets;
