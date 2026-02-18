/**
 * Punto de entrada (entry point) de la aplicación React
 * 
 * Este archivo:
 * 1. Importa React y ReactDOM
 * 2. Importa los estilos globales (CSS)
 * 3. Importa Bootstrap para el diseño responsivo
 * 4. Renderiza el componente raíz (App) en el elemento con id="root" del HTML
 * 5. Se ejecuta automáticamente cuando se carga la página
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importa los estilos CSS de Bootstrap
// Bootstrap proporciona: componentes UI, grid responsivo, utilidades, variables CSS, etc.
import 'bootstrap/dist/css/bootstrap.min.css'

// Crea la raíz de React y renderiza el componente App
// StrictMode detects potential problems in the application during development
// Se busca el elemento HTML <div id="root"></div> y ahí se monta toda la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

