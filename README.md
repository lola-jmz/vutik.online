# VUTiK Online - Frontend

Agencia de desarrollo web frontend especializada en la creación de interfaces de alto rendimiento (JAMstack/PWA) y estética premium.

## 🚀 Tecnologías Principales (Stack Real)

Este proyecto está construido con herramientas modernas enfocadas en la experiencia de usuario (UX) y el rendimiento:

- **Framework:** Next.js 16.2 (App Router) + React 19
- **Lenguaje:** TypeScript estricto
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion, GSAP, OGL (WebGL)
- **UI & Componentes:** Lucide React, base-ui, Shadcn UI
- **Arquitectura:** Atomic Design Modular

## 💻 Desarrollo Local

### Requisitos Previos
- Node.js 24.13.0 LTS o superior

### Instalación

Asegúrate de instalar las dependencias antes de iniciar el proyecto:

```bash
npm install
```

### Ejecutar Servidor Local

Para utilizar el entorno configurado para este proyecto y evitar conflictos, levanta el servidor de desarrollo en el puerto `3001`:

```bash
npm run dev -- -p 3001
```

Abre [http://localhost:3001](http://localhost:3001) en tu navegador para ver la página.

### 📱 Pruebas en Dispositivos Móviles (Red Local)

El proyecto cuenta con una configuración de seguridad en `next.config.ts` (`allowedDevOrigins`) que habilita el Hot Module Replacement y la carga de fuentes estáticas a través de tu red local. 

Para probar en el móvil:
1. Asegúrate de que el servidor de desarrollo está corriendo en tu PC.
2. Desde tu móvil conectado al mismo WiFi, accede a la IP local de tu ordenador seguida del puerto `3001` (ej. `http://192.168.6.241:3001`).

## 🏗️ Arquitectura del Proyecto

El código fuente sigue los principios de diseño atómico para maximizar el mantenimiento:

- `/src/app`: Rutas principales y layouts de Next.js.
- `/src/components/ui`: Componentes atómicos e interactivos base (tarjetas glaciales, auroras, botones).
- `/src/components/sections`: Organismos y ensambles completos de la landing (Hero, Portfolio, Services, TechStack).
- `/public`: Activos estáticos como logotipos e iconografía en SVG.

## 🛡️ Decisiones de Diseño y Accesibilidad
- **UI Glacial:** Uso avanzado de *glassmorphism* (`backdrop-filter`) perfeccionado con inyección de texturas de ruido visual global (`.glacial-noise`) para una estética ultra-premium.
- **Accesibilidad Inclusiva (WCAG 2.2 AA):** Contraste tipográfico validado y soporte estricto a las preferencias del usuario mediante `prefers-reduced-motion`, adaptando o deshabilitando animaciones e interacciones 3D según la configuración del sistema operativo.

---
*VUTiK Online - Elevando los estándares del desarrollo frontend.*
