# 🎨 Estructura del Frontend

Este proyecto utiliza **React** para el desarrollo del frontend,
siguiendo una estructura modular que permite **separar
responsabilidades**, facilitar el mantenimiento y escalar la aplicación
de forma ordenada.

El frontend se comunica con el backend **exclusivamente mediante
peticiones HTTP** (API REST).

------------------------------------------------------------------------

## 📁 `frontend/`

Contiene **toda la aplicación cliente**, encargada de la interfaz de
usuario y la interacción con el backend.

------------------------------------------------------------------------

## 📁 `src/`

Es el **núcleo del frontend**.\
Todo el código de React vive dentro de esta carpeta.

------------------------------------------------------------------------

## 📁 `api/` -- Comunicación con el backend

Contiene funciones encargadas de realizar **peticiones HTTP** al
backend.

### Ejemplos:

-   Login
-   Registro
-   Obtener datos protegidos

📌 *Centralizar las llamadas HTTP evita duplicación de código y facilita
cambios en la API.*

------------------------------------------------------------------------

## 📁 `components/` -- Componentes reutilizables

Contiene componentes de React **reutilizables y desacoplados**.

### Ejemplos:

-   Formularios
-   Botones
-   Inputs
-   Componentes de UI

📌 *Los componentes no deberían manejar lógica compleja ni llamadas
directas a la API.*

------------------------------------------------------------------------

## 📁 `pages/` -- Vistas o pantallas

Contiene los componentes que representan **pantallas completas** de la
aplicación.

### Ejemplos:

-   LoginPage
-   RegisterPage
-   Dashboard

📌 *Las páginas suelen combinar varios componentes.*

------------------------------------------------------------------------

## 📁 `context/` -- Estado global

Contiene los **Context Providers** de React.

### Ejemplos:

-   Autenticación
-   Usuario logueado
-   Tokens

📌 *Permite compartir estado global sin necesidad de prop drilling.*

------------------------------------------------------------------------

## 📁 `services/` -- Lógica del frontend

Contiene lógica que no pertenece directamente a la UI.

### Ejemplos:

-   Manejo de tokens
-   Helpers
-   Lógica relacionada con autenticación

📌 *Esta capa separa la lógica de la presentación.*

------------------------------------------------------------------------

## 📄 `App.jsx`

Componente raíz de la aplicación.

### Responsabilidades:

-   Definir rutas (React Router)
-   Envolver la app en providers
-   Estructurar la aplicación

------------------------------------------------------------------------

## 📄 `main.jsx`

Punto de entrada del frontend.

### Funciones:

-   Renderizar React en el DOM
-   Inicializar la aplicación

------------------------------------------------------------------------

## 🧠 Resumen de la arquitectura

  Carpeta / Archivo   Función
  ------------------- -----------------------------
  `api`               Comunicación con el backend
  `components`        Componentes reutilizables
  `pages`             Pantallas de la app
  `context`           Estado global
  `services`          Lógica del frontend
  `App.jsx`           Estructura principal
  `main.jsx`          Punto de entrada

------------------------------------------------------------------------

📌 Esta estructura permite: - Separación clara de responsabilidades -
Escalabilidad - Fácil mantenimiento - Explicación clara en un contexto
académico
