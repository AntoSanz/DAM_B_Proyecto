import React, { useEffect, useState } from 'react'
import './ComponenteModal.css'

function ComponenteModal({
  children,
  title = 'Modal',
  triggerText = 'Abrir modal',
  closeText = 'Cerrar',
  triggerClassName = 'btn btn-primary',
  size = ''
}) {
  const [isOpen, setIsOpen] = useState(false)

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

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button type="button" className={triggerClassName} onClick={openModal}>
        {triggerText}
      </button>

      {isOpen && (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            onClick={closeModal}
          >
            <div
              className={`modal-dialog ${size}`.trim()}
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
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>
                    {closeText}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  )
}

export default ComponenteModal
