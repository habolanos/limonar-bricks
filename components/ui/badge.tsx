import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "terracotta" | "lime" | "gold" | "sand" | "dark" | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  terracotta: "bg-limonar-terracotta/10 text-limonar-terracotta border border-limonar-terracotta/30",
  lime: "bg-limonar-lime/10 text-limonar-limeDark border border-limonar-lime/30",
  gold: "bg-limonar-gold/10 text-limonar-gold border border-limonar-gold/30",
  sand: "bg-limonar-sand text-limonar-mortar border border-limonar-sandDark/40",
  dark: "bg-limonar-charcoal text-white border border-limonar-charcoalLight",
  outline: "bg-transparent text-limonar-terracotta border border-limonar-terracotta",
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
