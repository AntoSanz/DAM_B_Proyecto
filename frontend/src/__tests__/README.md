# 🧪 Carpeta de Tests - src/__tests__

Esta carpeta contiene todos los tests automáticos del proyecto Game Store.

## 📋 Estructura

```
__tests__/
├── __mocks__/              # Mocks de archivos y datos
│   └── fileMock.js        # Mock para archivos (imágenes, etc.)
├── SectionCard.test.jsx   # Tests del componente SectionCard (9 tests)
├── Breadcrumb.test.jsx    # Tests del componente Breadcrumb (7 tests)
├── NavBar.test.jsx        # Tests del componente NavBar (9 tests)
├── ProductDetailScreen.test.jsx  # Tests de detalle de producto (16 tests)
├── api.test.js            # Tests de la API mock (14 tests)
├── i18n.test.js           # Tests del sistema de traducción (12 tests)
└── MainContent.test.jsx   # Tests de navegación y orquestación (7 tests)
```

## 🚀 Cómo Ejecutar los Tests

### Instalar dependencias de testing
```bash
npm install
```

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests en modo watch (vuelve a correr al cambiar archivos)
```bash
npm run test:watch
```

### Ver cobertura de código
```bash
npm run test:coverage
```

## 📊 Resumen de Tests

| Archivo | Tests | Descripción |
|---------|-------|------------|
| **SectionCard.test.jsx** | 9 | Tarjeta reutilizable con título, texto, botón |
| **Breadcrumb.test.jsx** | 7 | Navegación con migas de pan interactivas |
| **NavBar.test.jsx** | 9 | Barra de navegación fija responsive |
| **ProductDetailScreen.test.jsx** | 16 | Pantalla de detalle de producto |
| **api.test.js** | 14 | Mock API con latencia y filtrado |
| **i18n.test.js** | 12 | Sistema de internacionalización |
| **MainContent.test.jsx** | 7 | Orquestación de estado y navegación |
| **TOTAL** | **Ver `npm test`** | Total dinámico según suites actuales |

## 🔍 Archivos de Configuración

### vitest.config.js
Configuración principal de Vitest:
- Entorno: jsdom (simula navegador)
- Patterns: encuentra archivos `*.test.js` y `*.test.jsx`
- Coverage: reporte con V8

### vitest.setup.js
Configuración previa a los tests:
- Importa matchers de Testing Library
- Mock de `window.matchMedia`
- Setup global

## ✅ Qué se Testea

### Componentes
- ✅ Renderizado correcto
- ✅ Props personalizados
- ✅ Eventos y callbacks
- ✅ Clases CSS
- ✅ Estructura DOM

### API (14 tests)
- ✅ Retorno de datos correcto
- ✅ Latencia simulada
- ✅ Filtrado por categoría
- ✅ Estructura de datos
- ✅ Manejo de errores

### i18n (12 tests)
- ✅ Obtención de traducciones
- ✅ Cambio de idioma
- ✅ Acceso anidado
- ✅ Manejo de claves inválidas
- ✅ Consistencia de datos

## 📝 Ejemplo de Test

```javascript
// Test simple
test('debe mostrar el título correcto', () => {
  render(<SectionCard title="Mi Título" />)
  expect(screen.getByText('Mi Título')).toBeInTheDocument()
})

// Test con eventos
test('debe ejecutar callback al clickear', () => {
  const mock = vi.fn()
  render(<SectionCard onCta={mock} ctaText="Clickear" />)
  
  const button = screen.getByRole('button')
  fireEvent.click(button)
  
  expect(mock).toHaveBeenCalled()
})

// Test async (API)
test('debe obtener categorías', async () => {
  const categories = await getCategories({ delayMs: 0 })
  expect(categories.length).toBeGreaterThan(0)
})
```

## 🛠️ Herramientas Utilizadas

- **Vitest**: Framework de testing
- **@testing-library/react**: Utilidades para testing de React
- **@testing-library/jest-dom**: Matchers personalizados
- **V8 Coverage**: Reportes de cobertura integrados con Vitest

## 📈 Cobertura

Ejecuta `npm run test:coverage` para ver un reporte detallado:

```
File                        | % Stmts | % Branch | % Funcs | % Lines
----------------------------|---------|----------|---------|----------
All files                   | 50+     | 50+      | 50+     | 50+
```

## 🐛 Debugging de Tests

### Ver logs en tests
Descomenta en `vitest.setup.js`:
```javascript
console.log('Mi variable:', valor)
```

### Ejecutar solo un test
```bash
npm test -- --testNamePattern="nombre del test"
```

### Ejecutar solo un archivo
```bash
npm test SectionCard.test.jsx
```

### Modo watch interactivo
```bash
npm run test:watch
# Presiona 'a' para ejecutar todos
# Presiona 'o' para ejecutar solo cambios
# Presiona 'p' para filtrar archivos
```

## 📞 Preguntas Comunes

**P: ¿Por qué algunos tests usan `vi.fn()`?**
R: En este proyecto se usa `vi.fn()` (Vitest) para crear funciones mock que registran si fueron llamadas y con qué parámetros.

**P: ¿Qué es `screen.getByText()`?**
R: Una función que busca elementos por texto visible en la pantalla.

**P: ¿Por qué `delayMs: 0` en tests de API?**
R: Para que los tests no esperen 300ms innecesariamente. En producción usa 300ms.

**P: ¿Cómo testeo eventos de usuario?**
R: Usa `fireEvent.click()`, `fireEvent.change()`, etc.

## ✨ Tips útiles

1. **Tests descriptivos**: Usa `test('debe...')` para claridad
2. **AAA Pattern**: Arrange, Act, Assert
3. **Un assert principal**: Cada test debe probar una cosa
4. **Mocks**: Usa `vi.fn()` para callbacks
5. **Coverage**: Apunta a 80%+ cobertura

## 🔮 Future Testing

Componentes sin test unitario dedicado actualmente:
- [ ] Tests para CategoriesList
- [ ] Tests para ProductsList
- [ ] Tests para ProductDetailModal
- [ ] Tests para Index
- [ ] Tests para App

Otros pendientes:
- [ ] Tests de integración (flujo completo)
- [ ] Tests de useEffect y hooks
- [ ] Tests de casos límite (edge cases)
- [ ] Tests de accesibilidad (a11y)

---

**Creado**: Febrero 2026  
**Versión**: 1.0  
**Última actualización**: Febrero 2026
