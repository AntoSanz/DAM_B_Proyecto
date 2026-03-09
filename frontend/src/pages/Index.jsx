import React from 'react';
import MainContent from "./MainContent"; 
import ComponenteModal from "../components/ComponenteModal/ComponenteModal";
import Contacto from "../components/Contacto/contacto";

function Index() {
  return (
    <>
      <MainContent /> 

      <ComponenteModal triggerText="Contáctanos" title="Información de Contacto">
        <Contacto />
      </ComponenteModal>
    </>
  );
}

export default Index;