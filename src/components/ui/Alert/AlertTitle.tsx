import React from 'react';
import { cn } from '@/lib/utils';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-base font-medium', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

export default AlertTitle;
