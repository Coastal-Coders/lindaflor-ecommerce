import React from 'react';
import { cn } from '@/lib/utils';

const AlertContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('space-y-1', className)}
      {...props}
    />
  )
);
AlertContent.displayName = 'AlertContent';

export default AlertContent;
