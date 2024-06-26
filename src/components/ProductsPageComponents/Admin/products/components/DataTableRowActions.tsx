'use client';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export function DataTableRowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex size-8 p-0 focus-visible:ring-0 data-[state=open]:bg-muted'
        >
          <DotsHorizontalIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-[160px]'
      >
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
