import React from 'react';
import { cn } from '@/lib/utils';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
);
PaginationItem.displayName = 'PaginationItem';

export default PaginationItem;
