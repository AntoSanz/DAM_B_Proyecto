import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ComponenteModal from '../../frontend/src/components/ComponenteModal/ComponenteModal'

describe('ComponenteModal Component', () => {
  test('abre modal en modo no controlado al pulsar trigger', () => {
    const { container } = render(
      <ComponenteModal title="Test Modal" triggerText="Abrir">
        <div>Contenido</div>
      </ComponenteModal>
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Abrir' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(container.querySelector('.modal-open-custom') !== null || document.body.classList.contains('modal-open-custom')).toBe(true)
  })

  test('en modo controlado muestra contenido cuando isOpenExternal=true', () => {
    render(
      <ComponenteModal isOpenExternal={true} onOpenChange={vi.fn()} showTrigger={false} title="Test Modal">
        <div>Contenido</div>
      </ComponenteModal>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Contenido')).toBeInTheDocument()
  })

  test('dispara onOpenChange(false) al cerrar en modo controlado', () => {
    const onOpenChange = vi.fn()
    render(
      <ComponenteModal isOpenExternal={true} onOpenChange={onOpenChange} showTrigger={false} title="Test Modal">
        <div>Contenido</div>
      </ComponenteModal>
    )
    fireEvent.click(screen.getByText(/^Cerrar$/))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  test('cierra modal no controlado al pulsar boton cerrar', () => {
    render(
      <ComponenteModal title="Test" triggerText="Abrir">
        <div>Contenido</div>
      </ComponenteModal>
    )
    fireEvent.click(screen.getByRole('button', { name: 'Abrir' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.click(screen.getByText(/^Cerrar$/))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
