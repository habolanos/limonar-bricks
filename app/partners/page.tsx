"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, TruckIcon, Award, ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partnerTypes } from "@/lib/limonar-data";

const typeIcons = { ferreteria: Building2, distribuidor: TruckIcon, constructor: Award };

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10 text-center">
          <span className="text-limonar-lime text-sm font-semibold uppercase tracking-widest block mb-3">Portal B2B</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-limonar-charcoal mb-4">
            Partners <span className="text-limonar-lime">Limonar</span>
          </h1>
          <p className="text-limonar-charcoalLight text-lg max-w-xl mx-auto mb-8">
            Ferreterías, distribuidores y constructores: únete a nuestra red y accede a precios de mayoreo, material co-branded y soporte dedicado.
          </p>
          <Button variant="lime" size="xl" asChild>
            <Link href="#onboarding">Convertirme en Partner <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-20 bg-white">
        <div className="container-limonar">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-limonar-charcoal">
              Tipos de partner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, i) => {
              const Icon = typeIcons[partner.id as keyof typeof typeIcons] ?? Building2;
              return (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-limonar-cream rounded-2xl p-7 border border-limonar-sand/60"
                >
                  <div className="w-12 h-12 rounded-2xl bg-limonar-lime/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-limonar-lime" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-limonar-charcoal mb-2">{partner.name}</h3>
                  <p className="text-limonar-charcoalLight text-sm mb-5 leading-relaxed">{partner.description}</p>

                  {/* Volume tiers */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-limonar-mortar uppercase tracking-wider mb-3">Descuentos por volumen</p>
                    <div className="space-y-2">
                      {partner.volumeTiers.map((tier) => (
                        <div key={tier.min} className="flex justify-between items-center text-sm">
                          <span className="text-limonar-charcoalLight">+{tier.min.toLocaleString("es-CO")} und</span>
                          <span className="font-bold text-limonar-lime bg-limonar-lime/10 px-2 py-0.5 rounded-full text-xs">
                            -{tier.discount}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-1.5">
                    {partner.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-limonar-charcoalLight">
                        <CheckCircle2 className="h-4 w-4 text-limonar-lime flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline-lime" size="sm" className="w-full mt-6" asChild>
                    <Link href="#onboarding">Aplicar como {partner.name.split(" ")[0]}</Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section id="onboarding" className="py-20 bg-limonar-sand/40">
        <div className="container-limonar max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-limonar-charcoal">
              Proceso de vinculación
            </h2>
            <p className="text-limonar-charcoalLight mt-3">
              En menos de 72 horas te confirmaremos tu categoría de partner.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { step: "1", title: "Completa el formulario", desc: "Datos de la empresa, NIT, volumen estimado mensual y tipo de partner." },
              { step: "2", title: "Carga tus documentos", desc: "RUT, Cámara de Comercio (no mayor a 90 días) y referencia comercial." },
              { step: "3", title: "Revisión del equipo Limonar", desc: "Nuestro equipo comercial valida tu perfil y define las condiciones." },
              { step: "4", title: "Firma y activa", desc: "Firma el acuerdo de distribución y accede a tu panel de partner con precios exclusivos." },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-5 border border-limonar-sand/60 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-limonar-terracotta text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-limonar-charcoal">{step.title}</h3>
                  <p className="text-sm text-limonar-charcoalLight mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contacto">Iniciar proceso de vinculación <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-5 w-5" />
              Descargar brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
