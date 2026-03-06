import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { t } from '../../locales/i18n'
import './ComponenteModal.css'

function ComponenteModal({
  children,
  title = t('modal.title'),
  triggerText = t('modal.open'),
  closeText = t('modal.close'),
  triggerClassName = 'btn btn-primary',
  size = '',
  showTrigger = true,
  isOpenExternal,
  onOpenChange,
  footerContent
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isControlled = typeof isOpenExternal === 'boolean'
  const isOpen = isControlled ? isOpenExternal : internalIsOpen

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open-custom')
      return
    }

    document.body.classList.remove('modal-open-custom')

    return () => {
      document.body.classList.remove('modal-open-custom')
    }
  }, [isOpen])

  const openModal = () => {
    if (!isControlled) {
      setInternalIsOpen(true)
    }
    onOpenChange?.(true)
  }

  const closeModal = () => {
    if (!isControlled) {
      setInternalIsOpen(false)
    }
    onOpenChange?.(false)
  }

  return (
    <>
      {showTrigger && (
        <button type="button" className={triggerClassName} onClick={openModal}>
          {triggerText}
        </button>
      )}

      {isOpen && createPortal(
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            onClick={closeModal}
          >
            <div
              className={`modal-dialog modal-dialog-centered ${size}`.trim()}
              role="document"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label={closeText}
                    onClick={closeModal}
                  ></button>
                </div>

                <div className="modal-body">{children}</div>

                <div className="modal-footer">
                  {footerContent ?? (
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                      {closeText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>,
        document.body
      )}
    </>
  )
}

export default ComponenteModal
