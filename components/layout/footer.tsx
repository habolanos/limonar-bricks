import Link from "next/link";
import { Flame, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  productos: [
    { label: "Ladrillo Farol", href: "/productos#farol" },
    { label: "Ladrillo Tolete", href: "/productos#tolete" },
    { label: "Bloque Limonar", href: "/productos#bloque" },
    { label: "Especiales Premium", href: "/productos#especial" },
  ],
  herramientas: [
    { label: "Calculadora de Ladrillos", href: "/calculadora" },
    { label: "Maestros Limonar", href: "/maestros" },
    { label: "Embajadores", href: "/embajadores" },
    { label: "Portal Partners", href: "/partners" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Sostenibilidad", href: "/sostenibilidad" },
    { label: "Expansión de Mercados", href: "/mercados" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-limonar-charcoal text-white">
      <div className="container-limonar py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="w-8 h-8 bg-limonar-terracotta rounded-sm rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                <Flame className="absolute h-4 w-4 text-limonar-gold animate-farol-glow" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight leading-none block">Limonar</span>
                <span className="text-[10px] text-limonar-sand/60 uppercase tracking-widest leading-none block">Ladrillera</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Fabricamos el material. Tú construyes la historia.
              <br />Valle del Cauca, Colombia — desde el corazón de la tierra.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-limonar-terracotta flex-shrink-0" />
                <span>Km 4 Vía Palmira–Cali, Valle del Cauca</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-limonar-terracotta flex-shrink-0" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-limonar-terracotta flex-shrink-0" />
                <span>hola@limonar.co</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-limonar-terracotta/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-limonar-terracotta/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Productos</h4>
            <ul className="space-y-2.5">
              {footerLinks.productos.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-limonar-terracottaLight transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Herramientas */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Herramientas</h4>
            <ul className="space-y-2.5">
              {footerLinks.herramientas.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-limonar-terracottaLight transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-limonar-terracottaLight transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2025 Ladrillera Limonar S.A.S. — Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/30 font-display italic">
            "Hecho en Colombia. Construido para durar más que nosotros."
          </p>
        </div>
      </div>
    </footer>
  );
}
