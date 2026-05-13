# Backend

API REST construida con Node.js + Express y persistencia local SQLite.

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

Desde la carpeta backend:

```bash
npm install
```

Desde la raiz del repositorio:

```bash
npm run install:all
```

## Arranque

Desde backend:

```bash
npm start
```

Servidor por defecto: http://localhost:3000

## Arquitectura por capas

1. Rutas: definen endpoints HTTP y delegan en controladores.
2. Controladores: validan request/response y orquestan casos de uso.
3. Servicios: encapsulan logica de dominio cuando aplica.
4. Modelos: acceso a datos SQLite y transformacion de registros.
5. Config DB: conexion, pragma y bootstrap de tablas/seeds.

Estructura de codigo:

```text
src/
|- app.js
|- server.js
|- config/
|  |- db.js
|- routes/
|- controllers/
|- services/
|- models/
|- scripts/
```

## Base de datos

- Motor: better-sqlite3
- Archivo: backend/database.sqlite
- Inicializacion de tablas al levantar el servidor

Semillas disponibles:

- database/seeds/catalog.seed.sql
- database/seeds/users.seed.sql
- database/seeds/orders.seed.sql
- database/seeds/history_orders.seed.sql

Preparacion recomendada:

```bash
npm run db:bootstrap
```

## Scripts

- `npm start`: inicia la API.
- `npm test`: ejecuta tests locales de backend.
- `npm run db:reset`: limpia tablas y secuencias.
- `npm run db:seed:users`: inserta usuarios demo.
- `npm run db:bootstrap`: prepara base completa para desarrollo.

## Endpoints

Salud:

- GET /health

Catalogo:

- GET /api/categories
- GET /api/categories/:id/products

Autenticacion:

- POST /api/auth/register
- POST /api/auth/login

Checkout e historial:

- POST /api/checkout
- GET /api/history-orders
- GET /api/history-orders/:id
- GET /api/history-orders/user/:user_id
- POST /api/history-orders
- PUT /api/history-orders/:id
- DELETE /api/history-orders/:id

Ejemplo de registro:

```json
{
  "email": "user@test.com",
  "password": "secret123",
  "name": "Usuario Demo"
}
```

Ejemplo de login:

```json
{
  "email": "user@test.com",
  "password": "secret123"
}
```

## Testing

Desde la raiz se ejecuta la suite backend principal con:

```bash
npm run test:back
```

Documentacion de pruebas: ../TEST.md