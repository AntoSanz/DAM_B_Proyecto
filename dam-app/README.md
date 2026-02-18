# 🎮 Game Store - Tienda de Juegos

Una aplicación web moderna de e-commerce para la venta de videojuegos, construida con **React**, **Vite** y **Bootstrap 5**.

## 📋 Características Principales

- ✅ **Sistema de categorías**: Navega entre diferentes tipos de juegos (Juegos de Mesa, PC, Xbox, Nintendo, PS5)
- ✅ **Catálogo de productos**: Visualiza productos enriquecidos con información detallada
- ✅ **Vista detallada de productos**: Información completa incluyendo género, desarrollador, jugadores, fecha de lanzamiento, calificación
- ✅ **Navegación intuitiva**: Breadcrumb interactivo para facilitar la navegación
- ✅ **Localización en español**: Toda la interfaz en español (i18n)
- ✅ **Diseño responsivo**: Funciona perfectamente en dispositivos móviles, tablets y desktop
- ✅ **Mock API**: Simula un backend real con latencia de red

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **React** | 18+ | Framework de UI |
| **Vite** | 5+ | Herramienta de build y desarrollo |
| **Bootstrap** | 5 | Framework CSS responsivo |
| **JavaScript (ES6+)** | - | Lenguaje de programación |

## 📁 Estructura del Proyecto

```
dam-app/
├── src/
│   ├── pages/
│   │   ├── Index.jsx              # Página principal
│   │   └── MainContent.jsx        # Orquestador de navegación
│   │
│   ├── components/
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx         # Barra de navegación fija
│   │   │   └── NavBar.css
│   │   │
│   │   ├── Breadcrumb/
│   │   │   ├── Breadcrumb.jsx     # Migas de pan interactivas
│   │   │   └── Breadcrumb.css
│   │   │
│   │   ├── SectionCard/
│   │   │   ├── SectionCard.jsx    # Componente reutilizable de tarjeta
│   │   │   └── SectionCard.css
│   │   │
│   │   ├── CategoriesList/
│   │   │   ├── CategoriesList.jsx # Grid de categorías
│   │   │   └── CategoriesList.css
│   │   │
│   │   ├── ProductsList/
│   │   │   ├── ProductsList.jsx   # Grid de productos
│   │   │   └── ProductsList.css
│   │   │
│   │   └── ProductDetailScreen/
│   │       ├── ProductDetailScreen.jsx  # Vista detallada de producto
│   │       └── ProductDetailScreen.css
│   │
│   ├── locales/
│   │   ├── i18n.js               # Sistema de traducción
│   │   └── es-ES.js              # Diccionario español
│   │
│   ├── mocks/
│   │   ├── api.js                # Mock API con funciones async
│   │   ├── categories.json       # Datos de categorías
│   │   └── products/             # Datos de productos por categoría
│   │       ├── boardGames.json
│   │       ├── pcGames.json
│   │       ├── xboxGames.json
│   │       ├── nintendoGames.json
│   │       └── ps5Games.json
│   │
│   ├── App.jsx                   # Componente raíz
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   ├── index.css                 # Estilos globales
│   └── assets/                   # Imágenes y recursos
│
├── public/                       # Archivos públicos estáticos
├── index.html                    # HTML principal
├── package.json                  # Dependencias y scripts
├── vite.config.js               # Configuración de Vite
├── eslint.config.js             # Configuración de ESLint
└── README.md                     # Este archivo
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- **Node.js** v16 o superior
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd dam-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5174`

4. **Build para producción**
```bash
npm run build
```

## 💡 Cómo Usar

### Vista General de la Aplicación

1. **Página de Inicio**: Muestra todas las categorías de juegos disponibles como tarjetas interactivas
2. **Lista de Productos**: Al seleccionar una categoría, se muestran los productos disponibles
3. **Detalle de Producto**: Accede a información completa del juego seleccionado

### Navegación

- **Navbar Fija**: Accede rápidamente a la página de inicio desde cualquier lugar
- **Breadcrumb**: Visualiza tu ubicación en la jerarquía y navega hacia atrás
- **Botones de Acción**: Cada elemento tiene botones para acceder a opciones relacionadas

## 📊 Estructura de Datos

### Categorías
```json
{
  "id": 1,
  "name": "Juegos de Mesa",
  "description": "Juegos tradicionales y estratégicos"
}
```

### Productos
```json
{
  "id": 1,
  "categoryId": 1,
  "name": "Carcassonne",
  "shortDescription": "Juego de construcción de mapa medieval",
  "longDescription": "Carcassonne es un fascinante juego de construcción...",
  "price": 29.99,
  "image": "url-de-imagen",
  "genre": "Estrategia",
  "developer": "Klaus Teuber",
  "players": "2-5",
  "releaseDate": "2000",
  "rating": 4.5,
  "inStock": true
}
```

## 🌍 Sistema de Localización (i18n)

### Estructura de Traducciones

Las traducciones se encuentran en `src/locales/es-ES.js` organizadas por secciones:

```javascript
{
  brand: { ... },
  nav: { ... },
  welcome: { ... },
  button: { ... },
  products: { ... },
  breadcrumb: { ... }
}
```

### Uso en Componentes

```jsx
import { t } from '../locales/i18n'

// Uso simple
<h1>{t('welcome.title')}</h1>

// Acceso anidado
<p>{t('products.viewButton')}</p>
```

### Cambiar Localización

```javascript
import { setLocale } from '../locales/i18n'

setLocale('es-ES')  // Cambiar a español
// En futuro: setLocale('en-US') para inglés
```

## 🔄 Mock API

El proyecto incluye una mock API en `src/mocks/api.js` que simula un backend real con:

### Funciones Disponibles

#### `getCategories(options)`
Retorna todas las categorías de juegos
```javascript
const categories = await getCategories({ delayMs: 300 })
```

#### `getProductsByCategory(categoryId, options)`
Retorna productos filtrados por categoría (simula búsqueda del servidor)
```javascript
const products = await getProductsByCategory(1, { delayMs: 300 })
```

### Características

- ✅ **Latencia simulada**: Espera 300ms por defecto para simular red
- ✅ **Filtrado del servidor**: Los productos se filtran simulando un backend
- ✅ **Estructura realista**: Retorna promesas como una API real

## 🎨 Componentes Principales

### NavBar
Barra de navegación fija en la parte superior con:
- Logo/marca de la tienda
- Enlaces de navegación centrados
- Responsive menu hamburguesa en móviles

### Breadcrumb
Sistema interactivo de migas de pan que:
- Muestra la ubicación actual
- Permite navegar hacia atrás clickeando
- Se actualiza dinámicamente

### SectionCard
Componente reutilizable de tarjeta que puede:
- Mostrar título, subtítulo y descripción
- Incluir enlaces internos
- Tener un botón de acción personalizado

### CategoriesList
Grid responsivo que:
- Muestra todas las categorías
- Usa Bootstrap grid layout
- Tarjetas con efecto hover

### ProductsList
Grid responsivo que:
- Muestra productos de una categoría específica
- Tarjetas con información resumida
- Botón para ver detalles completos

### ProductDetailScreen
Pantalla completa que:
- Muestra imagen grande del producto
- Información detallada (género, desarrollador, jugadores, etc.)
- Precio prominente
- Botón de acción (Añadir al carrito)

## 🎯 Flujo de Navegación

```
Inicio (Index)
  ↓
Categorías (CategoriesList)
  ↓ [Click en categoría]
Productos (ProductsList)
  ↓ [Click en producto]
Detalle de Producto (ProductDetailScreen)
  ↓ [Click atrás]
Vuelve a Productos
```

## 🔧 Personalización

### Añadir Nueva Categoría

1. Editar `src/mocks/categories.json`
2. Crear archivo de productos en `src/mocks/products/newCategory.json`
3. Actualizar el `categoryProductsMap` en `src/mocks/api.js`

### Cambiar Colores de Bootstrap

Editar los colores en los archivos CSS individuales o agregar variables CSS en `src/index.css`:

```css
:root {
  --bs-primary: #new-color;
  --bs-secondary: #new-color;
  /* ... más variables ... */
}
```

### Traducir a Otro Idioma

1. Crear archivo `src/locales/en-US.js` (o el idioma deseado)
2. Agregar las traducciones
3. Registrar en `src/locales/i18n.js`:
```javascript
const translations = {
  'es-ES': es,
  'en-US': en  // Nuevo idioma
}
```

## 📱 Responsividad

La aplicación es completamente responsiva gracias a:
- **Bootstrap Grid System**: Layout flexible
- **Media Queries**: Ajustes CSS para diferentes tamaños
- **Navbar Responsive**: Menú hamburguesa en móviles
- **Componentes Adaptables**: Se redimensionan según pantalla

### Puntos de Quiebre

- **Extra pequeño**: < 576px (Móviles)
- **Pequeño**: ≥ 576px (Móviles grandes)
- **Mediano**: ≥ 768px (Tablets)
- **Grande**: ≥ 992px (Desktops)
- **Extra grande**: ≥ 1200px (Desktops grandes)

## 🧪 Testing

El proyecto incluye una **suite de tests completa** con **67 tests** que cubren:

### Cobertura de Tests

- ✅ **100% Statement Coverage**: Todas las líneas se ejecutan
- ✅ **100% Function Coverage**: Todas las funciones se prueban
- ✅ **96.36% Branch Coverage**: La mayoría de condiciones se cubren
- ✅ **6 Test Files**: Cobertura de componentes, API e i18n

### Ejecutar Tests

```bash
# Ejecutar tests una vez
npm test

# Modo watch (re-ejecuta al cambiar archivos)
npm run test:watch

# Ver cobertura detallada
npm run test:coverage

# Ver interfaz gráfica interactiva
npm run test:ui
```

### Framework de Testing

- **Vitest** (compatible con ES Modules de Vite)
- **React Testing Library** (testea como un usuario)
- **@testing-library/jest-dom** (matchers útiles)

### Test Suites

1. **SectionCard.test.jsx** (9 tests)
   - Renderizado de componentes
   - Props y estado
   - Callbacks y eventos

2. **Breadcrumb.test.jsx** (7 tests)
   - Navegación interactiva
   - Estados de renderización
   - Funciones callback

3. **NavBar.test.jsx** (9 tests)
   - Estructura Bootstrap
   - Responsive design
   - Eventos de click

4. **ProductDetailScreen.test.jsx** (16 tests)
   - Renderizado de datos
   - Estados de producto
   - Disponibilidad de stock

5. **api.test.js** (14 tests)
   - Latencia simulada
   - Filtrado de productos
   - Manejo de categorías

6. **i18n.test.js** (12 tests)
   - Traducción de textos
   - Cambio de idioma
   - Acceso a clave anidadas

Para más detalles, consulta [TESTING_GUIDE.md](./TESTING_GUIDE.md).

## 🚀 Mejoras Futuras

- [ ] Carrito de compras con estado persistente
- [ ] Búsqueda y filtros de productos
- [ ] Sistema de calificaciones y comentarios
- [ ] Favoritos/Wishlist
- [ ] Integración con API real
- [ ] Autenticación y registro de usuarios
- [ ] Historial de pedidos
- [ ] Múltiples idiomas (soporte en i18n)
- [ ] Tema oscuro
- [ ] Análisis y seguimiento

## 📄 Documentación del Código

Todo el código incluye comentarios en español explicando:
- Propósito de cada componente
- Parámetros y props esperados
- Lógica de funciones
- Decisiones de diseño

Para entender mejor un componente específico, consulta el archivo correspondiente donde encontrarás documentación detallada.

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Eliminar node_modules y reinstalar
rm -r node_modules
npm install
npm run dev
```

### Los estilos no se aplican
- Asegúrate de que Bootstrap está importado en `src/main.jsx`
- Verifica que los archivos CSS están importados en los componentes
- Limpia la caché del navegador (Ctrl+Shift+Delete)

### No se muestran las imágenes
- Verifica que las URLs en los archivos JSON de productos es correctas
- Asegúrate de que las imágenes están en `src/assets/` o son URLs válidas

## 📝 Notas de Desarrollo

- **Estado**: La aplicación usa React Hooks (useState) para gestionar el estado
- **No se usa Redux**: Para este proyecto, el estado es simple y se maneja localmente
- **CSS**: Se prefiere Bootstrap utilities sobre CSS personalizado
- **Componentes**: Cada componente está en su propia carpeta con JSX y CSS separados

## 🤝 Contribuir

Para contribuir al proyecto:

1. Hacer un fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto, contacta al equipo de desarrollo.

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Última actualización**: Febrero 2026  
**Versión**: 1.0.0  
**Estado**: ✅ Producción lista
