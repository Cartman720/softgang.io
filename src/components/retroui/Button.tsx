import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'font-head transition-all rounded outline-hidden cursor-pointer duration-200 font-medium inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default:
          'shadow-md hover:shadow active:shadow-none bg-primary text-primary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-primary-hover',
        secondary:
          'shadow-md hover:shadow active:shadow-none bg-secondary shadow-foreground text-secondary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-secondary-hover',
        outline:
          'shadow-md hover:shadow active:shadow-none bg-transparent border-2 transition hover:translate-y-1 active:translate-y-2 active:translate-x-1',
        link: 'bg-transparent hover:underline',
      },
      size: {
        sm: 'px-3 py-1 text-sm shadow hover:shadow-none',
        md: 'px-4 py-1.5 text-base',
        lg: 'px-6 lg:px-8 py-2 lg:py-3 text-md lg:text-lg',
        icon: 'p-2',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

type ButtonOnlyProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> & {
  href?: undefined;
};

type AnchorOnlyProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type IButtonProps = (
  | ButtonOnlyProps
  | AnchorOnlyProps
) &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = React.forwardRef<any, IButtonProps>(
  (
    {
      children,
      size = 'md',
      className = '',
      variant = 'default',
      asChild = false,
      href,
      ...props
    }: IButtonProps,
    forwardedRef
  ) => {
    const isLink = !asChild && typeof href === 'string' && href.length > 0;
    const classes = cn(buttonVariants({ variant, size }), className);

    if (asChild) {
      return (
        <Slot ref={forwardedRef} className={classes} {...(props as any)}>
          {children}
        </Slot>
      );
    }

    if (isLink) {
      const { href: _hrefIgnored, ...restAnchorProps } = props as AnchorOnlyProps;
      return (
        <a
          ref={forwardedRef}
          className={classes}
          href={href}
          {...restAnchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={forwardedRef} className={classes} {...(props as ButtonOnlyProps)}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
