import React from 'react'
import ComponenteModal from '../ComponenteModal/ComponenteModal'
import { t } from '../../locales/i18n'

function LogoutConfirmModal({ isOpen, onCancel, onConfirm }) {
  return (
    <ComponenteModal
      title={t('nav.logoutConfirmTitle')}
      closeText={t('nav.logoutCancelAction')}
      showTrigger={false}
      isOpenExternal={isOpen}
      onOpenChange={(nextIsOpen) => {
        if (!nextIsOpen) {
          onCancel?.()
        }
      }}
      footerContent={(
        <>
          <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
            {t('nav.logoutCancelAction')}
          </button>
          <button type="button" className="btn btn-danger" onClick={onConfirm}>
            {t('nav.logoutConfirmAction')}
          </button>
        </>
      )}
    >
      <p className="mb-0">{t('nav.logoutConfirmBody')}</p>
    </ComponenteModal>
  )
}

export default LogoutConfirmModal
