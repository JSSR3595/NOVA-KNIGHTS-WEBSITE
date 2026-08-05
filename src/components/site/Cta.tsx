import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Site button: gradient primary, outline secondary, amber accent. */
const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.15em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-primary-foreground shadow-cta hover:-translate-y-0.5 hover:shadow-card-hover",
        accent:
          "bg-accent text-accent-foreground shadow-card hover:-translate-y-0.5 hover:shadow-card-hover",
        outline:
          "border-[1.5px] border-primary/35 bg-transparent text-primary hover:-translate-y-0.5 hover:border-primary hover:shadow-card",
        onDark:
          "bg-accent text-accent-foreground shadow-card hover:-translate-y-0.5 hover:shadow-card-hover",
        ghostLink:
          "text-primary underline-offset-4 hover:gap-3 hover:underline",
      },
      size: {
        sm: "h-11 px-4 text-sm",
        md: "h-12 px-6 text-[0.9375rem]",
        lg: "h-14 px-8 text-base",
        link: "h-auto p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Cta({
  className,
  variant,
  size,
  asChild,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof ctaVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(ctaVariants({ variant, size }), className)} {...props} />
  );
}

export { ctaVariants };
