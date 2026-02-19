# 📋 Plantilla de Documentación - Esquema README

> **INSTRUCCIONES**: Esta es una plantilla estándar para generar documentación del README. 
> Cuando solicites "genera documentación" o "crea el README", usa este esquema como base.
> Personaliza el contenido según el proyecto específico manteniendo esta estructura.

---

## 🎯 Estructura Obligatoria del README

Sigue este orden exacto para toda documentación:

### 1. ✅ **Descripción del Proyecto**
- Título principal con emoji relevante
- Descripción breve de qué es el proyecto
- Lista de características principales con checkboxes

**Ejemplo:**
```markdown
# 🎮 Game Store - Tienda de Juegos

Una aplicación web moderna de e-commerce para la venta de videojuegos, 
construida con **React**, **Vite** y **Bootstrap 5**.

## 📋 Características Principales

- ✅ Característica 1
- ✅ Característica 2
- ✅ Característica 3
```

---

### 2. ✅ **Tecnologías Utilizadas**
- Tabla con columnas: Tecnología | Versión | Propósito
- Incluir las herramientas, frameworks y librerías principales
- Ser específico con versiones

**Ejemplo:**
```markdown
## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **React** | 18+ | Framework de UI |
| **Vite** | 5+ | Herramienta de build |
| **Bootstrap** | 5 | Framework CSS |
```

---

### 3. ✅ **Estructura del Proyecto**
- Árbol de carpetas visualmente claro
- Explicación breve de carpetas principales
- Incluir archivos importantes (config, entry point, etc.)

**Ejemplo:**
```markdown
## 📁 Estructura del Proyecto

\`\`\`
dam-app/
├── src/
│   ├── components/
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx    # Descripción
│   │   │   └── NavBar.css
│   ├── pages/
│   ├── mocks/
│   ├── locales/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
\`\`\`
```

---

### 4. ✅ **Instalación y Configuración**
- Requisitos previos (Node.js, npm, etc.)
- Pasos numerados paso a paso
- Comandos exactos con explicación
- Incluir puerto donde se ejecuta el servidor

**Ejemplo:**
```markdown
## 🚀 Instalación y Configuración

### Requisitos Previos
- **Node.js** v16 o superior
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
\`\`\`bash
git clone <url>
cd project-name
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
\`\`\`

3. **Iniciar servidor**
\`\`\`bash
npm run dev
\`\`\`

Disponible en: \`http://localhost:PORT\`

4. **Build para producción**
\`\`\`bash
npm run build
\`\`\`
```

---

### 5. ✅ **Cómo Usar**
- Vista general de cómo funciona la aplicación
- Guía paso a paso del flujo principal
- Explicación de elementos clave de la interfaz

**Ejemplo:**
```markdown
## 💡 Cómo Usar

### Vista General

1. **Página de Inicio**: Descripción
2. **Sección 2**: Descripción
3. **Sección 3**: Descripción

### Navegación

- **Elemento 1**: Explicación
- **Elemento 2**: Explicación
- **Elemento 3**: Explicación
```

---

### 6. ✅ **Estructura de Datos**
- Modelos de datos principales (JSON schemas)
- Ejemplos de objetos con campos
- Explicación de cada campo importante

**Ejemplo:**
```markdown
## 📊 Estructura de Datos

### Entidad Principal
\`\`\`json
{
  "id": 1,
  "name": "Nombre",
  "description": "Descripción",
  "field1": "value1",
  "field2": "value2"
}
\`\`\`

### Entidad Secundaria
\`\`\`json
{
  "id": 1,
  "name": "Nombre",
  "relatedId": 1
}
\`\`\`
```

---

### 7. ✅ **Sistema i18n / Localización** (si aplica)
- Cómo está organizado el sistema de traducciones
- Estructura de archivos de idiomas
- Ejemplos de uso en componentes
- Cómo cambiar de idioma
- Cómo agregar nuevo idioma

**Ejemplo:**
```markdown
## 🌍 Sistema de Localización (i18n)

### Estructura
- Archivo principal: \`src/locales/i18n.js\`
- Traducciones para cada idioma: \`src/locales/[idioma].js\`

### Uso en Componentes
\`\`\`jsx
import { t } from '../locales/i18n'
<h1>{t('key.path')}</h1>
\`\`\`

### Cambiar Idioma
\`\`\`javascript
import { setLocale } from '../locales/i18n'
setLocale('es-ES')
\`\`\`

### Agregar Nuevo Idioma
1. Crear \`src/locales/[idioma].js\`
2. Registrar en \`i18n.js\`
```

---

### 8. ✅ **Mock API / API Integration** (si aplica)
- Ubicación de APIs/mocks
- Funciones disponibles con parámetros
- Ejemplos de uso
- Características principales
- Cómo conectar a API real en el futuro

**Ejemplo:**
```markdown
## 🔄 Mock API

### Ubicación
\`src/mocks/api.js\`

### Funciones Disponibles

#### getFunction(params)
Descripción detallada
\`\`\`javascript
const result = await getFunction({ param1, param2 })
\`\`\`

### Características
- ✅ Característica 1
- ✅ Característica 2
```

---

### 9. ✅ **Componentes Principales**
- Lista de componentes clave
- Qué hace cada componente
- Props/parámetros principales
- Ubicación del archivo

**Ejemplo:**
```markdown
## 🎨 Componentes Principales

### ComponenteName
**Ubicación**: \`src/components/ComponenteName/\`

**Descripción**: Breve explicación de qué hace

**Props principales**:
- \`prop1\` (type): Descripción
- \`prop2\` (type): Descripción

**Características**:
- Feature 1
- Feature 2
```

---

### 10. ✅ **Flujo de Navegación**
- Diagrama visual del flujo
- Relación entre pantallas/componentes
- Decisiones de usuario y cómo se reflejan

**Ejemplo:**
```markdown
## 🎯 Flujo de Navegación

\`\`\`
Inicio
  ↓
Sección 2
  ↓ [Acción]
Sección 3
  ↓ [Acción]
Detalle
  ↓ [Atrás]
Vuelve a anterior
\`\`\`
```

---

### 11. ✅ **Personalización**
- Cómo modificar configuraciones
- Cómo adicionar nuevos elementos (categorías, idiomas, etc.)
- Cómo cambiar estilos/colores
- Ejemplos concretos

**Ejemplo:**
```markdown
## 🔧 Personalización

### Cambiar Colores
\`\`\`css
:root {
  --color-primary: #new-color;
}
\`\`\`

### Agregar Nueva Categoría
1. Paso 1
2. Paso 2
3. Paso 3

### Traducir a Otro Idioma
[Instrucciones detalladas]
```

---

### 12. ✅ **Responsividad**
- Cómo se logra la responsividad
- Herramientas/frameworks usados
- Puntos de quiebre (breakpoints)
- Pruebas realizadas

**Ejemplo:**
```markdown
## 📱 Responsividad

La aplicación es totalmente responsiva gracias a:
- Bootstrap Grid System
- Media Queries CSS
- Componentes adaptables

### Puntos de Quiebre
- Extra pequeño: < 576px (Móviles)
- Pequeño: ≥ 576px
- Mediano: ≥ 768px (Tablets)
- Grande: ≥ 992px (Desktops)
- Extra grande: ≥ 1200px
```

---

### 13. ✅ **Mejoras Futuras**
- Funcionalidades planeadas o en desarrollo
- Wishlist de features
- Mejoras técnicas pendientes
- Usar checkboxes vacíos para marcar progreso

**Ejemplo:**
```markdown
## 🚀 Mejoras Futuras

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
- [ ] Mejora técnica 1
- [ ] Mejora técnica 2
```

---

### 14. ✅ **Solución de Problemas**
- Errores comunes con soluciones
- Debugging tips
- Checklist de verificación
- Cómo reportar bugs

**Ejemplo:**
```markdown
## 🐛 Solución de Problemas

### El servidor no inicia
\`\`\`bash
rm -r node_modules
npm install
npm run dev
\`\`\`

### Los estilos no se aplican
- Verifica que los imports son correctos
- Limpia el caché del navegador
- Reinicia el servidor

### Otros Problemas
[Soluciones específicas]
```

---

### 15. ✅ **Notas de Desarrollo**
- Decisiones técnicas importantes
- Patrones utilizados
- Convenciones de código
- Limitaciones o consideraciones

**Ejemplo:**
```markdown
## 📝 Notas de Desarrollo

- **Estado**: Se usa React Hooks (useState)
- **CSS**: Se prefiere Bootstrap utilities
- **Componentes**: Cada componente en su carpeta
- **No se usa Redux**: El estado es simple y local
```

---

### 16. ✅ **Contribuciones**
- Cómo contribuir al proyecto
- Pasos para hacer un fork/PR
- Convenciones de commits
- Proceso de review

**Ejemplo:**
```markdown
## 🤝 Contribuir

1. Hacer un fork
2. Crear rama (\`git checkout -b feature/AmazingFeature\`)
3. Commit (\`git commit -m 'Add AmazingFeature'\`)
4. Push (\`git push origin feature/AmazingFeature\`)
5. Abrir Pull Request

### Convenciones
- Commits descriptivos
- Testear cambios localmente
- Actualizar documentación
```

---

### 17. ✅ **Pie de Página**
- Contacto/información de autor
- Licencia
- Fecha de actualización
- Versión del proyecto
- Estado actual (en desarrollo, producción, etc.)

**Ejemplo:**
```markdown
## 📞 Contacto

Para preguntas o sugerencias: [email/enlace]

## 📜 Licencia

MIT License - Consulta \`LICENSE\` para detalles

---

**Última actualización**: Febrero 2026  
**Versión**: 1.0.0  
**Estado**: ✅ Producción lista
```

---

## 🎨 Directrices de Formato

### Emojis Recomendados por Sección
```
📋 - Características, listas generales
🛠️  - Tecnologías, herramientas
📁 - Estructura de carpetas
🚀 - Instalación, configuración, deployment
💡 - Cómo usar, guías
📊 - Datos, estruturas
🌍 - Internacionalización, localización
🔄 - APIs, async, integración
🎨 - Componentes, UI
🎯 - Flujo, navegación
🔧 - Personalización, configuración
📱 - Responsividad, mobile
🚀 - Futuro, mejoras
🐛 - Problemas, debugging
📝 - Notas, información
🤝 - Contribuciones
📞 - Contacto
📜 - Licencia
✅ - Completado, listo
```

### Elementos de Formato
- **Títulos H2** para secciones principales (`##`)
- **Títulos H3** para subsecciones (`###`)
- **Bold** para términos importantes: `**término**`
- **Código inline** para archivos/rutas: `` `src/file.js` ``
- **Bloques de código** para ejemplos:
  ```markdown
  \`\`\`language
  code here
  \`\`\`
  ```
- **Tablas** para comparar tecnologías o datos
- **Listas con checkboxes** para features:
  ```markdown
  - ✅ Feature completado
  - [ ] Feature futuro
  ```
- **Diagrama ASCII** para flujos simples

### Longitud Recomendada
- Descripciones breves: 1-2 líneas
- Secciones completas: 200-500 palabras
- Ejemplos de código: 5-15 líneas
- README completo: 2,000-4,000 palabras (aprox)

---

## 📌 Checklist para Validar README

Antes de dar por terminada la documentación, verifica:

- [ ] Todas las 16-17 secciones están presentes
- [ ] Hay ejemplos de código en al menos 5 secciones
- [ ] Está completamente en español
- [ ] Los emojis son consistentes y apropiados
- [ ] No hay enlaces rotos ni referencias incompletas
- [ ] La estructura es clara y fácil de escanear
- [ ] Hay una tabla de tecnologías
- [ ] El árbol de carpetas es correcto
- [ ] Hay instrucciones de instalación paso a paso
- [ ] Hay ejemplos de uso real
- [ ] Hay secciones sobre personalización
- [ ] Hay solución de problemas común
- [ ] Hay información de contacto/licencia
- [ ] La fecha de actualización es actual

---

## 🔄 Uso de la Plantilla

Cuando el usuario solicite documentación:

1. **Leer esta plantilla** para recordar el esquema
2. **Usar las 16-17 secciones** como base
3. **Personalizar el contenido** según el proyecto
4. **Mantener el formato y estructura**
5. **Añadir ejemplos específicos** del proyecto
6. **Validar con el checklist** antes de entregar

---

**Creada**: Febrero 2026  
**Versión de Plantilla**: 1.0  
**Aplicable a**: Todos los proyectos del repositorio
