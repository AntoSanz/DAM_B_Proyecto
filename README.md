# DAM_B_Proyecto

Proyecto fullstack con frontend en React/Vite (`frontend`) y backend en Node.js/Express + SQLite (`backend`).

<a id="indice-rapido"></a>

## Índice rápido

- [Puesta en marcha rápida](#puesta-en-marcha-rápida)
- [Demo de componentes (Playground)](#demo-de-componentes-playground)
- [Scripts disponibles (raíz)](#scripts-disponibles-raíz)
- [Integración Front-Back](#integración-front-back)
- [Backend API](#backend-api)
- [Base de datos SQLite](#base-de-datos-sqlite)

## Estructura

```text
DAM_B_Proyecto/
├── backend/
│   ├── database/
│   │   └── seeds/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── scripts/
│   │   └── services/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── locales/
│   │   ├── mocks/
│   │   │   └── products/
│   │   └── pages/
├── tests/
│   └── integration/
```

[↑ Volver al índice rápido](#indice-rapido)

## Requisitos

- Node.js 20+ (recomendado)
- npm

[↑ Volver al índice rápido](#indice-rapido)

## Puesta en marcha rápida

1. Instala dependencias del frontend y backend:

```bash
npm run install:all
```

2. Levanta frontend + backend juntos (desde la raíz):

```bash
npm run dev:full
```

Servicios esperados:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

[↑ Volver al índice rápido](#indice-rapido)

## Demo de componentes (Playground)

El frontend incluye un modo de demos para probar componentes de forma aislada.

Acceso rápido:

- `http://localhost:5173/?demo=components`

Resumen:

- Menú lateral con componentes disponibles
- Vista única por componente
- Enlaces compartibles con estado de filtro y componente activo

Documentación completa en:

- `frontend/README.md` (sección **Demos de Componentes (Playground)**)

[↑ Volver al índice rápido](#indice-rapido)

## Scripts disponibles (raíz)

- `npm run install:all`: instala dependencias de backend y frontend
- `npm run dev:full`: levanta frontend + backend
- `npm run dev:front`: levanta solo frontend
- `npm run dev:back`: levanta solo backend
- `npm run db:reset`: resetea DB SQLite del backend y carga catálogo
- `npm run db:seed:users`: aplica seed de usuarios demo en backend
- `npm run db:bootstrap`: resetea y siembra la base SQLite del backend
- `npm run test:integration:front-back`: prueba especial de conexión Front-Back (config frontend + API backend + contrato de datos)

[↑ Volver al índice rápido](#indice-rapido)

## Integración Front-Back

El frontend usa `VITE_API_BASE_URL` para apuntar al backend.

Archivo:

- `frontend/.env`

Valor local por defecto:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

[↑ Volver al índice rápido](#indice-rapido)

## Backend API

Endpoints principales:

- `GET /health`
- `GET /api/categories`
- `GET /api/categories/:id/products`

[↑ Volver al índice rápido](#indice-rapido)

## Base de datos SQLite

- Motor: `better-sqlite3`
- Archivo local: `backend/database.sqlite`
- Inicialización automática al arrancar backend
- Seed catálogo (auto): `backend/database/seeds/catalog.seed.sql`
- Seed usuarios (manual): `backend/database/seeds/users.seed.sql`

Comando recomendado para dejar DB lista en backend:

```bash
npm --prefix backend run db:bootstrap
```

Flujo recomendado desde la raíz:

```bash
# Opción rápida (recomendada)
npm run db:bootstrap

# Opción paso a paso
npm run db:reset
npm run db:seed:users
```

[↑ Volver al índice rápido](#indice-rapido)

## Git y archivos ignorados

En `.gitignore` ya está configurado:

- `node_modules/`
- `*.sqlite`
- `*.sqlite3`
- `*.db`

[↑ Volver al índice rápido](#indice-rapido)
