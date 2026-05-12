import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomDropdown from '../../frontend/src/components/CustomDropdown/CustomDropdown'

const mockItems = [
  { id: 1, nombre: 'Opcion 1', onClick: vi.fn() },
  { id: 2, nombre: 'Opcion 2', onClick: vi.fn() },
]

describe('CustomDropdown Component', () => {
  test('renderiza trigger siempre', () => {
    render(<CustomDropdown isOpen={false} trigger={<button>Menu</button>} />)
    expect(screen.getByText('Menu')).toBeInTheDocument()
  })

  test('muestra items cuando isOpen=true', () => {
    render(<CustomDropdown isOpen={true} items={mockItems} trigger={<button>Menu</button>} />)
    expect(screen.getByText('Opcion 1')).toBeInTheDocument()
    expect(screen.getByText('Opcion 2')).toBeInTheDocument()
  })

  test('ejecuta onClick del item al pulsarlo', () => {
    render(<CustomDropdown isOpen={true} items={mockItems} trigger={<button>Menu</button>} />)
    fireEvent.click(screen.getByText('Opcion 2'))
    expect(mockItems[1].onClick).toHaveBeenCalledTimes(1)
  })

  test('ejecuta onClose al pulsar boton cerrar', () => {
    const onClose = vi.fn()
    render(<CustomDropdown isOpen={true} onClose={onClose} trigger={<button>Menu</button>} />)
    fireEvent.click(screen.getByLabelText('Cerrar'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
