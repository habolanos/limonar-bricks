"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Target, Globe, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sustainabilityData } from "@/lib/limonar-data";

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-limonar-lime text-sm font-semibold uppercase tracking-widest mb-4">
              Nuestra historia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-7xl text-limonar-charcoal leading-tight mb-6">
              No somos una fábrica.<br />
              <span className="text-limonar-lime">Somos una familia.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-limonar-charcoalLight text-xl leading-relaxed max-w-xl">
              Que aprendió que la tierra bien trabajada sostiene sueños. Desde el Valle del Cauca, fabricamos cada ladrillo como si fuera el último que necesitas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="py-20 bg-limonar-sand/30">
        <div className="container-limonar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-limonar-sand/60 shadow-warm"
            >
              <div className="w-12 h-12 rounded-2xl bg-limonar-terracotta/10 flex items-center justify-center mb-5">
                <Heart className="h-6 w-6 text-limonar-terracotta" />
              </div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">Nuestra Misión</h2>
              <p className="text-limonar-charcoalLight leading-relaxed">
                Fabricar ladrillos de máxima calidad con disciplina artesanal e innovación constante, siendo el aliado más confiable de maestros, constructores y familias colombianas que edifican su futuro ladrillo a ladrillo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-limonar-lime rounded-3xl p-8 shadow-warm"
            >
              <div className="w-12 h-12 rounded-2xl bg-limonar-lime/10 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-limonar-lime" />
              </div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">Nuestra Visión</h2>
              <p className="text-limonar-charcoalLight leading-relaxed">
                Ser la ladrillera de referencia en Colombia y Latinoamérica para 2030, expandiendo nuestra producción a mercados internacionales con un modelo sostenible, trazable y centrado en las personas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-20 bg-white">
        <div className="container-limonar">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Globe className="h-10 w-10 text-limonar-terracotta mx-auto mb-4" />
            <h2 className="font-display font-bold text-4xl text-limonar-charcoal mb-4">
              Filosofía "Day 1"
            </h2>
            <p className="text-limonar-charcoalLight text-lg leading-relaxed">
              Inspirados en la mentalidad de siempre actuar como si fuera el primer día — con hambre, humildad y obsesión por el cliente — aplicada a la manufactura artesanal colombiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "Tú no compras ladrillos. Tú construyes legados.",
                author: "Filosofía Limonar",
              },
              {
                quote: "Cada obra que se levanta con Limonar es una historia que alguien va a contar por generaciones.",
                author: "Comunidad Limonar",
              },
              {
                quote: "El mejor arquitecto del mundo necesita al mejor maestro. Y el mejor maestro merece el mejor ladrillo.",
                author: "Programa Maestros Limonar",
              },
              {
                quote: "Producimos con la misma disciplina con la que tú construyes. Sin atajos. Sin excusas.",
                author: "Control de Calidad Limonar",
              },
            ].map((item, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-limonar-sand/40 border-l-4 border-limonar-terracotta rounded-xl p-6"
              >
                <p className="font-display text-lg text-limonar-charcoal leading-relaxed mb-3">
                  "{item.quote}"
                </p>
                <cite className="text-xs text-limonar-mortar font-semibold uppercase tracking-wider not-italic">
                  — {item.author}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Sostenibilidad snapshot */}
      <section className="py-20 bg-limonar-lime/5">
        <div className="container-limonar">
          <div className="text-center mb-12">
            <Leaf className="h-10 w-10 text-limonar-lime mx-auto mb-4" />
            <h2 className="font-display font-bold text-3xl text-limonar-charcoal">
              Compromiso ambiental
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: sustainabilityData.treesPlanted.toLocaleString("es-CO"), label: "Árboles plantados", emoji: "🌱" },
              { value: `${sustainabilityData.waterRecycled}%`, label: "Agua reciclada en producción", emoji: "💧" },
              { value: `-${sustainabilityData.carbonReduced}%`, label: "Reducción de huella de carbono", emoji: "🌿" },
              { value: "100%", label: "Mano de obra certificada", emoji: "🤝" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-limonar-sand/60">
                <span className="text-4xl block mb-2">{stat.emoji}</span>
                <p className="font-display font-bold text-3xl text-limonar-lime">{stat.value}</p>
                <p className="text-sm text-limonar-charcoalLight mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="lime" size="lg" asChild>
              <Link href="/sostenibilidad">Ver reporte completo <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
