import React from 'react';
import ComponenteModal from '../ComponenteModal/ComponenteModal';
import { t } from '../../locales/i18n';

function Contacto({ isOpen, onClose }) {
  // Esta función coge la "key" (antonio, daniel, lucas) y monta su línea de contacto
  const getPersonData = (key) => {
    const name = t(`contact.people.${key}.name`);
    const ap1 = t(`contact.people.${key}.lastname1`);
    const ap2 = t(`contact.people.${key}.lastname2`);
    const mail = t(`contact.people.${key}.mail`);
    return `${name} ${ap1} ${ap2} - ${mail}`;
  };

  return (
    <ComponenteModal 
      isOpenExternal={isOpen} 
      onOpenChange={onClose}
      title={t('nav.contact')}
      showTrigger={false}
    >
      <div style={{ textAlign: 'center', color: 'black', padding: '20px' }}>
        <p><strong>{t('contact.developmentTeam')}:</strong></p>
        
        {/* Ahora llamamos a la función para cada uno */}
        <p>{getPersonData('antonio')}</p>
        <p>{getPersonData('daniel')}</p>
        <p>{getPersonData('lucas')}</p>
      </div>
    </ComponenteModal>
  );
}

export default Contacto;