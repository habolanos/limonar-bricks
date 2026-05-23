"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Calculadora", href: "/calculadora" },
  { label: "Maestros", href: "/maestros" },
  { label: "Partners", href: "/partners" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-limonar-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container-limonar flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-limonar-terracotta rounded-sm rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            <Flame className="absolute h-4 w-4 text-limonar-gold animate-farol-glow" />
          </div>
          <div>
            <span className="font-display font-bold text-xl text-white tracking-tight leading-none block">
              Limonar
            </span>
            <span className="text-[10px] text-limonar-sand/70 uppercase tracking-widest leading-none block">
              Ladrillera
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md hover:bg-white/10 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/calculadora">Calcular obra</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/maestros">Soy Maestro</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-limonar-charcoal/98 backdrop-blur-md border-t border-white/10">
          <div className="container-limonar py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
              <Button variant="outline" size="md" asChild>
                <Link href="/calculadora" onClick={() => setOpen(false)}>Calcular obra</Link>
              </Button>
              <Button variant="primary" size="md" asChild>
                <Link href="/maestros" onClick={() => setOpen(false)}>Soy Maestro</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
