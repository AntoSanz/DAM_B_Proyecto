import React from 'react'
import { t } from '../../locales/i18n'

function PlantillaComponente() {

    const miFuncionPersonalizada = () => {
        alert(t('componentePrueba.alertMessage'))
    }
    
  return (
    <button type="button" className="btn btn-primary" onClick={miFuncionPersonalizada}>{t('button.primary')}</button>
  )
}

export default PlantillaComponente