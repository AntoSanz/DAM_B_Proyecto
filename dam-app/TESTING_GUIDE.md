# 🧪 TESTING GUIDE - Guía Completa de Testing

Este documento explica cómo ejecutar, escribir y mantener tests en el proyecto DAM Game Store.

## 🚀 Comenzar Rápidamente

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar todos los tests
```bash
npm test
```

### 3. Ver cobertura
```bash
npm run test:coverage
```

## 📦 Dependencias de Testing Instaladas

```json
{
  "devDependencies": {
    "vitest": "^4.0.18",                  // Framework de testing (compatible con ES Modules)
    "@vitest/ui": "^4.0.18",              // UI para visualizar tests
    "@testing-library/react": "^14.1.0",  // Utilidades para testing React
    "@testing-library/jest-dom": "^6.1.4",// Matchers personalizados
    "identity-obj-proxy": "^3.0.0"        // Mock para archivos CSS
  }
}
```

**Nota:** Usamos **Vitest** en lugar de Jest porque:
- ✅ Soporta nativamente módulos ES (nuestro proyecto usa `"type": "module"`)
- ✅ Integración perfecta con Vite (nuestro build tool)
- ✅ API compatible con Jest (misma sintaxis de tests)
- ✅ Mejor rendimiento de tests

## 📋 Scripts de Testing

```bash
# Ejecutar todos los tests una vez
npm test

# Ejecutar tests continuamente (watch mode)
npm run test:watch

# Ver reporte de cobertura
npm run test:coverage

# Ver UI interactiva de tests
npm run test:ui

# Ejecutar un archivo específico
npm test SectionCard.test.jsx

# Ejecutar tests que coincidan con un patrón
npm test -- --testNamePattern="debe mostrar"

# Actualizar snapshots
npm test -- -u

# Ejecutar con output detallado
npm test -- --reporter=verbose
```

## 📁 Estructura de Carpetas de Testing

```
src/
├── __tests__/                       # Carpeta principal de tests
│   ├── __mocks__/
│   │   └── fileMock.js             # Mock para archivos
│   ├── SectionCard.test.jsx        # Tests de SectionCard
│   ├── Breadcrumb.test.jsx         # Tests de Breadcrumb
│   ├── NavBar.test.jsx             # Tests de NavBar
│   ├── ProductDetailScreen.test.jsx# Tests de ProductDetailScreen
│   ├── api.test.js                 # Tests de API mock
│   ├── i18n.test.js                # Tests de internacionalización
│   └── README.md                    # Documentación de tests
│
├── components/
├── pages/
├── mocks/
├── locales/
└── App.jsx
```

## 🧪 Anatomía de un Test

```javascript
// Importar lo necesario
import { render, screen, fireEvent } from '@testing-library/react'
import MyComponent from '../../components/MyComponent'

// Describir el suite de tests
describe('MyComponent', () => {
  
  // Test individual
  test('debe renderizar correctamente', () => {
    // 1. ARRANGE - Preparar
    const props = { title: 'Título' }
    
    // 2. ACT - Actuar
    render(<MyComponent {...props} />)
    
    // 3. ASSERT - Verificar
    expect(screen.getByText('Título')).toBeInTheDocument()
  })
})
```

## 🎯 Testing Library - Guía de APIs

### Renderizar Componentes
```javascript
import { render } from '@testing-library/react'

// Renderizar
const { container } = render(<Component />)

// Acceder al DOM
console.log(container.innerHTML)
```

### Buscar Elementos
```javascript
import { screen } from '@testing-library/react'

// Por texto
screen.getByText('Texto aquí')

// Por rol (button, link, etc.)
screen.getByRole('button')

// Por label
screen.getByLabelText('Email')

// Por placeholder
screen.getByPlaceholderText('Escribe aquí')

// Query variants
screen.getByText()       // Lanza error si no encuentra
screen.queryByText()     // Retorna null si no encuentra
screen.findByText()      // Async - espera a que aparezca
```

### Simular Eventos
```javascript
import { fireEvent } from '@testing-library/react'

// Click
fireEvent.click(button)

// Input
fireEvent.change(input, { target: { value: 'nuevo valor' } })

// Submit
fireEvent.submit(form)
```

### Matchers
```javascript
// Jest matchers
expect(element).toBeDefined()
expect(element).toEqual(value)
expect(element).toBe(value)
expect(element).toContain(item)
expect(array).toHaveLength(3)
expect(func).toHaveBeenCalled()
expect(func).toHaveBeenCalledWith(arg)
expect(array).toHaveLength(2)

// Testing Library matchers
expect(element).toBeInTheDocument()
expect(element).toBeVisible()
expect(element).toHaveClass('class-name')
expect(element).toHaveAttribute('href')
expect(button).toBeDisabled()
expect(button).toBeEnabled()
```

## 📝 Ejemplos de Tests

### Test de Componente Simple
```javascript
test('debe mostrar nombre de usuario', () => {
  render(<UserCard name="Juan" />)
  expect(screen.getByText('Juan')).toBeInTheDocument()
})
```

### Test de Evento
```javascript
test('debe hacer click en botón', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Clickear</Button>)
  
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalled()
})
```

### Test Asincrónico
```javascript
test('debe cargar datos', async () => {
  render(<UserList />)
  
  // Espera a que aparezca elemento
  const user = await screen.findByText('Juan')
  expect(user).toBeInTheDocument()
})
```

### Test de Props Condicionales
```javascript
test('debe mostrar botón solo si está habilitado', () => {
  const { rerender } = render(<Button disabled />)
  expect(screen.getByRole('button')).toBeDisabled()
  
  rerender(<Button disabled={false} />)
  expect(screen.getByRole('button')).toBeEnabled()
})
```

### Test de Mocks
```javascript
test('debe llamar función con parámetros', () => {
  const mockFn = jest.fn()
  
  mockFn('arg1', 'arg2')
  
  expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2')
  expect(mockFn).toHaveBeenCalledTimes(1)
})
```

## 🧠 Best Practices

### ✅ Hacer
```javascript
// Descriptivo
test('debe mostrar mensaje de error cuando email es inválido', () => {
  // ...
})

// Una cosa por test
test('debe validar email', () => {
  expect(isValidEmail('test@test.com')).toBe(true)
})

// Usar data-testid para elementos difíciles de encontrar
render(<Component data-testid="my-element" />)
screen.getByTestId('my-element')

// Usar jest.fn() para mocks
const mock = jest.fn()
```

### ❌ No Hacer
```javascript
// Genérico
test('debe funcionar', () => { })

// Múltiples assertions no relacionadas
test('test', () => {
  expect(a).toBe(1)
  expect(b).toBe(2)
  expect(c).toBe(3)  // Demasiado
})

// Usar setTimeout
test('debe cargar', (done) => {
  setTimeout(() => done(), 100) // Usa findBy en su lugar
})

// Violar la privacidad del componente
test('accedo al estado', () => {
  component.state.value // No hagas esto
})
```

## 📊 Cobertura de Código

### Generar reporte
```bash
npm run test:coverage
```

### Tipos de Cobertura
- **Statements**: % de líneas ejecutadas
- **Branches**: % de ramificaciones (if/else) ejecutadas
- **Functions**: % de funciones ejecutadas
- **Lines**: % de líneas ejecutadas

### Objetivo
```
Mínimo recomendado: 70%
Bueno: 80%+
Excelente: 90%+
```

## 🐛 Debugging

### Ver qué se renderiza
```javascript
const { debug } = render(<Component />)
debug() // Imprime el DOM
```

### Pausar ejecución
```javascript
test('debug', (done) => {
  render(<Component />)
  debugger // Presionar F12 en developer tools
  done()
})
```

### Logs en assertiones
```javascript
const element = screen.getByText(/texto/)
console.log(element.innerHTML)
```

## ✨ Tips Profesionales

1. **Nombre descriptivo**: Tu test debe describir qué prueba
2. **Aislamiento**: Cada test debe ser independiente
3. **Setup/Teardown**: Usa `beforeEach()` / `afterEach()`
4. **Mocking**: Mockea APIs externas y dependencias
5. **Fixtures**: Usa datos de prueba consistentes
6. **Async**: Usa `async/await` con `findBy`
7. **Queries**: Prefiere `getByRole`, luego `getByLabel`, luego `getByText`

## 🚀 Próximas Funcionalidades

- [ ] Tests de integración (flujo E2E)
- [ ] Tests visual regression
- [ ] Performance testing
- [ ] Accessibility testing (a11y)
- [ ] Snapshot testing
- [ ] Mock Service Worker (MSW)

## 📚 Recursos Externos

- [Jest Documentation](https://jestjs.io/)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## ❓ FAQ

**P: ¿Cuántos tests necesito?**
R: Apunta a 70-80% cobertura. Calidad sobre cantidad.

**P: ¿Debo testear componentes internos?**
R: Testea comportamiento, no implementación.

**P: ¿Jest es lento?**
R: Usa `--watchAll=false` o `--bail` para acelerar.

**P: ¿Cómo testeo localStorage?**
R: Mockea `window.localStorage` con `jest.spyOn`.

**P: ¿Necesito snapshots?**
R: Solo para componentes que cambian raramente.

---

**Guía Creada**: Febrero 2026  
**Versión**: 1.0  
**Mantenedor**: DAM Team
