"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, TrendingUp, CheckCircle2, Lock } from "lucide-react";
import { marketPhases } from "@/lib/limonar-data";

const phaseColors: Record<string, string> = {
  active: "bg-limonar-lime/10 border-limonar-lime/30 text-limonar-limeDark",
  upcoming: "bg-limonar-gold/10 border-limonar-gold/30 text-limonar-gold",
  future: "bg-limonar-sand border-limonar-sandDark/30 text-limonar-mortar",
};

const phaseLabels: Record<string, string> = {
  active: "Activo",
  upcoming: "Próximo lanzamiento",
  future: "En planificación",
};

export default function MercadosPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10 text-center">
          <TrendingUp className="h-12 w-12 text-limonar-lime mx-auto mb-5" />
          <h1 className="font-display font-bold text-5xl md:text-6xl text-limonar-charcoal mb-4">
            Expansión de mercados
          </h1>
          <p className="text-limonar-charcoalLight text-lg max-w-xl mx-auto">
            Desde el Valle del Cauca al mundo. Nuestro plan de expansión geográfico, responsable y sostenible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-limonar-cream">
        <div className="container-limonar">
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {marketPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-limonar-sand/60 shadow-warm flex flex-col md:flex-row gap-6"
              >
                {/* Phase marker */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-limonar-terracotta/10 flex items-center justify-center">
                    {phase.status === "active" ? (
                      <CheckCircle2 className="h-7 w-7 text-limonar-lime" />
                    ) : phase.status === "upcoming" ? (
                      <Clock className="h-7 w-7 text-limonar-gold" />
                    ) : (
                      <Lock className="h-7 w-7 text-limonar-mortar" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="font-display font-bold text-xl text-limonar-charcoal">Fase {phase.phase} — {phase.country}</h2>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${phaseColors[phase.status]}`}>
                      {phaseLabels[phase.status]}
                    </span>
                    <span className="text-xs bg-limonar-terracotta/10 text-limonar-terracotta border border-limonar-terracotta/20 px-2.5 py-1 rounded-full font-medium">
                      Demanda: {phase.demand}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-limonar-mortar uppercase tracking-wider mb-2">
                      <MapPin className="inline h-3 w-3 mr-1" />Ciudades objetivo
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.cities.map((city) => (
                        <span key={city} className="text-xs bg-limonar-sand text-limonar-charcoal px-2 py-0.5 rounded-full">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Year */}
                <div className="flex-shrink-0 text-right">
                  <p className="text-xs text-limonar-mortar font-medium uppercase tracking-wider">Año meta</p>
                  <p className="font-display font-bold text-2xl text-limonar-terracotta mt-1">{phase.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
