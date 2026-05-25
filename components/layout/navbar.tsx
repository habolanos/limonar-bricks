"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Calcular Pedido/Obra", href: "/calculadora" },
  { label: "Maestros", href: "/maestros" },
  { label: "Transportadores", href: "/transportadores" },
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white",
        scrolled ? "shadow-md border-b border-limonar-sandDark" : "border-b border-limonar-sand"
      )}
    >
      <nav className="container-limonar flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/limonar_logo.svg"
            alt="Ladrillera Limonar"
            width={160}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-limonar-charcoal hover:text-limonar-lime rounded-md hover:bg-limonar-sand transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="primary" size="sm" asChild>
            <Link href="/maestros">Soy Maestro</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-limonar-charcoal rounded-md hover:bg-limonar-sand transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-limonar-sandDark">
          <div className="container-limonar py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-limonar-charcoal hover:text-limonar-lime hover:bg-limonar-sand rounded-lg transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-limonar-sandDark">
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
