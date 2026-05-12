# DAM_B_Proyecto

Proyecto fullstack con frontend en React + Vite y backend en Node.js + Express + SQLite.

## Documentacion principal

- Instalacion inicial paso a paso: [FIRST-INSTALL.md](FIRST-INSTALL.md)
- Guia de tests (front, back e integracion): [TEST.md](TEST.md)
- Frontend: [frontend/README.md](frontend/README.md)
- Backend: [backend/README.md](backend/README.md)

## Requisitos previos

- Node.js 20 o superior
- npm

Comprobar version:

```bash
node -v
npm -v
```

## Instalacion (todo el proyecto)

Desde la raiz:

```bash
npm run install:all
```

## Configuracion de entorno

Crear un archivo `.env` dentro de `frontend` con:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Referencia: [frontend/.env.example](frontend/.env.example)

## Base de datos

Preparar base SQLite con catalogo y usuarios demo:

```bash
npm run db:bootstrap
```

Alternativa paso a paso:

```bash
npm run db:reset
npm run db:seed:users
```

## Ejecucion

Levantar frontend + backend:

```bash
npm run dev:full
```

Servicios:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health: http://localhost:3000/health

Levantar por separado:

```bash
npm run dev:front
npm run dev:back
```

## Scripts de la raiz

- `npm run install:all`: instala frontend y backend.
- `npm run dev:full`: levanta frontend y backend.
- `npm run dev:front`: levanta solo frontend.
- `npm run dev:back`: levanta solo backend.
- `npm run db:reset`: reinicia DB y carga catalogo.
- `npm run db:seed:users`: carga usuarios demo.
- `npm run db:bootstrap`: reset + seed de usuarios.
- `npm run test:back`: ejecuta los tests de backend en `tests/back`.
- `npm run test:integration`: prueba de integracion front-back.

## Endpoints principales

- GET /health
- GET /api/categories
- GET /api/categories/:id/products
- POST /api/auth/register
- POST /api/auth/login

## Estructura general

```text
DAM_B_Proyecto/
|- backend/
|- frontend/
|- tests/integration/
|- FIRST-INSTALL.md
|- README.md
```