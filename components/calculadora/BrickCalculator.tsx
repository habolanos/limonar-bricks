"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package, Weight, Calculator, Share2,
  MessageCircle, ChevronDown, Layers, DoorOpen, AppWindow,
  TrendingDown, TrendingUp, AlertCircle, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { calculateBricks, formatCOP, formatNumber, buildWhatsAppMessage } from "@/lib/calculator";
import { brickProducts } from "@/lib/limonar-data";
import type { CalculatorInputs } from "@/lib/calculator";
import { cn } from "@/lib/utils";

const BRICK_WALL_COLS = 8;
const BRICK_WALL_ROWS = 6;

function BrickWallPreview({ bricks }: { bricks: number }) {
  const maxBricks = BRICK_WALL_COLS * BRICK_WALL_ROWS;
  const filled = Math.min(Math.round((bricks / 200) * maxBricks), maxBricks);
  const cells = Array.from({ length: maxBricks }, (_, i) => i < filled);

  return (
    <div className="bg-limonar-charcoal/5 rounded-xl p-4 border border-limonar-sandDark/30">
      <p className="text-xs text-limonar-mortar font-medium mb-3 uppercase tracking-wider">Vista previa del muro</p>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${BRICK_WALL_COLS}, 1fr)` }}>
        {cells.map((isFilled, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ opacity: isFilled ? 1 : 0.15, scale: isFilled ? 1 : 0.85 }}
            transition={{ duration: 0.2, delay: isFilled ? i * 0.01 : 0 }}
            className={cn(
              "h-5 rounded-sm",
              isFilled
                ? "bg-limonar-terracotta shadow-brick"
                : "bg-limonar-sand border border-limonar-sandDark/30"
            )}
            style={isFilled ? { backgroundImage: "linear-gradient(135deg, #C1440E 0%, #9B3509 100%)" } : undefined}
          />
        ))}
      </div>
      <p className="text-xs text-limonar-mortar mt-3 text-center">
        {bricks > 0 ? `${formatNumber(bricks)} ladrillos calculados` : "Ingresa las dimensiones del muro"}
      </p>
    </div>
  );
}

function ResultCard({ icon: Icon, label, value, sub, color = "terracotta" }: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  color?: "terracotta" | "lime" | "gold";
}) {
  const colors = {
    terracotta: "text-limonar-terracotta bg-limonar-terracotta/10",
    lime: "text-limonar-lime bg-limonar-lime/10",
    gold: "text-limonar-gold bg-limonar-gold/10",
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 border border-limonar-sand/60 shadow-sm"
    >
      <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center mb-3", colors[color])}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-xs text-limonar-mortar font-medium uppercase tracking-wider mb-1">{label}</p>
      <p className="text-2xl font-display font-bold text-limonar-charcoal">{value}</p>
      {sub && <p className="text-xs text-limonar-mortar mt-0.5">{sub}</p>}
    </motion.div>
  );
}

export function BrickCalculator() {
  const [productId, setProductId] = useState("farol");
  const [wallLength, setWallLength] = useState(5);
  const [wallHeight, setWallHeight] = useState(2.8);
  const [thickness, setThickness] = useState<"single" | "double">("single");
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(1);
  const [mortarJoint, setMortarJoint] = useState(1);
  const [wasteFactor, setWasteFactor] = useState(5);
  const [shared, setShared] = useState(false);

  const selectedProduct = brickProducts.find((p) => p.id === productId) ?? brickProducts[0];

  const inputs: CalculatorInputs = useMemo(() => ({
    wallLength, wallHeight, thickness, doors, windows,
    mortarJoint, wasteFactor, productId,
    pricePerUnit: selectedProduct.pricePerUnit.min,
  }), [wallLength, wallHeight, thickness, doors, windows, mortarJoint, wasteFactor, productId, selectedProduct]);

  const result = useMemo(() => calculateBricks(inputs), [inputs]);

  const handleWhatsApp = useCallback(() => {
    window.open(buildWhatsAppMessage(result, selectedProduct.name), "_blank");
  }, [result, selectedProduct.name]);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Mi cálculo Limonar",
        text: `Voy a necesitar ${formatNumber(result.bricksDouble)} ladrillos Limonar para mi obra 🧱`,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(
        `Calculé con Limonar: necesito ${formatNumber(result.bricksDouble)} ladrillos ${selectedProduct.name}. Ver en ${window.location.href}`
      );
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  }, [result, selectedProduct.name]);

  return (
    <div className="bg-white rounded-3xl shadow-warm-lg border border-limonar-sand/40 overflow-hidden">
      <div className="bg-limonar-terracotta px-6 py-5">
        <div className="flex items-center gap-3">
          <Calculator className="h-6 w-6 text-limonar-gold" />
          <div>
            <h2 className="font-display font-bold text-xl text-white">Calculadora Farol</h2>
            <p className="text-white/70 text-sm">Calcula en segundos. Construye para siempre.</p>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT — Inputs */}
        <div className="space-y-5">
          {/* Product selector */}
          <div>
            <label className="block text-sm font-semibold text-limonar-charcoal mb-2">Tipo de ladrillo</label>
            <div className="grid grid-cols-2 gap-2">
              {brickProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setProductId(p.id)}
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all text-sm font-medium",
                    productId === p.id
                      ? "border-limonar-terracotta bg-limonar-terracotta/5 text-limonar-terracotta"
                      : "border-limonar-sand text-limonar-charcoalLight hover:border-limonar-terracotta/40"
                  )}
                >
                  <div className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: p.color }} />
                  <span>{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-limonar-charcoal mb-1">
                Longitud del muro
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range" min={0.5} max={50} step={0.5} value={wallLength}
                  onChange={(e) => setWallLength(parseFloat(e.target.value))}
                  className="flex-1 accent-limonar-terracotta"
                />
                <span className="text-sm font-mono w-14 text-right text-limonar-terracotta font-bold">
                  {wallLength}m
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-limonar-charcoal mb-1">
                Altura del muro
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range" min={0.5} max={10} step={0.1} value={wallHeight}
                  onChange={(e) => setWallHeight(parseFloat(e.target.value))}
                  className="flex-1 accent-limonar-terracotta"
                />
                <span className="text-sm font-mono w-14 text-right text-limonar-terracotta font-bold">
                  {wallHeight}m
                </span>
              </div>
            </div>
          </div>

          {/* Thickness */}
          <div>
            <label className="block text-sm font-semibold text-limonar-charcoal mb-2">
              <Layers className="inline h-4 w-4 mr-1 text-limonar-mortar" />
              Tipo de muro
            </label>
            <div className="flex gap-3">
              {(["single", "double"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setThickness(t)}
                  className={cn(
                    "flex-1 py-2.5 px-4 rounded-lg border-2 text-sm font-semibold transition-all",
                    thickness === t
                      ? "border-limonar-terracotta bg-limonar-terracotta text-white"
                      : "border-limonar-sand text-limonar-charcoalLight hover:border-limonar-terracotta/40"
                  )}
                >
                  {t === "single" ? "Sencillo (10cm)" : "Doble (20cm)"}
                </button>
              ))}
            </div>
          </div>

          {/* Openings */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-limonar-charcoal mb-1">
                <DoorOpen className="inline h-4 w-4 mr-1 text-limonar-mortar" />
                Puertas
              </label>
              <div className="flex items-center gap-3">
                <button onClick={() => setDoors(Math.max(0, doors - 1))}
                  className="w-8 h-8 rounded-full bg-limonar-sand hover:bg-limonar-sandDark transition-colors font-bold text-limonar-charcoal">−</button>
                <span className="text-lg font-bold text-limonar-charcoal w-6 text-center">{doors}</span>
                <button onClick={() => setDoors(doors + 1)}
                  className="w-8 h-8 rounded-full bg-limonar-terracotta hover:bg-limonar-terracottaDark text-white transition-colors font-bold">+</button>
              </div>
              <p className="text-xs text-limonar-mortar mt-1">0.9m × 2.1m</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-limonar-charcoal mb-1">
                <AppWindow className="inline h-4 w-4 mr-1 text-limonar-mortar" />
                Ventanas
              </label>
              <div className="flex items-center gap-3">
                <button onClick={() => setWindows(Math.max(0, windows - 1))}
                  className="w-8 h-8 rounded-full bg-limonar-sand hover:bg-limonar-sandDark transition-colors font-bold text-limonar-charcoal">−</button>
                <span className="text-lg font-bold text-limonar-charcoal w-6 text-center">{windows}</span>
                <button onClick={() => setWindows(windows + 1)}
                  className="w-8 h-8 rounded-full bg-limonar-terracotta hover:bg-limonar-terracottaDark text-white transition-colors font-bold">+</button>
              </div>
              <p className="text-xs text-limonar-mortar mt-1">1.2m × 1.2m</p>
            </div>
          </div>

          {/* Advanced */}
          <details className="group">
            <summary className="flex items-center gap-2 text-sm font-medium text-limonar-mortar cursor-pointer hover:text-limonar-charcoal transition-colors list-none">
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              Opciones avanzadas
            </summary>
            <div className="mt-3 grid grid-cols-2 gap-4 pl-6">
              <div>
                <label className="block text-xs font-semibold text-limonar-charcoal mb-1">
                  Junta de mortero: <span className="text-limonar-terracotta">{mortarJoint}cm</span>
                </label>
                <input type="range" min={0.5} max={2} step={0.1} value={mortarJoint}
                  onChange={(e) => setMortarJoint(parseFloat(e.target.value))}
                  className="w-full accent-limonar-terracotta" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-limonar-charcoal mb-1">
                  Factor desperdicio: <span className="text-limonar-terracotta">{wasteFactor}%</span>
                </label>
                <input type="range" min={3} max={10} step={1} value={wasteFactor}
                  onChange={(e) => setWasteFactor(parseInt(e.target.value))}
                  className="w-full accent-limonar-terracotta" />
              </div>
            </div>
          </details>
        </div>

        {/* RIGHT — Results */}
        <div className="space-y-4">
          <BrickWallPreview bricks={result.bricksDouble} />

          <div className="grid grid-cols-2 gap-3">
            <ResultCard
              icon={Calculator}
              label="Ladrillos totales"
              value={formatNumber(result.bricksDouble)}
              sub={`${formatNumber(result.bricksPerM2)} und/m² · ${wasteFactor}% desperdicio`}
              color="terracotta"
            />
            <ResultCard
              icon={Package}
              label="Palés"
              value={String(result.pallets)}
              sub={`50 und/palé · ${selectedProduct.name}`}
              color="lime"
            />
            <ResultCard
              icon={Weight}
              label="Peso estimado"
              value={`${result.weightTon} ton`}
              sub={`${formatNumber(result.weightKg)} kg en total`}
              color="gold"
            />
            <div className="bg-limonar-terracotta/5 rounded-xl p-4 border-2 border-limonar-terracotta/20">
              <p className="text-xs text-limonar-mortar font-medium uppercase tracking-wider mb-1">Costo estimado</p>
              <p className="text-lg font-display font-bold text-limonar-terracotta">
                {formatCOP(result.priceRange.min)}
              </p>
              <p className="text-xs text-limonar-mortar">hasta {formatCOP(result.priceRange.max)}</p>
              {result.discount > 0 && (
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="h-3 w-3 text-limonar-lime" />
                  <span className="text-xs text-limonar-limeDark font-semibold">
                    Descuento {result.discount}% — Volumen {result.tierName}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Área breakdown */}
          <div className="bg-limonar-sand/40 rounded-xl p-4 border border-limonar-sandDark/20">
            <p className="text-xs font-semibold text-limonar-mortar uppercase tracking-wider mb-3">Desglose de área</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-limonar-charcoalLight">Área bruta</span>
                <span className="font-semibold text-limonar-charcoal">{result.grossArea} m²</span>
              </div>
              {result.openingsArea > 0 && (
                <div className="flex justify-between text-limonar-mortar">
                  <span>Vanos (puertas + ventanas)</span>
                  <span>− {result.openingsArea} m²</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-limonar-terracotta border-t border-limonar-sandDark/40 pt-1.5">
                <span>Área neta</span>
                <span>{result.netArea} m²</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2">
            <Button variant="whatsapp" size="md" onClick={handleWhatsApp} className="w-full">
              <MessageCircle className="h-4 w-4" />
              Pedir cotización por WhatsApp
            </Button>
            <Button variant="outline" size="md" onClick={handleShare} className="w-full">
              {shared ? (
                <><CheckCircle2 className="h-4 w-4 text-limonar-lime" /> ¡Copiado al portapapeles!</>
              ) : (
                <><Share2 className="h-4 w-4" /> Compartir mi cálculo</>
              )}
            </Button>
          </div>

          {result.bricksDouble >= 1000 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-limonar-lime/10 border border-limonar-lime/30 rounded-xl p-3"
            >
              <TrendingUp className="h-5 w-5 text-limonar-lime flex-shrink-0" />
              <p className="text-sm text-limonar-limeDark font-medium">
                ¡Una obra grande se viene! 🧱 Aplicas descuento especial por volumen.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
