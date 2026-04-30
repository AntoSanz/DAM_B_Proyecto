# Frontend

Aplicacion cliente construida con React + Vite.

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

Desde `frontend`:

```bash
npm install
```

O desde la raiz del repo:

```bash
npm run install:all
```

## Configuracion

Crear archivo `.env` en `frontend`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Plantilla disponible en `.env.example`.

## Ejecucion

Solo frontend:

```bash
npm run dev
```

Frontend + backend desde `frontend`:

```bash
npm run dev:full
```

URLs esperadas:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Build y preview

```bash
npm run build
npm run preview
```

## Testing

```bash
npm test
npm run test:watch
npm run test:coverage
npm run test:ui
```

## Playground de componentes

Con frontend en ejecucion:

http://localhost:5173/?demo=components

Parametros utiles:

- `component=<id>` abre una demo concreta.
- `q=<texto>` filtra componentes en el menu.

IDs soportados:

- breadcrumb
- sectioncard
- modal
- categories
- products
- product-detail

## Estructura

```text
frontend/
|- public/
|- src/
|  |- assets/
|  |- components/
|  |- data-managers/
|  |- hooks/
|  |- locales/
|  |- mocks/
|  |- pages/
|  |- App.jsx
|  |- main.jsx
|- tests/
|- .env.example
|- package.json
|- README.md
```

## Documentacion relacionada

- [../README.md](../README.md)
- [../FIRST-INSTALL.md](../FIRST-INSTALL.md)
