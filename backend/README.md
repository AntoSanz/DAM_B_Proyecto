# Backend (Node.js + Express + SQLite)

API del proyecto con base de datos SQLite y estructura por capas.

## Requisitos

- Node.js 20+
- npm

## Instalación

```bash
cd backend
npm install
```

## Arranque

```bash
npm start
```

Servidor por defecto:

- `http://localhost:3000`

## Scripts útiles

- `npm start`: inicia la API
- `npm run db:reset`: elimina `database.sqlite`, recrea esquema y aplica seed automático de catálogo
- `npm run db:seed:users`: aplica seed SQL de usuarios demo
- `npm run db:bootstrap`: ejecuta reset + seed de usuarios en un único comando

## Endpoints actuales

- `GET /health`
- `GET /api/categories`
- `GET /api/categories/:id/products`

## Estructura recomendada (actual)

- `src/config/`: configuración e inicialización de DB
- `src/models/`: acceso a datos (SQL/prepared statements)
- `src/services/`: lógica de negocio
- `src/controllers/`: manejo de request/response
- `src/routes/`: definición de endpoints
- `src/app.js`: composición de middlewares y rutas
- `src/server.js`: bootstrap del servidor

- `database/seeds/catalog.seed.sql`: seed de categorías y productos
- `database/seeds/users.seed.sql`: seed SQL de usuarios

## Base de datos

- Driver: `better-sqlite3`
- Archivo: `backend/database.sqlite`
- Inicialización: automática al iniciar el servidor (`initializeDatabase()` en `src/config/db.js`)
- Tablas `users`, `categories` y `products` creadas automáticamente si no existen

## Seed

Archivos seed:

- `backend/database/seeds/catalog.seed.sql` (carga automática si categorías/productos están vacíos)
- `backend/database/seeds/users.seed.sql` (ejecución manual)

Flujo sugerido:

1. Ejecuta `npm run db:bootstrap` para dejar la base lista (catálogo + usuarios demo).

Desde la raíz del repo, puedes usar:

```bash
npm run db:bootstrap
```

Alternativa paso a paso:

1. Ejecuta `npm run db:reset` para regenerar base limpia con catálogo.
2. Ejecuta `npm run db:seed:users` para cargar usuarios demo.

Desde la raíz del repo, equivalente:

```bash
npm run db:reset
npm run db:seed:users
```

## Modelo de usuario

Implementado en `src/models/user.model.js` con prepared statements:

- `create(email, hashedPassword, name)`
- `findByEmail(email)`
- `findById(id)`
- `findAll()`
- `update(id, data)`
- `delete(id)`
