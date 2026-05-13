import { describe, test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import CustomSpinner from '../../frontend/src/components/CustomSpinner/CustomSpinner'
import { vi } from 'vitest'
import { screen } from '@testing-library/react'

describe('CustomSpinner Component', () => {
  test('renderiza spinner cuando visible=true', () => {
    render(<CustomSpinner visible={true} showSpinnerIcon={true} />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  test('no renderiza cuando visible=false', () => {
    render(<CustomSpinner visible={false} />)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  test('muestra texto cuando showText=true', () => {
    render(<CustomSpinner visible={true} showText={true} text="Procesando" />)
    expect(screen.getAllByText('Procesando')).toHaveLength(2)
  })

  test('se oculta automaticamente al cumplirse duration', () => {
    vi.useFakeTimers()
    render(<CustomSpinner visible={true} duration={1} />)
    expect(screen.getByRole('status')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    vi.useRealTimers()
  })
})
