# 🧱 Limonar Bricks

> **Fabricamos el material. Tú construyes la historia.**

Sitio web oficial de **Ladrillera Limonar S.A.S.**, fabricante de ladrillos artesanales de máxima calidad en Villa Rica, Cauca, Colombia.

[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](https://github.com/limonar/limonar-bricks)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Historial de Versiones](#-historial-de-versiones)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)

---

## ✨ Características

### 🧮 Calculadora de Ladrillos
- **Modo Simple**: Cálculo para muros individuales con configuración detallada
- **Modo Proyecto**: Cálculo completo para edificaciones (perímetro, habitaciones, baños)
- Vista previa del muro con patrón intercalado y texturas realistas
- Cálculo de estivas (50 ladrillos) y viajes (1000-3000 ladrillos)
- Exportación de resultados vía WhatsApp

### 🏗️ Catálogo de Productos
- Ladrillo Farol Rayado (30×20×10 cm)
- Ladrillo Tolete (25×8×10 cm)
- Bloquelón Limonar (80×8×30 cm)
- Ladrillo Farol Cara Lisa (30×20×10 cm)

### 👷 Programas Especiales
- **Maestros Limonar**: Programa de beneficios para constructores
- **Red de Transportadores**: Logística y entregas
- **Portal de Partners**: Alianzas comerciales

### 📱 Páginas Implementadas
- Home con hero y secciones destacadas
- Catálogo de productos con especificaciones
- Calculadora interactiva de ladrillos
- Información corporativa (Nosotros, Sostenibilidad, Mercados)
- Formulario de contacto
- Política de tratamiento de datos (Ley 1581/2012 + GDPR)

---

## 🛠️ Stack Tecnológico

### Core
- **Framework**: [Next.js 14.2.3](https://nextjs.org/) (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.4.5
- **Node.js**: 20.x

### Styling & UI
- **Tailwind CSS**: 3.4.3
- **Framer Motion**: 11.2.6 (animaciones)
- **Lucide React**: 0.395.0 (iconos)
- **Radix UI**: Componentes accesibles

### Forms & Validation
- **React Hook Form**: 7.52.0
- **Zod**: 3.23.8

### State Management
- **Zustand**: 4.5.2

### Utilities
- **clsx** + **tailwind-merge**: Gestión de clases
- **class-variance-authority**: Variantes de componentes

---

## 📦 Instalación

### Requisitos Previos
- Node.js 20.x o superior
- npm 10.x o superior

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/limonar/limonar-bricks.git
cd limonar-bricks

# Instalar dependencias
npm install

# Copiar variables de entorno (si aplica)
cp .env.example .env.local

# Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## 🚀 Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

### Estructura de Comandos Git

```bash
# Ver versiones
git tag -l

# Ver detalles de una versión
git show v0.1.0

# Crear nueva versión
git tag -a v0.x.x -m "Descripción"
```

---

## 📁 Estructura del Proyecto

```
limonar-bricks/
├── app/                          # App Router de Next.js
│   ├── (pages)/                  # Páginas del sitio
│   │   ├── productos/
│   │   ├── calculadora/
│   │   ├── maestros/
│   │   ├── transportadores/
│   │   ├── partners/
│   │   ├── nosotros/
│   │   ├── sostenibilidad/
│   │   ├── mercados/
│   │   ├── contacto/
│   │   └── politica-datos/
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Home
│   └── globals.css               # Estilos globales
├── components/                   # Componentes reutilizables
│   ├── layout/                   # Navbar, Footer
│   ├── calculadora/              # Calculadora de ladrillos
│   └── ui/                       # Componentes UI base
├── lib/                          # Utilidades y lógica
│   ├── calculator.ts             # Lógica de cálculos
│   ├── limonar-data.ts          # Datos de productos
│   └── utils.ts                  # Utilidades generales
├── public/                       # Archivos estáticos
│   ├── limonar_logo.svg
│   └── images/
├── README.md                     # Este archivo
├── README-history.md            # Historial de versiones
├── package.json
└── tsconfig.json
```

---

## 📚 Historial de Versiones

Para ver el historial completo de cambios, características y correcciones de cada versión, consulta:

**[📖 README-history.md](./README-history.md)**

### Versiones Disponibles

- **[v0.1.0](./README-history.md#v010---release-inicial-25-de-mayo-2026)** - Release Inicial (25 Mayo 2026)
  - Calculadora de ladrillos (modo simple y proyecto)
  - Sistema de estivas y viajes
  - Catálogo de productos completo
  - Vista previa del muro con texturas
  - Política de tratamiento de datos

---

## 🗺️ Roadmap

### v0.2.0 (Próximo Release)
- [ ] Backend para formulario de contacto
- [ ] Base de datos de usuarios
- [ ] Sistema de autenticación
- [ ] Dashboard para maestros
- [ ] Portal de partners funcional

### v0.3.0 (Futuro)
- [ ] Integración con WhatsApp Business API
- [ ] Sistema de cotizaciones online
- [ ] Tracking de pedidos en tiempo real
- [ ] Blog con CMS
- [ ] Área de clientes

---

## 📄 Licencia

Copyright © 2025 **Ladrillera Limonar S.A.S.**  
Todos los derechos reservados.

Este proyecto es propietario y confidencial. No está permitida su distribución, modificación o uso sin autorización expresa de Ladrillera Limonar S.A.S.

---

## 📞 Contacto

**Ladrillera Limonar S.A.S.**  
📍 Km 6 Vía Puerto Tejada-Villa Rica, Cauca, Colombia  
📧 hola@limonar.co  
📱 +57 300 123 4567  

🌐 [www.limonar.co](https://limonar.co)  
📘 [Facebook](https://facebook.com/limonarladrillera)  
📸 [Instagram](https://instagram.com/limonarladrillera)

---

<div align="center">
  <strong>Hecho en Colombia. Construido para durar más que nosotros.</strong>
</div>
