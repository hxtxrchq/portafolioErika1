# Editorial Landing - React + Vite

Landing page premium para portafolio gerencial, consultoría y voz en off.

## Ejecutar

```bash
npm install
npm run dev
```

## Formulario con Formspree

1. Crea tu formulario en Formspree y copia tu endpoint (por ejemplo `https://formspree.io/f/xxxxabcd`).
2. Crea un archivo `.env` en la raiz del proyecto con:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxabcd
```

3. Reinicia el servidor (`npm run dev`).

El formulario de la seccion de contacto enviara: `name`, `company`, `email`, `help`, `message`.

## Stack

- React + Vite
- CSS Modules
- Framer Motion

## Estructura

- `src/components/*` componentes reutilizables de secciones
- `src/data/services.js`
- `src/data/portfolio.js`
- `src/data/testimonials.js`
