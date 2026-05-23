import { BrickCalculator } from "@/components/calculadora/BrickCalculator";
import { Badge } from "@/components/ui/badge";
import { Calculator, Info } from "lucide-react";

export const metadata = {
  title: "Calculadora de Ladrillos Farol | Limonar",
  description: "Calcula exactamente cuántos ladrillos necesitas para tu obra. Estimado de costo, palés y peso en tiempo real.",
};

export default function CalculadoraPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-limonar-charcoal relative overflow-hidden">
        <div className="absolute inset-0 brick-texture opacity-10" />
        <div className="container-limonar relative z-10 text-center">
          <Badge variant="terracotta" className="mb-4">Herramienta profesional</Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Calculadora Farol
          </h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto">
            Ingresa las dimensiones de tu muro y obtén el estimado exacto de material, costo y tiempo de entrega.
          </p>
        </div>
      </section>

      <section className="py-16 bg-limonar-sand/30">
        <div className="container-limonar max-w-5xl">
          <BrickCalculator />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Calculator, title: "Fórmula oficial", text: "Usamos la fórmula 1/((ancho+junta)×(alto+junta)) recomendada por el ICONTEC para el cálculo de ladrillos por m²." },
              { icon: Info, title: "Factor desperdicio", text: "El 5% estándar cubre roturas y cortes. Para obras con muchas esquinas o arcos, recomendamos usar 8-10%." },
              { icon: Info, title: "Precios referenciales", text: "Los precios mostrados son estimados. La cotización definitiva depende del volumen, ubicación y producto." },
            ].map((note) => (
              <div key={note.title} className="bg-white rounded-xl p-5 border border-limonar-sand/60 shadow-sm">
                <note.icon className="h-5 w-5 text-limonar-terracotta mb-3" />
                <h3 className="font-semibold text-limonar-charcoal text-sm mb-2">{note.title}</h3>
                <p className="text-xs text-limonar-charcoalLight leading-relaxed">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
