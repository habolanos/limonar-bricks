# Historial de Versiones - Limonar Bricks

## v0.1.0 - Release Inicial (25 de Mayo, 2026)

### 🎯 Funcionalidades Principales

#### Calculadora de Ladrillos
- **Modo Simple**: Cálculo para muros individuales
  - Dimensiones personalizables (largo, alto, espesor)
  - Configuración de puertas y ventanas
  - Ajuste de junta de mortero (0.5-2cm)
  - Factor de desperdicio configurable (5-15%)
  
- **Modo Proyecto Completo**: Cálculo para edificaciones completas
  - Perímetro del terreno
  - Altura de paredes
  - Número de habitaciones
  - Baños, cocina y sala
  - Cálculo automático de puertas y ventanas según espacios

#### Sistema de Empaque y Transporte
- **Estivas**: 50 ladrillos por estiva
- **Viajes**: Tamaños predefinidos (1000, 1500, 2000, 2500, 3000 ladrillos)
- Cálculo automático de cantidad de estivas y viajes necesarios

#### Productos
- **Ladrillo Farol Rayado** (30×20×10 cm, 3.2 kg) - ~15 ladrillos/m²
- **Ladrillo Tolete** (25×8×10 cm, 1.8 kg) - ~43 ladrillos/m²
- **Bloquelón Limonar** (80×8×30 cm, 7.5 kg) - ~14 ladrillos/m²
- **Ladrillo Farol Cara Lisa** (30×20×10 cm, 3.4 kg) - ~15 ladrillos/m²

#### Vista Previa del Muro
- Patrón intercalado realista (aparejo inglés)
- Colores dinámicos según producto seleccionado
- Texturas con gradientes y efectos 3D
- Proporciones ajustadas a dimensiones reales

#### Card de Dimensiones
- Muestra largo, alto y ancho de cada ladrillo
- Área visible calculada (largo × alto)
- Ladrillos aproximados por m²
- Transparencia total en los cálculos

### 🔧 Correcciones Técnicas

#### Dimensiones de Ladrillos
- **Corrección crítica**: Ahora usa largo (l) × alto (h) en lugar de ancho (w) × alto (h)
- Cálculo preciso de ladrillos por m²
- Bloquelón corregido: 80×8×30 cm (antes estaba invertido)

#### Interfaz de Usuario
- Navbar simplificado: "Calcular Pedido/Obra" (antes "Calculadora")
- Botón "Calcular obra" eliminado del navbar (redundante)
- Formulario de contacto desactivado hasta implementar backend

### 📋 Legal y Cumplimiento

#### Política de Tratamiento de Datos Personales
- **Cumplimiento Ley 1581/2012** (Colombia)
  - 8 principios rectores
  - Derechos ARCO completos
  - Procedimiento de 10 días hábiles
  - SIC como autoridad de control

- **Cumplimiento GDPR** (Unión Europea)
  - Derecho a la portabilidad
  - Derecho al olvido
  - Protección contra decisiones automatizadas
  - Transferencias internacionales seguras

- **15 secciones completas**:
  1. Introducción
  2. Definiciones
  3. Principios Rectores
  4. Datos Recolectados
  5. Finalidades del Tratamiento
  6. Derechos de los Titulares
  7. Procedimiento para Ejercer Derechos
  8. Medidas de Seguridad
  9. Transferencia y Transmisión
  10. Uso de Cookies
  11. Tiempo de Retención
  12. Tratamiento de Menores
  13. Modificaciones a la Política
  14. Autoridad de Control
  15. Aceptación

### 🏢 Información de la Empresa
- **Razón Social**: LADRILLERA LIMONAR S.A.S.
- **Ubicación**: Km 6 Vía Puerto Tejada-Villa Rica, Cauca, Colombia
- **Contacto**: protecciondatos@ladrilleralimonar.co

### 🛠️ Stack Tecnológico
- **Framework**: Next.js 14.2.3
- **React**: 18.3.1
- **TypeScript**: 5.4.5
- **Styling**: Tailwind CSS 3.4.3
- **Animations**: Framer Motion 11.2.6
- **Icons**: Lucide React 0.395.0
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod

### 📊 Funciones de Cálculo
```typescript
// Fórmula principal
bricksPerM2 = 1 / ((brickLength + mortarJoint) × (brickHeight + mortarJoint))

// Área neta
netArea = grossArea - (doors × doorArea) - (windows × windowArea)

// Ladrillos totales
totalBricks = netArea × bricksPerM2 × (1 + wasteFactor) × thicknessFactor
```

### 🎨 Diseño y UX
- Paleta de colores Limonar (terracota, lima, arena, carbón)
- Componentes reutilizables con variantes
- Animaciones suaves con Framer Motion
- Responsive design (mobile-first)
- Accesibilidad (ARIA labels, keyboard navigation)

### 📱 Páginas Implementadas
- `/` - Home
- `/productos` - Catálogo de productos
- `/calculadora` - Calculadora de ladrillos
- `/maestros` - Programa Maestros Limonar
- `/transportadores` - Red de transportadores
- `/partners` - Portal de partners
- `/nosotros` - Sobre la empresa
- `/sostenibilidad` - Compromiso ambiental
- `/mercados` - Expansión de mercados
- `/contacto` - Formulario de contacto
- `/politica-datos` - Política de privacidad

### 🔄 Próximas Funcionalidades (v0.2.0)
- [ ] Backend para formulario de contacto
- [ ] Base de datos de usuarios
- [ ] Sistema de autenticación
- [ ] Dashboard para maestros
- [ ] Portal de partners funcional
- [ ] Integración con WhatsApp Business API
- [ ] Sistema de cotizaciones online
- [ ] Tracking de pedidos
- [ ] Blog con CMS

---

**Fecha de Release**: 25 de Mayo, 2026  
**Desarrollado por**: Equipo Limonar  
**Licencia**: Propietario
