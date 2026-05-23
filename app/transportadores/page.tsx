"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Star, Fuel, Wrench, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { transportadorLevels } from "@/lib/limonar-data";

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

export default function TransportadoresPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-limonar-lime/10 border border-limonar-lime/40 rounded-full px-5 py-2 mb-6">
            <Truck className="h-4 w-4 text-limonar-lime" />
            <span className="text-limonar-lime text-sm font-medium">Programa de fidelización logística</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-limonar-charcoal mb-4">
            Programa Transportadores<br />
            <span className="text-limonar-lime">Limonar</span>
          </h1>
          <p className="text-limonar-charcoalLight text-lg max-w-xl mx-auto mb-8">
            Quien mueve nuestros ladrillos mueve nuestro negocio. Acumula puntos por cada tonelada transportada y desbloquea beneficios exclusivos.
          </p>
          <Button variant="primary" size="xl" asChild>
            <Link href="/contacto">Registrarme como Transportador <ArrowRight className="h-5 w-5" /></Link>
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
              { step: "01", icon: Truck, title: "Regístrate", desc: "Crea tu perfil de Transportador Limonar con tu licencia de conducción y SOAT vigente. Verificamos en 24h." },
              { step: "02", icon: Star, title: "Acumula puntos", desc: "Gana 1 punto por cada tonelada transportada. Bonos por puntualidad y cero daños en mercancía." },
              { step: "03", icon: Fuel, title: "Desbloquea beneficios", desc: "Sube de nivel y accede a bonos de combustible, mantenimiento, seguros y contratos garantizados." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 shadow-warm text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-limonar-lime/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-limonar-lime" />
                </div>
                <span className="text-4xl font-display font-bold text-limonar-sand">{item.step}</span>
                <h3 className="font-display font-bold text-lg text-limonar-charcoal mt-2 mb-2">{item.title}</h3>
                <p className="text-limonar-charcoalLight text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20 bg-white">
        <div className="container-limonar">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-limonar-charcoal mb-3">
              Niveles de Transportador
            </h2>
            <p className="text-limonar-charcoalLight max-w-xl mx-auto">
              Cada tonelada cuenta. Cada viaje te acerca a mejores beneficios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {transportadorLevels.map((level, i) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-limonar-sandDark hover:border-limonar-lime rounded-3xl p-7 shadow-warm transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-5xl mb-2">{level.badge}</div>
                    <h3 className="font-display font-bold text-2xl text-limonar-charcoal">{level.name}</h3>
                    <p className="text-limonar-charcoalLight text-sm mt-1">
                      {level.minPoints.toLocaleString("es-CO")} - {level.maxPoints ? level.maxPoints.toLocaleString("es-CO") : "∞"} puntos
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-limonar-charcoalLight uppercase tracking-wider">Nivel {level.level}</span>
                  </div>
                </div>

                <ProgressBar
                  value={level.level === 4 ? 100 : (level.level / 4) * 100}
                  color={level.color}
                />

                <ul className="mt-6 space-y-2.5">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-limonar-charcoalLight">
                      <CheckCircle2 className="h-4 w-4 text-limonar-lime flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits highlight */}
      <section className="py-20 bg-limonar-sand/30">
        <div className="container-limonar">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Fuel, title: "Bonos de combustible", desc: "Hasta 8% de reembolso en combustible según tu nivel" },
                { icon: Wrench, title: "Mantenimiento aliado", desc: "Descuentos en talleres certificados y crédito para repuestos" },
                { icon: Shield, title: "Seguros incluidos", desc: "Protección para tu vehículo y carga desde nivel Fletero" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-warm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-limonar-lime/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-limonar-lime" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-limonar-charcoal mb-2">{item.title}</h3>
                  <p className="text-limonar-charcoalLight text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-limonar text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Truck className="h-16 w-16 text-limonar-lime mx-auto mb-6" />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-limonar-charcoal mb-4">
              ¿Listo para unirte?
            </h2>
            <p className="text-limonar-charcoalLight text-lg mb-8 max-w-xl mx-auto">
              Regístrate hoy y empieza a acumular puntos. Tu camión, tu esfuerzo, tus beneficios.
            </p>
            <Button variant="primary" size="xl" asChild>
              <Link href="/contacto">
                Registrarme ahora
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
