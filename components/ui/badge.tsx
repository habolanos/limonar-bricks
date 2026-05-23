import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "terracotta" | "lime" | "gold" | "sand" | "dark" | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  terracotta: "bg-limonar-terracotta text-white border border-limonar-terracottaDark",
  lime: "bg-limonar-lime text-limonar-charcoal border border-limonar-limeDark",
  gold: "bg-limonar-lime text-limonar-charcoal border border-limonar-limeDark",
  sand: "bg-limonar-sand text-limonar-charcoal border border-limonar-sandDark",
  dark: "bg-limonar-charcoal text-white border border-limonar-charcoalLight",
  outline: "bg-transparent text-limonar-charcoal border border-limonar-charcoal",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

export function Badge({ className, variant = "terracotta", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
