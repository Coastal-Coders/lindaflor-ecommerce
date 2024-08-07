import React from 'react';
import { cn } from '@/lib/utils';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
