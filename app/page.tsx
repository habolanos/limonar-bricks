"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, MessageCircle, Shield, Leaf, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrickCalculator } from "@/components/calculadora/BrickCalculator";
import { manifesto, companyStats, storyChapters, companyInfo } from "@/lib/limonar-data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${(i * 47) % 100}%`,
            top: `${(i * 31) % 100}%`,
            backgroundColor: i % 2 === 0 ? "#00CC00" : "#8B4513",
            opacity: 0.15 + (i % 5) * 0.05,
          }}
          animate={{
            y: [0, -40 - (i % 30), 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <ParticleField />
      <motion.div style={{ y, opacity }} className="relative z-10 container-limonar text-center pt-20">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 bg-limonar-lime/10 border border-limonar-lime/40 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-limonar-lime animate-pulse-warm" />
          <span className="text-limonar-limeDark text-sm font-medium">{companyInfo.location.badge}</span>
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-limonar-charcoal leading-none mb-6 tracking-tight">
          Cada ladrillo tiene el{" "}
          <span className="relative">
            <span className="text-limonar-terracotta">nombre</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-limonar-gold"
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </span>{" "}
          de quien{" "}
          <span className="text-limonar-lime">lo soñó.</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible"
          className="text-limonar-charcoalLight text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Ladrillera Limonar — Fabricamos el material.<br />
          <strong className="text-limonar-charcoal">Tú construyes la historia.</strong>
        </motion.p>

        <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="xl" asChild>
            <Link href="/calculadora">
              Calcular mi obra
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link href="/nosotros">
              Ver nuestra historia
              <ChevronDown className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {companyStats.map((s) => (
            <div key={s.label} className="bg-limonar-sandLight border border-limonar-sandDark rounded-2xl p-4">
              <p className="text-2xl font-display font-bold text-limonar-lime">{s.value}</p>
              <p className="text-limonar-charcoalLight text-xs mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <span className="text-limonar-mortar text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 text-limonar-mortar" />
      </motion.div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-24 bg-limonar-sandLight relative overflow-hidden">
      <div className="container-limonar relative z-10">
        <div className="text-center mb-16">
          <span className="text-limonar-lime text-sm font-semibold uppercase tracking-widest">Nuestro Manifiesto</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-limonar-charcoal mt-3">
            Lo que nos mueve
          </h2>
          <p className="text-limonar-charcoalLight mt-4 max-w-xl mx-auto">
            Cinco principios que guían cada decisión, desde la mezcla de arcilla hasta la entrega en tu obra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {manifesto.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-white border border-limonar-sandDark rounded-2xl p-7 hover:border-limonar-lime/50 hover:shadow-warm transition-all duration-300 cursor-default"
            >
              <div className="absolute top-5 right-5 font-display font-bold text-6xl text-limonar-sandDark group-hover:text-limonar-lime/20 transition-colors">
                {card.number}
              </div>
              <div className="w-10 h-1 bg-limonar-lime rounded-full mb-5" />
              <h3 className="font-display font-bold text-lg text-limonar-charcoal mb-3 pr-8 leading-tight">
                {card.principle}
              </h3>
              <p className="text-limonar-charcoalLight text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
          {/* 6th card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-limonar-lime rounded-2xl p-7 flex flex-col justify-between"
          >
            <div>
              <p className="font-display font-bold text-2xl text-limonar-charcoal leading-tight mb-3">
                "El cliente es el centro del ladrillo."
              </p>
              <p className="text-limonar-charcoal/70 text-sm leading-relaxed">
                No somos una fábrica. Somos una familia que construye contigo.
              </p>
            </div>
            <Button variant="dark" size="md" asChild className="mt-6 self-start">
              <Link href="/nosotros">Conocer la historia <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section className="py-24 bg-limonar-sand/40" id="calculadora">
      <div className="container-limonar">
        <div className="text-center mb-12">
          <span className="text-limonar-terracotta text-sm font-semibold uppercase tracking-widest">Módulo 1</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-limonar-charcoal mt-3">
            ¿Cuántos ladrillos necesitas para tu sueño?
          </h2>
          <p className="text-limonar-charcoalLight mt-4 max-w-xl mx-auto">
            Calcula en segundos el material exacto para tu obra, con descuentos por volumen y cotización instantánea por WhatsApp.
          </p>
        </div>
        <BrickCalculator />
      </div>
    </section>
  );
}

function ScrollStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-limonar">
        <div className="text-center mb-16">
          <span className="text-limonar-lime text-sm font-semibold uppercase tracking-widest">Nuestra Historia</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-limonar-charcoal mt-3">
            Capítulo a capítulo
          </h2>
        </div>
        <div className="space-y-8">
          {storyChapters.map((chapter, i) => (
            <motion.div
              key={chapter.chapter}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <span className="text-limonar-terracotta text-sm font-semibold uppercase tracking-widest block mb-2">
                  Capítulo {i + 1} — {chapter.chapter}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-limonar-charcoal mb-3 leading-tight">
                  {chapter.headline}
                </h3>
                <p className="text-limonar-charcoalLight leading-relaxed">{chapter.subheadline}</p>
              </div>
              <div className="flex-1">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-limonar-terracotta/20 to-limonar-sand relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">{["🌿", "🤲", "🧱", "📐", "🏘️"][i]}</div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-limonar-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {chapter.chapter}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const trust = [
    { icon: Shield, title: "Garantía de calidad", desc: "Cada lote de producción es certificado antes de salir de la planta." },
    { icon: Leaf, title: "Compromiso ambiental", desc: "1 árbol plantado por cada palé vendido. Agua reciclada al 87%." },
    { icon: Star, title: "Maestros certificados", desc: "+380 maestros activos en el programa de fidelización Limonar." },
    { icon: Award, title: "Trazabilidad total", desc: "Cada ladrillo tiene número de lote y fecha de producción." },
  ];

  return (
    <section className="py-24 bg-warm-gradient">
      <div className="container-limonar">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-limonar-charcoal">
            Por qué Limonar
          </h2>
          <p className="text-limonar-charcoalLight mt-4 max-w-xl mx-auto">
            Producimos con la misma disciplina con la que tú construyes. Sin atajos. Sin excusas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-warm text-center hover:shadow-warm-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-limonar-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-limonar-terracotta" />
              </div>
              <h3 className="font-display font-bold text-lg text-limonar-charcoal mb-2">{item.title}</h3>
              <p className="text-limonar-charcoalLight text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-limonar relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-limonar-charcoal mb-6 leading-tight">
            Tú no compras ladrillos.<br />
            <span className="text-limonar-lime">Tú construyes legados.</span>
          </h2>
          <p className="text-limonar-charcoalLight text-xl mb-10 max-w-xl mx-auto">
            Únete a miles de maestros y familias colombianas que ya confían en Limonar para edificar su futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" asChild>
              <Link href="/calculadora">
                <ArrowRight className="h-5 w-5" />
                Calcular mi obra ahora
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Hablar con un asesor
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <CalculatorSection />
      <ScrollStorySection />
      <TrustSection />
      <CTASection />
    </>
  );
}
