export default function Loading() {
  return (
    <div className="min-h-screen bg-limonar-cream flex items-center justify-center">
      <div className="text-center">
        <div className="relative mx-auto w-16 h-16 mb-6">
          <div className="w-16 h-8 bg-limonar-terracotta rounded-sm animate-pulse" />
          <div className="w-16 h-8 bg-limonar-terracottaDark rounded-sm mt-1 animate-pulse delay-75" />
        </div>
        <p className="font-display font-semibold text-limonar-charcoal text-lg animate-pulse">
          Cargando…
        </p>
      </div>
    </div>
  );
}
