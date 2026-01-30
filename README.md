# Proyecto Académico

Este proyecto es un sistema web con **frontend en React** y **backend en Node.js + Express**, preparado para manejo de autenticación y conexión a base de datos SQL.

La estructura del proyecto está pensada para ser escalable, mantenible y clara para un contexto académico.

---

## Estructura general del proyecto

```
proyecto-academico/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js            # Configuración de conexión a la base de datos
│   │   │   └── env.js           # Variables de entorno
│   │   │
│   │   ├── controllers/
│   │   │   └── auth.controller.js  # Controlador de autenticación
│   │   │
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js  # Middlewares de autenticación
│   │   │
│   │   ├── models/
│   │   │   └── user.model.js       # Modelo de usuario para base de datos
│   │   │
│   │   ├── routes/
│   │   │   └── auth.routes.js      # Rutas de autenticación
│   │   │
│   │   ├── services/
│   │   │   └── auth.service.js     # Lógica de negocio de autenticación
│   │   │
│   │   ├── app.js                  # Configuración de Express y middlewares globales
│   │   └── server.js               # Arranque del servidor
│   │
│   ├── .env                        # Variables de entorno
│   ├── package.json                 # Dependencias del backend
│   └── README.md                    # Documentación específica del backend
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── auth.api.js          # Funciones para llamadas HTTP al backend
│   │   │
│   │   ├── components/
│   │   │   └── Login.jsx            # Componente de formulario de login
│   │   │
│   │   ├── pages/
│   │   │   └── LoginPage.jsx        # Página de login
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Contexto global de autenticación
│   │   │
│   │   ├── services/
│   │   │   └── auth.service.js      # Lógica de frontend para autenticación
│   │   │
│   │   ├── App.jsx                  # Componente raíz
│   │   └── main.jsx                 # Entrada de la aplicación React
│   │
│   ├── package.json                 # Dependencias del frontend
│   └── README.md                    # Documentación específica del frontend
│
└── README.md                        # Documentación general del proyecto
```

---

## Tecnologías utilizadas

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express, JWT, bcrypt
- **Base de datos:** SQL (MySQL/PostgreSQL)
- **Otros:** dotenv, nodemon, CORS

---

## Descripción de carpetas

### Backend

- `config/` → Configuración global y conexión a base de datos.
- `routes/` → Define las URLs de la API y su mapeo a controladores.
- `controllers/` → Manejo de requests y responses.
- `services/` → Lógica de negocio del backend.
- `models/` → Acceso a la base de datos.
- `middlewares/` → Funciones intermedias como autenticación y validaciones.
- `app.js` → Configura Express y middlewares.
- `server.js` → Arranca el servidor.

### Frontend

- `api/` → Funciones que hacen llamadas HTTP al backend.
- `components/` → Componentes reutilizables de React.
- `pages/` → Vistas completas o pantallas de la aplicación.
- `context/` → Contextos de React para estado global.
- `services/` → Lógica y helpers del frontend.
- `App.jsx` → Componente raíz de React.
- `main.jsx` → Entrada de la aplicación.

---

## Instalación y ejecución

### Backend

```bash
cd backend
npm install
npm run dev  # Inicia el servidor con nodemon
```

### Frontend

```bash
cd frontend
npm install
npm run dev  # Inicia el frontend (Vite)
```

---

## Flujo de autenticación (resumido)

1. El usuario envía email y contraseña desde el frontend.
2. El backend valida credenciales en `auth.service.js` y `user.model.js`.
3. Si es correcto, se genera un token JWT y se envía al frontend.
4. El frontend almacena el token (context, localStorage o cookies) y controla el acceso a rutas privadas.

---

## Resumen

Esta estructura permite:

- Separación clara de responsabilidades.
- Escalabilidad para agregar módulos y endpoints.
- Fácil mantenimiento y lectura académica.
- Integración sencilla de frontend y backend mediante API REST.
