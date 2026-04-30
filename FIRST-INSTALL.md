# FIRST INSTALL

Guia minima para que cualquier persona pueda instalar y ejecutar este proyecto completo (base de datos + backend + frontend) por primera vez.

## 1) Requisitos previos

- Node.js 20 o superior
- npm (normalmente viene con Node.js)
- Git (opcional, solo para clonar el repositorio)

Comprobar versiones:

```bash
node -v
npm -v
```

## 2) Descargar proyecto

Si ya tienes la carpeta, salta este paso. Si no:

```bash
git clone <URL_DEL_REPOSITORIO>
cd DAM_B_Proyecto
```

## 3) Instalar dependencias (frontend + backend)

Desde la raiz del proyecto:

```bash
npm run install:all
```

## 4) Configurar entorno del frontend

Crear el archivo `frontend/.env` con este contenido:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 5) Preparar base de datos

Desde la raiz del proyecto:

```bash
npm run db:bootstrap
```

Que hace este comando:

- crea o reinicia `backend/database.sqlite`
- carga catalogo de categorias y productos
- carga usuarios demo

## 6) Iniciar aplicacion completa

Desde la raiz del proyecto:

```bash
npm run dev:full
```

Servicios esperados:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health check backend: http://localhost:3000/health

## 7) Comandos utiles

Ejecutar solo frontend:

```bash
npm run dev:front
```

Ejecutar solo backend:

```bash
npm run dev:back
```

Resetear base de datos:

```bash
npm run db:reset
```

Sembrar solo usuarios demo:

```bash
npm run db:seed:users
```

## Problemas comunes

- Si `npm run install:all` falla, revisa version de Node (usar Node 20+).
- Si el frontend no carga datos, verifica que `frontend/.env` existe y que el backend este levantado.
- Si el puerto 3000 o 5173 esta ocupado, cierra procesos previos y vuelve a lanzar `npm run dev:full`.
