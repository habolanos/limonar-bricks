import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-limonar-terracotta text-white hover:bg-limonar-terracottaDark shadow-warm focus-visible:ring-limonar-terracotta",
        lime: "bg-limonar-lime text-white hover:bg-limonar-limeDark shadow-warm focus-visible:ring-limonar-lime",
        outline: "border-2 border-limonar-terracotta text-limonar-terracotta hover:bg-limonar-terracotta hover:text-white focus-visible:ring-limonar-terracotta",
        "outline-lime": "border-2 border-limonar-lime text-limonar-lime hover:bg-limonar-lime hover:text-white focus-visible:ring-limonar-lime",
        ghost: "text-limonar-charcoal hover:bg-limonar-sand focus-visible:ring-limonar-mortar",
        "ghost-white": "text-white hover:bg-white/10 focus-visible:ring-white",
        dark: "bg-limonar-charcoal text-white hover:bg-limonar-charcoalLight focus-visible:ring-limonar-charcoal",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe5d] focus-visible:ring-[#25D366]",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
        icon: "p-2 aspect-square",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
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
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
