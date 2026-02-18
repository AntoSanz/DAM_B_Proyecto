import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Bootstrap (CSS only). Para componentes JS, descomenta la línea de JS y asegúrate de instalar bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
