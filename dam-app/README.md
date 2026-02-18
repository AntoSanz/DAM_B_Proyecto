# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Uso de Bootstrap

Puedes usar Bootstrap en este proyecto de dos maneras principales: mediante CDN (rápido para pruebas) o instalándolo por npm (recomendado para producción y personalización).

- Opción CDN (rápida): añade en `index.html` dentro de la carpeta `public` lo siguiente dentro de `<head>` para los estilos y antes de `</body>` para el bundle JS si lo necesitas:

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS (opcional, incluye Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/js/bootstrap.bundle.min.js"></script>
```

- Opción npm (recomendada): instala el paquete e impórtalo en `src/main.jsx` para que esté disponible globalmente:

```bash
npm install bootstrap
```

Y en `src/main.jsx` añade al principio:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle' // opcional si necesitas componentes JS
```

Ejemplo rápido de componente usando clases de Bootstrap (añádelo en cualquier JSX):

```jsx
function EjemploBoton() {
	return <button className="btn btn-primary">Botón Bootstrap</button>
}
```

Notas:
- Si usas Tailwind u otros sistemas de utilidades, comprueba conflictos de estilos.
- Para usar componentes interactivos de Bootstrap (modales, dropdowns, tooltips) importa el bundle JS o configura Popper según la documentación oficial.
