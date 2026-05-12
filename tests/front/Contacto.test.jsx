import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Contacto from '../../frontend/src/components/Contacto/Contacto'

describe('Contacto Component', () => {
  test('muestra equipo de desarrollo cuando isOpen=true', () => {
    render(<Contacto isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText('Equipo de desarrollo:')).toBeInTheDocument()
  })

  test('muestra las 3 personas del equipo', () => {
    render(<Contacto isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText(/Antonio/)).toBeInTheDocument()
    expect(screen.getByText(/Daniel/)).toBeInTheDocument()
    expect(screen.getByText(/Lucas/)).toBeInTheDocument()
  })

  test('al cerrar modal llama onClose(false)', () => {
    const onClose = vi.fn()
    render(<Contacto isOpen={true} onClose={onClose} />)
    fireEvent.click(screen.getByText(/^Cerrar$/))
    expect(onClose).toHaveBeenCalledWith(false)
  })

  test('si isOpen=false no muestra dialogo', () => {
    render(<Contacto isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
