/**
 * Componente App - Componente raíz de la aplicación
 * 
 * Actúa como contenedor principal que renderiza el componente Index.
 * Index contiene la estructura completa: NavBar + MainContent
 * 
 * Este componente es muy simple porque toda la lógica de navegación
 * y gestión de estado está en MainContent
 */


import './App.css';

import Index from './pages/Index';
import { CarritoProvider } from './data-managers/CarritoDm';

function App() {
  return (
    <CarritoProvider>
      <Index />
    </CarritoProvider>
  );
}

export default App

