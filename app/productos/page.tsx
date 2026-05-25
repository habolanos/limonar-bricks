"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Weight, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { brickProducts } from "@/lib/limonar-data";
import { formatCOP } from "@/lib/calculator";

export default function ProductosPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10 text-center">
          <Badge variant="lime" className="mb-4">Catálogo de productos</Badge>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-limonar-charcoal mb-4">
            Fabricados con criterio,<br />
            <span className="text-limonar-lime">no en serie.</span>
          </h1>
          <p className="text-limonar-charcoalLight text-lg max-w-xl mx-auto">
            Cada referencia en nuestro catálogo es el resultado de décadas de perfeccionamiento artesanal e innovación constante.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-limonar-cream">
        <div className="container-limonar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brickProducts.map((product, i) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-warm border border-limonar-sand/60 group hover:shadow-warm-lg transition-shadow"
              >
                {/* Product hero */}
                <div className="h-48 relative flex items-center justify-center"
                  style={{ backgroundColor: product.color + "22" }}>
                  <div className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 19px,${product.color}22 19px,${product.color}22 20px),repeating-linear-gradient(90deg,transparent,transparent 39px,${product.color}22 39px,${product.color}22 40px)` }} />
                  <div className="relative">
                    <div className="w-32 h-16 rounded-lg shadow-brick flex items-center justify-center"
                      style={{ backgroundColor: product.color }}>
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        {product.dimensions.w}×{product.dimensions.h}×{product.dimensions.l}cm
                      </span>
                    </div>
                  </div>
                  {product.tag && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="terracotta">{product.tag}</Badge>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="mb-4">
                    <p className="text-xs text-limonar-mortar font-medium uppercase tracking-wider mb-1">{product.nickname}</p>
                    <h2 className="font-display font-bold text-2xl text-limonar-charcoal">{product.name}</h2>
                    <p className="text-limonar-charcoalLight text-sm mt-2 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-limonar-sand/40 rounded-xl p-3 text-center">
                      <Ruler className="h-4 w-4 text-limonar-terracotta mx-auto mb-1" />
                      <p className="text-xs text-limonar-mortar">Dimensiones</p>
                      <p className="text-xs font-bold text-limonar-charcoal mt-0.5">
                        {product.dimensions.w}×{product.dimensions.h}×{product.dimensions.l}
                      </p>
                    </div>
                    <div className="bg-limonar-sand/40 rounded-xl p-3 text-center">
                      <Weight className="h-4 w-4 text-limonar-terracotta mx-auto mb-1" />
                      <p className="text-xs text-limonar-mortar">Peso und.</p>
                      <p className="text-xs font-bold text-limonar-charcoal mt-0.5">{product.weightKg} kg</p>
                    </div>
                    <div className="bg-limonar-sand/40 rounded-xl p-3 text-center">
                      <Package className="h-4 w-4 text-limonar-terracotta mx-auto mb-1" />
                      <p className="text-xs text-limonar-mortar">x Estiva</p>
                      <p className="text-xs font-bold text-limonar-charcoal mt-0.5">{product.bricksPerPallet} und</p>
                    </div>
                  </div>

                  {/* Uses */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-limonar-mortar uppercase tracking-wider mb-2">Usos principales</p>
                    <div className="flex flex-wrap gap-2">
                      {product.uses.map((use) => (
                        <span key={use} className="text-xs bg-limonar-lime/10 text-limonar-limeDark border border-limonar-lime/20 px-2.5 py-1 rounded-full font-medium">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-limonar-sand/60">
                    <div>
                      <p className="text-xs text-limonar-mortar">Precio desde</p>
                      <p className="font-display font-bold text-xl text-limonar-terracotta">
                        {formatCOP(product.pricePerUnit.min)} <span className="text-sm font-sans font-normal text-limonar-mortar">/ und</span>
                      </p>
                    </div>
                    <Button variant="primary" size="sm" asChild>
                      <Link href={`/calculadora?producto=${product.id}`}>
                        Calcular <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-limonar-sand/50">
        <div className="container-limonar text-center">
          <Star className="h-10 w-10 text-limonar-gold mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl text-limonar-charcoal mb-3">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-limonar-charcoalLight mb-6 max-w-md mx-auto">
            Fabricamos referencias especiales bajo pedido. Cuéntanos tu proyecto y lo hacemos realidad.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contacto">Solicitar referencia especial <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
