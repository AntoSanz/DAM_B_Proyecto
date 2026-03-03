import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import MainContent from './MainContent';
import ComponenteModal from '../components/ComponenteModal/ComponenteModal'; // Importas el de Antonio

function Index() {
  return (
    <>
      <NavBar />
      <MainContent />
      
      {/* Ponemos el modal de Antonio justo aquí */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
        <ComponenteModal 
          triggerText="📧 Contáctanos" // Este texto aparecerá en el botón azul
          title="Contacto del Equipo"
          triggerClassName="btn-contact-custom" // Luego le das estilo si quieres
        >
          {/* Aquí metes la información que antes tenías en App.jsx */}
          <div style={{ textAlign: 'center', color: 'black', padding: '10px' }}>
            <h2>Contáctanos</h2>
            <p><strong>Equipo de desarrollo:</strong></p>
            <p>Daniel - tu@email.com</p>
            <p>Antonio - el@email.com</p>
          </div>
        </ComponenteModal>
      </div>
    </>
  );
}

export default Index;