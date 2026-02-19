import React from 'react'
import { t } from '../../locales/i18n'

function PlantillaComponente() {

    const miFuncionPersonalizada = () => {
        alert(t('componentePrueba.alertMessage'))
    }
    
  return (
    <button type="button" class="btn btn-primary" onClick={miFuncionPersonalizada}>Primary</button>
  )
}

export default PlantillaComponente