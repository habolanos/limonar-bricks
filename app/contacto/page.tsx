"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", type: "maestro" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-limonar-charcoal relative overflow-hidden">
        <div className="absolute inset-0 brick-texture opacity-10" />
        <div className="container-limonar relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            Construyamos juntos
          </h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto">
            Estamos a un mensaje de distancia. Escríbenos y nuestro equipo comercial te contactará en menos de 2 horas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-limonar-cream">
        <div className="container-limonar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-warm border border-limonar-sand/60"
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-limonar-lime mb-4" />
                  <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-2">¡Mensaje recibido!</h2>
                  <p className="text-limonar-charcoalLight">
                    Nuestro equipo te contactará en las próximas 2 horas hábiles.
                  </p>
                  <Button variant="primary" size="md" className="mt-6" onClick={() => setSent(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-6">Escríbenos</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-limonar-charcoal mb-1">Nombre *</label>
                        <input
                          required type="text" placeholder="Tu nombre completo"
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-limonar-sand focus:border-limonar-terracotta focus:outline-none text-sm transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-limonar-charcoal mb-1">Teléfono *</label>
                        <input
                          required type="tel" placeholder="+57 300 000 0000"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-limonar-sand focus:border-limonar-terracotta focus:outline-none text-sm transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-limonar-charcoal mb-1">Correo electrónico</label>
                      <input
                        type="email" placeholder="tu@correo.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-limonar-sand focus:border-limonar-terracotta focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-limonar-charcoal mb-1">¿Cómo puedo ayudarte?</label>
                      <select
                        value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-limonar-sand focus:border-limonar-terracotta focus:outline-none text-sm transition-colors bg-white"
                      >
                        <option value="maestro">Registro Maestro Limonar</option>
                        <option value="cotizacion">Solicitud de cotización</option>
                        <option value="partner">Ser distribuidor/partner</option>
                        <option value="otro">Otra consulta</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-limonar-charcoal mb-1">Mensaje *</label>
                      <textarea
                        required rows={4} placeholder="Cuéntanos sobre tu proyecto..."
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-limonar-sand focus:border-limonar-terracotta focus:outline-none text-sm transition-colors resize-none"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      <Send className="h-5 w-5" />
                      Enviar mensaje
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* WhatsApp CTA */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-7">
                <MessageCircle className="h-8 w-8 text-[#25D366] mb-3" />
                <h3 className="font-display font-bold text-xl text-limonar-charcoal mb-2">
                  WhatsApp — Respuesta en minutos
                </h3>
                <p className="text-limonar-charcoalLight text-sm mb-4">
                  Para cotizaciones urgentes y pedidos inmediatos. Nuestro equipo está disponible de lunes a sábado de 7am a 6pm.
                </p>
                <Button variant="whatsapp" size="md" asChild>
                  <a href="https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20Limonar"
                    target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-6 border border-limonar-sand/60 shadow-sm space-y-4">
                {[
                  { icon: MapPin, label: "Ubicación", value: "Km 4 Vía Palmira–Cali, Valle del Cauca, Colombia" },
                  { icon: Phone, label: "Teléfono", value: "+57 300 123 4567" },
                  { icon: Mail, label: "Correo", value: "hola@limonar.co" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-limonar-terracotta/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-limonar-terracotta" />
                    </div>
                    <div>
                      <p className="text-xs text-limonar-mortar font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-limonar-charcoal mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-limonar-sand/40 rounded-2xl p-5 border border-limonar-sandDark/20">
                <h4 className="font-semibold text-limonar-charcoal text-sm mb-3">Horario de atención</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-limonar-charcoalLight">Lun–Vie</span><span className="font-medium text-limonar-charcoal">7:00am – 6:00pm</span></div>
                  <div className="flex justify-between"><span className="text-limonar-charcoalLight">Sábado</span><span className="font-medium text-limonar-charcoal">8:00am – 2:00pm</span></div>
                  <div className="flex justify-between"><span className="text-limonar-charcoalLight">Domingo</span><span className="font-medium text-limonar-mortar">Cerrado</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
