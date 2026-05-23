// ========================================
// COMPANY CONTACT INFORMATION
// ========================================
export const companyInfo = {
  name: "Ladrillera Limonar",
  tagline: "Fabricamos el material. Tú construyes la historia.",
  location: {
    city: "Villa Rica",
    region: "Cauca",
    country: "Colombia",
    fullAddress: "Km 6 Vía Puerto Tejada-Villa Rica, Cauca",
    badge: "Villa Rica, Cauca · Colombia · Desde la tierra",
  },
  contact: {
    phone: "+57 315 170 0698",
    email: "hola@limonar.co",
    whatsapp: "573151700698",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

// ========================================
// PRODUCT INTERFACES & DATA
// ========================================
export interface BrickProduct {
  id: string;
  name: string;
  nickname: string;
  dimensions: { w: number; h: number; l: number };
  weightKg: number;
  bricksPerPallet: number;
  pricePerUnit: { min: number; max: number };
  description: string;
  uses: string[];
  color: string;
  tag?: string;
}

export interface MaestroLevel {
  level: number;
  name: string;
  minPoints: number;
  maxPoints: number | null;
  benefits: string[];
  badge: string;
  color: string;
}

export interface EmbajadorLevel {
  level: number;
  name: string;
  minPoints: number;
  maxPoints: number | null;
  benefits: string[];
  badge: string;
  color: string;
}

export interface PartnerType {
  id: string;
  name: string;
  description: string;
  volumeTiers: { min: number; discount: number }[];
  benefits: string[];
}

export interface MarketPhase {
  phase: number;
  year: string;
  cities: string[];
  country: string;
  status: "active" | "upcoming" | "future";
  demand: "Alta" | "Media" | "Emergente";
}

export interface ManifestoCard {
  number: string;
  principle: string;
  description: string;
}

// ── Products ──────────────────────────────────────────────────────────────────

export const brickProducts: BrickProduct[] = [
  {
    id: "farol",
    name: "Ladrillo Farol",
    nickname: "El Insignia",
    dimensions: { w: 10, h: 20, l: 30 },
    weightKg: 3.2,
    bricksPerPallet: 50,
    pricePerUnit: { min: 850, max: 1100 },
    description:
      "Nuestro ladrillo estrella. Fabricado con arcilla seleccionada del Valle del Cauca, cocido a 1,050°C durante 48 horas. Cada Farol lleva décadas de saber artesanal y cero concesiones en calidad.",
    uses: [
      "Muros estructurales",
      "Fachadas de vivienda",
      "Edificaciones comerciales",
      "Muros de contención",
    ],
    color: "#C1440E",
    tag: "Más vendido",
  },
  {
    id: "tolete",
    name: "Ladrillo Tolete",
    nickname: "El Versátil",
    dimensions: { w: 6.5, h: 12, l: 25 },
    weightKg: 1.8,
    bricksPerPallet: 80,
    pricePerUnit: { min: 420, max: 580 },
    description:
      "Compacto y resistente. El favorito de los maestros para divisiones internas y acabados. Su peso ligero facilita el trabajo sin sacrificar resistencia.",
    uses: [
      "Divisiones internas",
      "Escaleras",
      "Jardineras",
      "Pequeñas construcciones",
    ],
    color: "#B5651D",
    tag: undefined,
  },
  {
    id: "bloque",
    name: "Bloque Limonar",
    nickname: "El Estructural",
    dimensions: { w: 12, h: 20, l: 40 },
    weightKg: 7.5,
    bricksPerPallet: 30,
    pricePerUnit: { min: 1800, max: 2400 },
    description:
      "Para proyectos que exigen máxima resistencia. Con celdas internas que optimizan el uso de concreto en columnas integradas. El aliado de constructores exigentes.",
    uses: [
      "Construcción masiva",
      "Bodegas industriales",
      "Muros de carga pesada",
      "Proyectos de VIS",
    ],
    color: "#8B7355",
    tag: "Proyectos grandes",
  },
  {
    id: "especial",
    name: "Ladrillo Especial Limonar",
    nickname: "El Exclusivo",
    dimensions: { w: 10, h: 20, l: 30 },
    weightKg: 3.4,
    bricksPerPallet: 50,
    pricePerUnit: { min: 2200, max: 3500 },
    description:
      "Acabado artesanal premium con textura vintage. Disponible en tonos: Terracota Clásico, Arcilla Natural y Óxido Andino. Para fachadas que enamoran a primera vista.",
    uses: [
      "Fachadas premium",
      "Muros decorativos",
      "Chimeneas",
      "Proyectos de lujo",
    ],
    color: "#A0522D",
    tag: "Premium",
  },
];

// ── Pricing tiers ─────────────────────────────────────────────────────────────

export const pricingTiers = [
  { min: 0, max: 499, label: "Detalle", multiplier: 1.0 },
  { min: 500, max: 999, label: "Pequeño", multiplier: 0.93 },
  { min: 1000, max: 4999, label: "Mediano", multiplier: 0.87 },
  { min: 5000, max: 9999, label: "Grande", multiplier: 0.80 },
  { min: 10000, max: Infinity, label: "Industrial", multiplier: 0.72 },
];

// ── Maestro Levels ────────────────────────────────────────────────────────────

export const maestroLevels: MaestroLevel[] = [
  {
    level: 1,
    name: "Aprendiz",
    minPoints: 0,
    maxPoints: 4999,
    badge: "🧱",
    color: "#8B7355",
    benefits: [
      "Acceso a precios de lista",
      "Asesoría técnica básica",
      "Acceso a calculadora profesional",
    ],
  },
  {
    level: 2,
    name: "Oficial",
    minPoints: 5000,
    maxPoints: 19999,
    badge: "⚒️",
    color: "#B5651D",
    benefits: [
      "5% descuento en pedidos > 500 unidades",
      "Línea directa de atención",
      "Certificado digital Oficial Limonar",
    ],
  },
  {
    level: 3,
    name: "Maestro",
    minPoints: 20000,
    maxPoints: 49999,
    badge: "🏆",
    color: "#C1440E",
    benefits: [
      "10% descuento permanente",
      "Entrega prioritaria (24h)",
      "Perfil destacado en la app",
      "Kit de herramientas Limonar",
    ],
  },
  {
    level: 4,
    name: "Gran Maestro",
    minPoints: 50000,
    maxPoints: 99999,
    badge: "👑",
    color: "#D4A017",
    benefits: [
      "15% descuento permanente",
      "Crédito 30 días sin interés",
      "Co-branding en obras destacadas",
      "Invitación a tour de producción",
    ],
  },
  {
    level: 5,
    name: "Arquitecto Limonar",
    minPoints: 100000,
    maxPoints: null,
    badge: "🌟",
    color: "#7CB518",
    benefits: [
      "20% descuento VIP",
      "Gestor de cuenta dedicado",
      "Precios de producción directa",
      "Mentoría Limonar a tu equipo",
      "Nombre en el Muro de Honor",
    ],
  },
];

// ── Embajador Levels ──────────────────────────────────────────────────────────

export const embajadorLevels: EmbajadorLevel[] = [
  { level: 1, name: "Semilla", minPoints: 0, maxPoints: 999, badge: "🌱", color: "#8B7355", benefits: ["Puntos por compra", "Descuento 3% cumpleaños"] },
  { level: 2, name: "Brote", minPoints: 1000, maxPoints: 4999, badge: "🌿", color: "#7CB518", benefits: ["7% descuento recurrente", "Envío gratis > $500k COP"] },
  { level: 3, name: "Árbol", minPoints: 5000, maxPoints: 14999, badge: "🌳", color: "#5E8A12", benefits: ["12% descuento", "Acceso a ediciones especiales", "Invitación a eventos"] },
  { level: 4, name: "Limonar Pleno", minPoints: 15000, maxPoints: null, badge: "🍋", color: "#D4A017", benefits: ["18% descuento VIP", "Atención prioritaria 24/7", "Regalo anual Limonar", "Certificado Embajador"] },
];

// ── Partner Types ─────────────────────────────────────────────────────────────

export const partnerTypes: PartnerType[] = [
  {
    id: "ferreteria",
    name: "Ferretería Aliada",
    description: "Puntos de venta minoristas que ofrecen el Ladrillo Farol a sus clientes.",
    volumeTiers: [{ min: 500, discount: 8 }, { min: 1000, discount: 12 }, { min: 5000, discount: 18 }],
    benefits: ["Material POP gratis", "Exhibidor Limonar", "Capacitación de producto", "Soporte de ventas"],
  },
  {
    id: "distribuidor",
    name: "Distribuidor Regional",
    description: "Operadores logísticos con cobertura regional y flota propia.",
    volumeTiers: [{ min: 1000, discount: 15 }, { min: 5000, discount: 20 }, { min: 10000, discount: 25 }],
    benefits: ["Precios de mayoreo", "Crédito 60 días", "Territorio exclusivo", "Co-inversión en marketing"],
  },
  {
    id: "constructor",
    name: "Constructor Certificado",
    description: "Empresas constructoras con proyectos recurrentes de alta demanda.",
    volumeTiers: [{ min: 500, discount: 10 }, { min: 2000, discount: 16 }, { min: 5000, discount: 22 }],
    benefits: ["Precios de proyecto", "Entrega en obra", "Asesoría técnica especializada", "Garantía extendida"],
  },
];

// ── Manifesto ─────────────────────────────────────────────────────────────────

export const manifesto: ManifestoCard[] = [
  {
    number: "01",
    principle: "El cliente es el centro del ladrillo",
    description: "Cada decisión de producto comienza con la necesidad del maestro, no con la conveniencia de la fábrica.",
  },
  {
    number: "02",
    principle: "Inventar y simplificar",
    description: "Cotizar, pedir y recibir debe ser tan simple que un maestro pueda hacerlo en 3 clics, desde la obra.",
  },
  {
    number: "03",
    principle: "Pensar a largo plazo",
    description: "Los ladrillos Limonar están hechos para sobrevivir generaciones. Nuestro modelo de negocio refleja esa durabilidad.",
  },
  {
    number: "04",
    principle: "Alta exigencia, alta responsabilidad",
    description: "Cultura de cero defectos. Lotes de producción trazables. Responsabilidad ambiental medible y pública.",
  },
  {
    number: "05",
    principle: "Obsesión por la calidad, no por la competencia",
    description: "No miramos a los rivales. Miramos nuestros propios estándares y los superamos cada trimestre.",
  },
];

// ── Market Expansion ──────────────────────────────────────────────────────────

export const marketPhases: MarketPhase[] = [
  { phase: 1, year: "2025", cities: ["Cali", "Buenaventura", "Palmira", "Yumbo"], country: "Colombia", status: "active", demand: "Alta" },
  { phase: 2, year: "2026", cities: ["Bogotá", "Medellín", "Barranquilla", "Pereira"], country: "Colombia", status: "upcoming", demand: "Alta" },
  { phase: 3, year: "2027", cities: ["Quito", "Lima", "Ciudad de Panamá"], country: "Ecuador · Perú · Panamá", status: "future", demand: "Media" },
  { phase: 4, year: "2028+", cities: ["Miami", "Madrid", "Guadalajara"], country: "USA · España · México", status: "future", demand: "Emergente" },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

export const companyStats = [
  { value: "1.2M+", label: "Ladrillos producidos/año" },
  { value: "380+", label: "Maestros certificados" },
  { value: "12", label: "Municipios activos" },
  { value: "98.3%", label: "Satisfacción de clientes" },
];

// ── Sustainability ────────────────────────────────────────────────────────────

export const sustainabilityData = {
  treesPlanted: 4720,
  waterRecycled: 87,
  carbonReduced: 23,
  solarPercent: 62,
  fairLaborCertified: true,
};

// ── Scroll Story Chapters ─────────────────────────────────────────────────────

export const storyChapters = [
  {
    chapter: "El Sueño",
    headline: "No somos una fábrica.",
    subheadline: "Somos una familia que aprendió que la tierra bien trabajada sostiene sueños.",
    visual: "dream",
  },
  {
    chapter: "Las Manos",
    headline: "Detrás de cada ladrillo hay una persona que se enorgullece de su oficio.",
    subheadline: "Más de 80 artesanos dan forma al Farol cada día.",
    visual: "hands",
  },
  {
    chapter: "El Material",
    headline: "Un ladrillo Limonar no se fabrica en serie. Se fabrica con criterio.",
    subheadline: "Arcilla del Valle, cocción a 1,050°C, 48 horas de rigor.",
    visual: "brick",
  },
  {
    chapter: "Tu Obra",
    headline: "¿Cuántos ladrillos necesitas para tu sueño?",
    subheadline: "Calcula en segundos. Compra en minutos. Construye para siempre.",
    visual: "calculator",
  },
  {
    chapter: "La Comunidad",
    headline: "Miles de maestros y familias ya construyeron con Limonar.",
    subheadline: "Únete al Muro de los Sueños.",
    visual: "community",
  },
];
