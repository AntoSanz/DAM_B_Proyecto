# 📦 Estructura del Backend

Este proyecto utiliza **Node.js + Express** siguiendo una arquitectura
modular, pensada para ser **escalable**, **mantenible** y **fácil de
explicar en un contexto académico**.

A continuación se describe **la función de cada carpeta y archivo del
backend**.

------------------------------------------------------------------------

## 📁 `backend/`

Contiene **todo el código del servidor** (API, autenticación, conexión a
base de datos).\
El frontend no interactúa directamente con esta carpeta, solo a través
de peticiones HTTP.

------------------------------------------------------------------------

## 📁 `src/`

Es el **núcleo del backend**.\
Todo el código fuente vive aquí para evitar mezclarlo con archivos de
configuración o dependencias.

------------------------------------------------------------------------

## 📁 `config/` -- Configuración del sistema

Contiene archivos de configuración global.

### Archivos:

-   **`db.js`**\
    Configura la conexión a la base de datos SQL (host, usuario,
    contraseña, pool de conexiones).
-   **`env.js`** (opcional)\
    Centraliza el acceso a variables de entorno (`process.env`).

------------------------------------------------------------------------

## 📁 `routes/` -- Definición de rutas

Define las **URLs disponibles de la API** y asigna cada ruta a su
controlador correspondiente.

------------------------------------------------------------------------

## 📁 `controllers/` -- Controladores

Los controladores actúan como intermediarios entre las rutas HTTP y la
lógica del sistema.

------------------------------------------------------------------------

## 📁 `services/` -- Lógica de negocio

Contiene la **lógica principal del sistema**.

------------------------------------------------------------------------

## 📁 `models/` -- Acceso a datos

Define cómo se interactúa con la base de datos.

------------------------------------------------------------------------

## 📁 `middlewares/` -- Middlewares

Funciones que se ejecutan **antes de llegar al controlador**.

------------------------------------------------------------------------

## 📄 `app.js`

Configura la aplicación Express.

------------------------------------------------------------------------

## 📄 `server.js`

Archivo de arranque del servidor.

------------------------------------------------------------------------

## 🧠 Resumen de la arquitectura

  Carpeta / Archivo   Función
  ------------------- ------------------------------
  `config`            Configuración global
  `routes`            Definición de endpoints
  `controllers`       Manejo de requests/responses
  `services`          Lógica de negocio
  `models`            Acceso a la base de datos
  `middlewares`       Seguridad y validaciones
  `app.js`            Configuración de Express
  `server.js`         Inicio del servidor
