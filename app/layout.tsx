import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
 
export const metadata: Metadata = {
  title: "Ladrillera Limonar — Fabricamos el material. Tú construyes la historia.",
  description: "Ladrillos artesanales de máxima calidad del Valle del Cauca. Calculadora online, programa Maestros Limonar y portal de partners. Construye tu sueño con Limonar.",
  keywords: "ladrillera, ladrillos, construcción, Colombia, Valle del Cauca, Ladrillo Farol, maestros constructores",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  openGraph: {
    title: "Ladrillera Limonar",
    description: "Cada ladrillo tiene el nombre de quien lo soñó.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-limonar-charcoal">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}