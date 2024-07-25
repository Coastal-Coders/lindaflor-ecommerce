import { cva } from 'class-variance-authority';

const alertVariants = cva(
  'relative flex w-full items-center gap-4 rounded-lg border p-4 py-3 text-sm [&>svg]:size-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground [&>svg]:text-foreground',
        success: 'border-success/50 bg-success/15 text-success [&>svg]:text-success',
        warning: 'border-warning/50 bg-warning/15 text-warning [&>svg]:text-warning',
        info: 'border-info/50 bg-info/15 text-info [&>svg]:text-info',
        error: 'border-destructive/50 bg-destructive/15 text-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export default alertVariants;
