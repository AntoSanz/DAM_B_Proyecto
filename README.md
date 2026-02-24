# DAM_B_Proyecto

Proyecto fullstack con frontend en React/Vite (`frontend`) y backend en Node.js/Express + SQLite (`backend`).

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

## Requisitos

- Node.js 20+ (recomendado)
- npm

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

## Scripts disponibles (raíz)

- `npm run install:all`: instala dependencias de backend y frontend
- `npm run dev:full`: levanta frontend + backend
- `npm run dev:front`: levanta solo frontend
- `npm run dev:back`: levanta solo backend
- `npm run db:reset`: resetea DB SQLite del backend y carga catálogo
- `npm run db:seed:users`: aplica seed de usuarios demo en backend
- `npm run db:bootstrap`: resetea y siembra la base SQLite del backend
- `npm run test:integration:front-back`: prueba especial de conexión Front-Back (config frontend + API backend + contrato de datos)

## Integración Front-Back

El frontend usa `VITE_API_BASE_URL` para apuntar al backend.

Archivo:

- `frontend/.env`

Valor local por defecto:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## Backend API

Endpoints principales:

- `GET /health`
- `GET /api/categories`
- `GET /api/categories/:id/products`

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

## Git y archivos ignorados

En `.gitignore` ya está configurado:

- `node_modules/`
- `*.sqlite`
- `*.sqlite3`
- `*.db`
