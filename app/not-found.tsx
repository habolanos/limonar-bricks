import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <div className="font-display font-bold text-[12rem] leading-none text-limonar-lime/20 select-none">
          404
        </div>
        <div className="-mt-16 relative z-10">
          <h1 className="font-display font-bold text-4xl text-limonar-charcoal mb-3">
            Este ladrillo no existe
          </h1>
          <p className="text-limonar-charcoalLight text-lg max-w-md mx-auto mb-8">
            Parece que te perdiste en la obra. La página que buscas no fue encontrada o fue movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/"><Home className="h-5 w-5" />Volver al inicio</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/productos"><ArrowLeft className="h-5 w-5" />Ver productos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
