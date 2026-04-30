# Backend

API REST del proyecto, construida con Node.js + Express y persistencia SQLite.

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

Desde la carpeta `backend`:

```bash
npm install
```

O desde la raiz:

```bash
npm run install:all
```

## Arranque

Desde `backend`:

```bash
npm start
```

Servidor por defecto: http://localhost:3000

## Scripts

- `npm start`: inicia la API.
- `npm test`: ejecuta tests del backend.
- `npm run db:reset`: reinicia datos y deja catalogo base.
- `npm run db:seed:users`: inserta usuarios demo.
- `npm run db:bootstrap`: ejecuta reset + usuarios demo.

## Base de datos

- Motor: better-sqlite3
- Archivo generado: `backend/database.sqlite`
- Inicializacion automatica al arrancar servidor

Seeds:

- `database/seeds/catalog.seed.sql`
- `database/seeds/users.seed.sql`

Preparacion recomendada:

```bash
npm run db:bootstrap
```

## Endpoints

- GET /health
- GET /api/categories
- GET /api/categories/:id/products
- POST /api/auth/register
- POST /api/auth/login

Ejemplo `POST /api/auth/register`:

```json
{
  "email": "user@test.com",
  "password": "secret123",
  "name": "Usuario Demo"
}
```

Ejemplo `POST /api/auth/login`:

```json
{
  "email": "user@test.com",
  "password": "secret123"
}
```

## Estructura

```text
backend/
|- database/
|  |- seeds/
|- src/
|  |- config/
|  |- controllers/
|  |- models/
|  |- routes/
|  |- scripts/
|  |- services/
|  |- app.js
|  |- server.js
|- tests/
|- README.md
```