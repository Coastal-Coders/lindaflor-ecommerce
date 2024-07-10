import { cva } from 'class-variance-authority';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:px-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
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
