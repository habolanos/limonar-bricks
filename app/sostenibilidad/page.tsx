"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, TreePine, Sun, Recycle, Heart } from "lucide-react";
import { sustainabilityData } from "@/lib/limonar-data";

const pillars = [
  { icon: Droplets, title: "Agua", stat: `${sustainabilityData.waterRecycled}%`, desc: "Del agua utilizada en producción se recicla mediante un sistema de captación y reutilización.", color: "blue" },
  { icon: TreePine, title: "Árboles", stat: sustainabilityData.treesPlanted.toLocaleString("es-CO"), desc: "Árboles nativos plantados en alianza con comunidades del Valle del Cauca.", color: "green" },
  { icon: Sun, title: "Energía solar", stat: `${sustainabilityData.solarPercent}%`, desc: "De la energía de nuestras instalaciones proviene de paneles solares instalados en 2023.", color: "yellow" },
  { icon: Recycle, title: "Residuos", stat: "-62%", desc: "Reducción de residuos de producción gracias a la reutilización de material de cocción.", color: "orange" },
  { icon: Leaf, title: "Carbono", stat: `-${sustainabilityData.carbonReduced}%`, desc: "Reducción de huella de carbono en logística mediante rutas optimizadas con IA.", color: "green" },
  { icon: Heart, title: "Comunidad", stat: "240+", desc: "Familias beneficiadas en el área de influencia con empleo directo e indirecto.", color: "red" },
];

export default function SostenibilidadPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10 text-center">
          <Leaf className="h-12 w-12 text-limonar-lime mx-auto mb-5" />
          <h1 className="font-display font-bold text-5xl md:text-6xl text-limonar-charcoal mb-4">
            Construimos con la tierra.<br />
            <span className="text-limonar-lime">La cuidamos también.</span>
          </h1>
          <p className="text-limonar-charcoalLight text-lg max-w-xl mx-auto">
            Nuestra promesa ambiental no es marketing. Es nuestra manera de devolver al suelo lo que nos da.
          </p>
        </div>
      </section>

      <section className="py-20 bg-limonar-cream">
        <div className="container-limonar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-warm border border-limonar-sand/60"
              >
                <div className="w-12 h-12 rounded-2xl bg-limonar-lime/10 flex items-center justify-center mb-5">
                  <pillar.icon className="h-6 w-6 text-limonar-lime" />
                </div>
                <p className="font-display font-bold text-4xl text-limonar-lime mb-1">{pillar.stat}</p>
                <h3 className="font-semibold text-lg text-limonar-charcoal mb-2">{pillar.title}</h3>
                <p className="text-sm text-limonar-charcoalLight leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-limonar-lime/5">
        <div className="container-limonar max-w-3xl text-center">
          <h2 className="font-display font-bold text-3xl text-limonar-charcoal mb-6">
            Meta 2030: Carbono neutro
          </h2>
          <p className="text-limonar-charcoalLight leading-relaxed mb-8">
            Nuestro plan hacia la neutralidad de carbono incluye la electrificación total del parque de hornos, la certificación ISO 14001 y la compensación de todas las emismas de Scope 1, 2 y 3 mediante créditos de carbono certificados con bosques colombianos.
          </p>
          <div className="bg-white rounded-2xl p-6 border border-limonar-sand/60 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-limonar-charcoal">Progreso hacia carbono neutro</span>
              <span className="text-sm font-bold text-limonar-lime">43%</span>
            </div>
            <div className="w-full h-4 bg-limonar-sand rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-limonar-lime rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "43%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-limonar-mortar">2022 — Inicio</span>
              <span className="text-xs text-limonar-mortar">2030 — Meta</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
