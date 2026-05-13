# Frontend

Aplicacion cliente construida con React + Vite.

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

Desde frontend:

```bash
npm install
```

Desde la raiz del repositorio:

```bash
npm run install:all
```

## Configuracion

Crear archivo frontend/.env:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Plantilla disponible en .env.example.

## Ejecucion

Solo frontend:

```bash
npm run dev
```

Frontend + backend desde frontend:

```bash
npm run dev:full
```

URLs esperadas:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Arquitectura y flujo de UI

### Flujo principal de navegacion

1. Carga de categorias.
2. Seleccion de categoria y carga de productos.
3. Apertura de detalle de producto.
4. Acciones de carrito y checkout.
5. Consulta de historial para usuario autenticado.

### Responsabilidad por carpetas

- src/pages: composicion de pantallas y flujo principal.
- src/components: UI reutilizable y presentacional.
- src/data-managers: estado local y acceso a funciones de dominio de frontend.
- src/mocks/api.js: capa de acceso a API backend con opcion de mocks locales.
- src/locales: internacionalizacion.

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

Estrategia:

- Tests unitarios de componentes con Vitest + Testing Library.
- Tests de integracion de flujo en carpeta tests.
- Entorno DOM con jsdom.

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

- ../README.md
- ../FIRST-INSTALL.md
- ../TEST.md
