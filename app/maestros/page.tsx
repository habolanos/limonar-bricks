"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Star, Users, Gift, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { maestroLevels, embajadorLevels } from "@/lib/limonar-data";

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full h-2 bg-limonar-sand rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export default function MaestrosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-limonar-charcoal relative overflow-hidden">
        <div className="absolute inset-0 brick-texture opacity-10" />
        <div className="container-limonar relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-limonar-gold/20 border border-limonar-gold/40 rounded-full px-5 py-2 mb-6">
            <Trophy className="h-4 w-4 text-limonar-gold" />
            <span className="text-limonar-gold text-sm font-medium">Programa de fidelización</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            Programa Maestros<br />
            <span className="text-limonar-gold">Limonar</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            El mejor maestro merece el mejor ladrillo y las mejores condiciones. Compra, acumula puntos y desbloquea beneficios exclusivos.
          </p>
          <Button variant="primary" size="xl" asChild>
            <Link href="/contacto">Registrarme como Maestro <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-limonar-sand/30">
        <div className="container-limonar">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-limonar-charcoal">
              ¿Cómo funciona?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Users, title: "Regístrate", desc: "Crea tu perfil de Maestro Limonar con tu número de licencia de construcción. Verificamos en 24h." },
              { step: "02", icon: Star, title: "Acumula puntos", desc: "Gana 1 punto Ladrillo de Oro por cada COP gastado. +500 puntos por cada maestro referido." },
              { step: "03", icon: Gift, title: "Desbloquea beneficios", desc: "Sube de nivel y accede a descuentos, entrega prioritaria, crédito y reconocimiento en la comunidad." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 shadow-warm text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-limonar-terracotta/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-limonar-terracotta" />
                </div>
                <span className="text-4xl font-display font-bold text-limonar-sand">{item.step}</span>
                <h3 className="font-display font-bold text-lg text-limonar-charcoal mt-2 mb-2">{item.title}</h3>
                <p className="text-limonar-charcoalLight text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track A — Maestros levels */}
      <section className="py-16 bg-white">
        <div className="container-limonar">
          <div className="text-center mb-12">
            <span className="text-limonar-terracotta text-sm font-semibold uppercase tracking-widest">Track A</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-limonar-charcoal mt-2">
              Niveles Maestros Limonar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {maestroLevels.map((level, i) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-limonar-cream rounded-2xl p-6 border border-limonar-sand/60"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl">{level.badge}</span>
                    <h3 className="font-display font-bold text-lg text-limonar-charcoal mt-1">{level.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-limonar-mortar">Desde</p>
                    <p className="font-bold text-sm" style={{ color: level.color }}>
                      {level.minPoints.toLocaleString("es-CO")} pts
                    </p>
                  </div>
                </div>
                <ProgressBar
                  value={[20, 35, 55, 75, 95][i]}
                  color={level.color}
                />
                <ul className="mt-4 space-y-1.5">
                  {level.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-limonar-charcoalLight">
                      <CheckCircle2 className="h-4 w-4 text-limonar-lime flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track B — Embajadores */}
      <section className="py-16 bg-limonar-lime/5">
        <div className="container-limonar">
          <div className="text-center mb-12">
            <span className="text-limonar-lime text-sm font-semibold uppercase tracking-widest">Track B</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-limonar-charcoal mt-2">
              Embajadores Limonar
            </h2>
            <p className="text-limonar-charcoalLight mt-3 max-w-md mx-auto">
              Para clientes finales y familias que aman construir con Limonar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {embajadorLevels.map((level, i) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-limonar-sand/60 shadow-sm text-center"
              >
                <span className="text-4xl block mb-2">{level.badge}</span>
                <h3 className="font-display font-bold text-lg text-limonar-charcoal">{level.name}</h3>
                <p className="text-xs text-limonar-mortar mb-3">desde {level.minPoints.toLocaleString("es-CO")} pts</p>
                <ul className="space-y-1 text-left">
                  {level.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-1.5 text-xs text-limonar-charcoalLight">
                      <CheckCircle2 className="h-3.5 w-3.5 text-limonar-lime flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-limonar-terracotta">
        <div className="container-limonar text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            El Maestro del Mes 🏆
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Cada mes premiamos al maestro con más ladrillos comprados con un kit de herramientas Limonar exclusivo.
          </p>
          <Button variant="dark" size="xl" asChild>
            <Link href="/contacto">Unirme al programa</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
