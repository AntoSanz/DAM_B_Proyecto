# Pull Request Checklist

## 📋 Descripción
<!-- Describe brevemente los cambios realizados en esta PR -->

## ✅ Checklist de Verificación

### 🔧 Instalación y Dependencias
- [ ] Los componentes se descargan correctamente con `npm i`
- [ ] No hay errores de dependencias ni conflictos de versiones
- [ ] Se han actualizado las dependencias necesarias en `package.json`

### 🚀 Ejecución de la Aplicación
- [ ] La aplicación se lanza correctamente con `npm run dev`
- [ ] No hay errores en la consola al iniciar
- [ ] La aplicación es accesible en el navegador

### 🧪 Testing y Cobertura
- [ ] Los tests se ejecutan correctamente con `npm run test:coverage`
- [ ] La cobertura de código es **mayor al 80%**
- [ ] Todos los tests existentes pasan correctamente
- [ ] Se han añadido tests para las nuevas funcionalidades
- [ ] Se han actualizado los tests afectados por los cambios

### 📝 Código y Estándares
- [ ] El código sigue las convenciones del proyecto
- [ ] No hay errores de linting
- [ ] Se han eliminado console.logs y código comentado innecesario
- [ ] Las funciones y variables tienen nombres descriptivos
- [ ] El código está debidamente documentado (comentarios donde sea necesario)

### 🎨 Funcionalidad
- [ ] La funcionalidad implementada cumple con los requisitos
- [ ] Se ha probado manualmente en diferentes escenarios
- [ ] Se han contemplado casos de error y estados de carga
- [ ] La interfaz es responsive (si aplica)

### 📚 Documentación
- [ ] Se ha actualizado el README si es necesario
- [ ] Se ha documentado cualquier cambio en la API o configuración
- [ ] Se han añadido comentarios JSDoc si es necesario

### 🔍 Revisión de Código
- [ ] El código ha sido auto-revisado antes de solicitar review
- [ ] No hay conflictos con la rama base
- [ ] Los commits tienen mensajes descriptivos
- [ ] Se ha mantenido el código DRY (Don't Repeat Yourself)

### 🔒 Seguridad (si aplica)
- [ ] No se han expuesto credenciales o información sensible
- [ ] Se han validado los inputs del usuario
- [ ] Se han contemplado posibles vulnerabilidades

## 📸 Capturas de Pantalla (si aplica)
<!-- Añade capturas de pantalla si hay cambios visuales -->

## 🔗 Issues Relacionadas
<!-- Menciona las issues que resuelve esta PR: Closes #123 -->

## 📌 Notas Adicionales
<!-- Cualquier información adicional relevante para los revisores -->

---

**Criterios de Aceptación Mínimos:**
- ✅ `npm i` ejecuta sin errores
- ✅ `npm run dev` inicia la aplicación correctamente
- ✅ `npm run test:coverage` pasa con cobertura > 80%