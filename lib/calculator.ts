import { pricingTiers } from "./limonar-data";

export interface CalculatorInputs {
  wallLength: number;
  wallHeight: number;
  thickness: "single" | "double";
  doors: number;
  windows: number;
  mortarJoint: number;
  wasteFactor: number;
  productId: string;
  pricePerUnit: number;
}

export interface ProjectInputs {
  perimeter: number;
  wallHeight: number;
  rooms: number;
  bathrooms: number;
  kitchen: boolean;
  livingRoom: boolean;
  thickness: "single" | "double";
  mortarJoint: number;
  wasteFactor: number;
  productId: string;
  pricePerUnit: number;
}

export interface CalculatorResult {
  grossArea: number;
  openingsArea: number;
  netArea: number;
  bricksPerM2: number;
  bricksNet: number;
  bricksWithWaste: number;
  bricksDouble: number;
  weightKg: number;
  weightTon: number;
  estivas: number;
  viajes: { count: number; size: number };
  priceRange: { min: number; max: number };
  tierName: string;
  discount: number;
}

const BRICK_W = 0.10;
const BRICK_H = 0.20;
const BRICK_WEIGHT_KG = 3.2;
const BRICKS_PER_ESTIVA = 50;
const TRIP_SIZES = [3000, 2500, 2000, 1500, 1000];
const DOOR_W = 0.9;
const DOOR_H = 2.1;
const WINDOW_W = 1.2;
const WINDOW_H = 1.2;

export function calcBricksPerM2(mortarJointM: number): number {
  return 1 / ((BRICK_W + mortarJointM) * (BRICK_H + mortarJointM));
}

export function calculateProject(inputs: ProjectInputs): CalculatorResult {
  const {
    perimeter,
    wallHeight,
    rooms,
    bathrooms,
    kitchen,
    livingRoom,
    thickness,
    mortarJoint,
    wasteFactor,
    pricePerUnit,
  } = inputs;

  // Calculate total wall length based on project components
  // Perimeter walls
  const perimeterWallLength = perimeter;
  
  // Internal divisions (estimate based on rooms and spaces)
  const internalWallsPerRoom = 3; // Average walls per room
  const internalWallLengthPerRoom = 3.5; // Average length per internal wall
  const roomWalls = rooms * internalWallsPerRoom * internalWallLengthPerRoom;
  
  const bathroomWalls = bathrooms * 3 * 2.5; // Bathrooms have smaller walls
  const kitchenWalls = kitchen ? 3 * 3 : 0; // Kitchen walls
  const livingRoomWalls = livingRoom ? 2 * 4 : 0; // Living room partial walls
  
  const totalWallLength = perimeterWallLength + roomWalls + bathroomWalls + kitchenWalls + livingRoomWalls;
  
  // Calculate openings (doors and windows based on spaces)
  const totalDoors = 1 + rooms + bathrooms + (kitchen ? 1 : 0); // Entrance + room doors
  const totalWindows = rooms + (livingRoom ? 2 : 0) + (kitchen ? 1 : 0); // Windows per space
  
  // Use the existing calculateBricks function with calculated values
  return calculateBricks({
    wallLength: totalWallLength,
    wallHeight,
    thickness,
    doors: totalDoors,
    windows: totalWindows,
    mortarJoint,
    wasteFactor,
    productId: inputs.productId,
    pricePerUnit,
  });
}

export function calculateBricks(inputs: CalculatorInputs): CalculatorResult {
  const {
    wallLength,
    wallHeight,
    thickness,
    doors,
    windows,
    mortarJoint,
    wasteFactor,
    pricePerUnit,
  } = inputs;

  const mortarJointM = mortarJoint / 100;
  const grossArea = wallLength * wallHeight;
  const doorsArea = doors * (DOOR_W * DOOR_H);
  const windowsArea = windows * (WINDOW_W * WINDOW_H);
  const openingsArea = doorsArea + windowsArea;
  const netArea = Math.max(0, grossArea - openingsArea);

  const bricksPerM2 = calcBricksPerM2(mortarJointM);
  const bricksNet = Math.ceil(netArea * bricksPerM2);
  const wasteMultiplier = 1 + wasteFactor / 100;
  const bricksWithWaste = Math.ceil(bricksNet * wasteMultiplier);
  const bricksDouble = thickness === "double" ? bricksWithWaste * 2 : bricksWithWaste;

  const weightKg = bricksDouble * BRICK_WEIGHT_KG;
  const weightTon = weightKg / 1000;
  const estivas = Math.ceil(bricksDouble / BRICKS_PER_ESTIVA);
  
  // Calculate trips (viajes)
  const tripSize = TRIP_SIZES.find(size => bricksDouble >= size) || TRIP_SIZES[TRIP_SIZES.length - 1];
  const tripCount = Math.ceil(bricksDouble / tripSize);

  const tier = pricingTiers.find(
    (t) => bricksDouble >= t.min && bricksDouble <= t.max
  ) ?? pricingTiers[0];

  const discount = 1 - tier.multiplier;
  const basePrice = pricePerUnit * bricksDouble;
  const discountedPrice = basePrice * tier.multiplier;

  return {
    grossArea: Math.round(grossArea * 100) / 100,
    openingsArea: Math.round(openingsArea * 100) / 100,
    netArea: Math.round(netArea * 100) / 100,
    bricksPerM2: Math.round(bricksPerM2),
    bricksNet,
    bricksWithWaste,
    bricksDouble,
    weightKg: Math.round(weightKg),
    weightTon: Math.round(weightTon * 100) / 100,
    estivas,
    viajes: { count: tripCount, size: tripSize },
    priceRange: {
      min: Math.round(discountedPrice * 0.9),
      max: Math.round(discountedPrice * 1.1),
    },
    tierName: tier.label,
    discount: Math.round(discount * 100),
  };
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("es-CO").format(n);
}

export function buildWhatsAppMessage(result: CalculatorResult, productName: string): string {
  const text = encodeURIComponent(
    `¡Hola! Calculé mi obra con la Calculadora Limonar:\n\n` +
    `🧱 Producto: ${productName}\n` +
    `📐 Área neta: ${result.netArea} m²\n` +
    `🔢 Ladrillos necesarios: ${formatNumber(result.bricksDouble)}\n` +
    `📦 Estivas: ${result.estivas}\n` +
    `🚚 Viajes: ${result.viajes.count} (${formatNumber(result.viajes.size)} und/viaje)\n` +
    `⚖️ Peso: ${result.weightTon} ton\n` +
    `💰 Estimado: ${formatCOP(result.priceRange.min)} – ${formatCOP(result.priceRange.max)}\n\n` +
    `¿Me pueden dar una cotización formal? Gracias.`
  );
  return `https://wa.me/573001234567?text=${text}`;
}

export function generateShareCard(result: CalculatorResult): Record<string, string> {
  return {
    headline: `Voy a necesitar ${formatNumber(result.bricksDouble)} ladrillos Limonar para mi obra 🧱`,
    detail: `${result.netArea} m² · ${result.estivas} estivas · ${result.viajes.count} viajes`,
    cta: "Calcula la tuya en limonar.co",
  };
}
