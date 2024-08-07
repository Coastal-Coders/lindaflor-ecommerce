'use client';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

export function DataTableRowActions({ id }: { id: number }) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='secondary'
          className='flex size-8 border border-black p-0 shadow-sm shadow-black transition duration-500 ease-in-out hover:scale-90 focus-visible:ring-0 data-[state=open]:bg-background'
        >
          <DotsHorizontalIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-40 border border-black bg-background font-semibold shadow-sm shadow-black'
      >
        <DropdownMenuItem
          className='cursor-pointer rounded-md transition duration-500 ease-in-out hover:scale-90 focus:bg-cyan-200'
          onClick={() => router.push(`/admin/products/${id}`)}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer rounded-md transition duration-500 ease-in-out hover:scale-90 focus:bg-red-500'>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
