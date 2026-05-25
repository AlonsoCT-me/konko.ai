import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-neutral-950 text-white hover:bg-neutral-800 rounded-full',
        gold: 'bg-brand-gold text-neutral-950 hover:bg-brand-gold-dark rounded-full',
        outline: 'border border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50 rounded-full',
        'outline-dark': 'border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 rounded-full',
        ghost: 'bg-transparent text-neutral-950 hover:bg-neutral-100 rounded-full',
        white: 'bg-white text-neutral-950 hover:bg-neutral-100 rounded-full shadow-card',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full',
        secondary: 'bg-neutral-100 text-neutral-950 hover:bg-neutral-200 rounded-full',
        link: 'text-neutral-950 underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-10 px-5 text-sm',
        sm: 'h-8 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-base font-semibold',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
