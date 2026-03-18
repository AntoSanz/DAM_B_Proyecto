import React from 'react';
import ComponenteModal from '../ComponenteModal/ComponenteModal';
import { t } from '../../locales/i18n';

function Contacto({ isOpen, onClose }) {
  return (
    <ComponenteModal 
      isOpenExternal={isOpen}    
      onOpenChange={onClose}     
      title={t('nav.contact')}   
      showTrigger={false}        
    >
      <div style={{ textAlign: 'center', color: 'black', padding: '20px' }}>
        <p><strong>Equipo de desarrollo:</strong></p>
        <p>Daniel - tu@email.com</p>
        <p>Antonio - el@email.com</p>
      </div>
    </ComponenteModal>
  );
}

export default Contacto;