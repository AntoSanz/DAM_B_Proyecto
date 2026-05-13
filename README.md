# DAM_B_Proyecto

Proyecto fullstack con frontend en React + Vite y backend en Node.js + Express + SQLite.

## Documentacion principal

- Instalacion inicial: [FIRST-INSTALL.md](FIRST-INSTALL.md)
- Guia de pruebas: [TEST.md](TEST.md)
- Backend: [backend/README.md](backend/README.md)
- Frontend: [frontend/README.md](frontend/README.md)

## Stack tecnologico

- Frontend: React 19, Vite, Vitest, Testing Library, Bootstrap
- Backend: Express 5, better-sqlite3
- Base de datos: SQLite local en archivo
- Integracion: script de prueba end to end front-back en Node

## Requisitos previos

- Node.js 20 o superior
- npm

Comprobar versiones:

```bash
node -v
npm -v
```

## Puesta en marcha rapida

1. Instalar dependencias de backend y frontend:

```bash
npm run install:all
```

2. Configurar entorno en frontend creando `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

3. Preparar base de datos:

```bash
npm run db:bootstrap
```

4. Levantar proyecto completo:

```bash
npm run dev:full
```

Servicios esperados:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health backend: http://localhost:3000/health

## Arquitectura general

### Flujo principal

1. La UI consume funciones de la capa API/mocks en frontend.
2. Esas funciones llaman al backend REST usando `VITE_API_BASE_URL`.
3. El backend resuelve rutas en controladores.
4. Los controladores delegan en servicios/modelos.
5. Los modelos ejecutan SQL sobre SQLite.

### Estructura del repositorio

```text
DAM_B_Proyecto/
|- backend/
|  |- database/
|  |- src/
|  |- README.md
|- frontend/
|  |- src/
|  |- tests/
|  |- README.md
|- tests/
|  |- back/
|  |- front/
|  |- integration/
|- FIRST-INSTALL.md
|- TEST.md
|- README.md
```

## Scripts de la raiz

- `npm run install:all`: instala dependencias de backend y frontend.
- `npm run dev:full`: levanta frontend y backend en paralelo.
- `npm run dev:front`: levanta solo frontend.
- `npm run dev:back`: levanta solo backend.
- `npm run db:reset`: limpia datos y resetea secuencias.
- `npm run db:seed:users`: inserta usuarios demo.
- `npm run db:bootstrap`: reset completo + semillas de catalogo y usuarios.
- `npm run test:front`: ejecuta suite frontend.
- `npm run test:back`: ejecuta suite backend de `tests/back`.
- `npm run test:integration`: prueba de integracion front-back.

## Endpoints principales

- GET /health
- GET /api/categories
- GET /api/categories/:id/products
- POST /api/auth/register
- POST /api/auth/login
- POST /api/checkout
- GET /api/history-orders/user/:user_id