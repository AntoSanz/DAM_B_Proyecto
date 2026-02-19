# ⚡ QUICK START - Guía Rápida de Comandos

Referencia rápida de los comandos más útiles para trabajar con el proyecto Game Store.

---

## 📦 Instalación de Componentes

### Instalar todas las dependencias
```bash
npm install
```

### Instalar todas las dependencias con legacy peer deps (evita conflictos)
```bash
npm install --legacy-peer-deps
```

### Instalar una dependencia específica
```bash
npm install nombre-del-paquete
```

### Instalar como dependencia de desarrollo
```bash
npm install --save-dev nombre-del-paquete
```

### Desinstalar una dependencia
```bash
npm uninstall nombre-del-paquete
```

---

## 🚀 Ejecutar React (Desarrollo)

### Iniciar servidor de desarrollo
```bash
npm run dev
```
- Abre automáticamente en `http://localhost:5173`
- Hot Reload activado (los cambios se ven instantáneamente)
- Presiona `Ctrl+C` para detener

### Iniciar Frontend + Backend con un solo comando
```bash
npm run dev:full
```
- Levanta backend en `http://localhost:3000`
- Levanta frontend en `http://localhost:5173`

### Iniciar Frontend + Backend desde la raíz del repo
```bash
npm run dev:full
```
- Ejecutar este comando desde `DAM_B_Proyecto/` una vez creado el `package.json` de raíz

### Compilar para producción
```bash
npm run build
```
- Genera carpeta `dist/` optimizada
- Listo para deploy

### Previsualizar build de producción
```bash
npm run preview
```
- Muestra cómo se ve en producción antes de deployar

---

## 🧪 Ejecutar Tests

### Ejecutar tests una sola vez
```bash
npm test
```
- Ejecuta todos los tests en modo no-interactivo
- Muestra resumen: Tests pasados/fallados
- Ideal para CI/CD

### Ejecutar tests en modo watch
```bash
npm run test:watch
```
- Re-ejecuta tests automáticamente al guardar cambios
- Modo interactivo, presiona `q` para salir
- Perfecto para desarrollo

### Ejecutar un archivo de test específico
```bash
npm test -- SectionCard.test.jsx
```

### Ejecutar tests que coincidan con un patrón
```bash
npm test -- --testNamePattern="debe renderizar"
```

---

## 📊 Cobertura de Tests

### Ver reporte de cobertura
```bash
npm run test:coverage
```
- Muestra porcentaje de statements, branches, functions y líneas
- Genera carpeta `coverage/` con report HTML detallado
- Abre `coverage/index.html` en navegador para análisis interactivo

### Ver interfaz gráfica de tests
```bash
npm run test:ui
```
- Panel interactivo para ver resultados de tests
- Información visual de cada test
- Muy útil para debugging

---

## 🔧 Otros Comandos Útiles

### Linter (verificar código)
```bash
npm run lint
```
- Verifica code style y errores
- Basado en ESLint

---

## 🌳 Comandos Git (Básicos)

### Clonar un repositorio
```bash
git clone https://github.com/usuario/repositorio.git
```

### Ver estado del repositorio
```bash
git status
```
- Muestra archivos modificados, sin rastrear, staged

### Ver historial de commits
```bash
git log
```
- Mostrará últimos commits
- Presiona `q` para salir
- Variantes útiles:
  ```bash
  git log --oneline              # Resumen de una línea
  git log --graph --all --decorate --oneline  # Gráfico visual
  ```

### Agregar cambios al staging
```bash
git add .
```
- Añade todos los cambios
- Variantes:
  ```bash
  git add archivo.js             # Un archivo específico
  git add src/                   # Una carpeta específica
  ```

### Ver diff de cambios
```bash
git diff
```
- Muestra qué cambió (antes de hacer commit)
- `git diff --staged` para cambios en staging

### Crear un commit
```bash
git commit -m "Descripción clara de cambios"
```
- Ejemplo: `git commit -m "Agregar componente SectionCard"`
- Mensajes claros ayudan a otros a entender el proyecto

### Enviar commits al servidor
```bash
git push origin main
```
- Sube cambios a GitHub
- `origin` = servidor remoto
- `main` = rama principal

### Recibir cambios del servidor
```bash
git pull origin main
```
- Descarga cambios hechos por otros
- Equivalente a `fetch` + `merge`

### Ver ramas disponibles
```bash
git branch
```
- Muestra ramas locales
- `git branch -a` para incluir remotas

### Crear nueva rama
```bash
git branch nombre-rama
```

### Cambiar de rama
```bash
git checkout nombre-rama
```
- Combinado: `git checkout -b nombre-rama` crea y cambia

### Fusionar una rama
```bash
git merge nombre-rama
```
- Fusiona cambios de otra rama en la actual

### Deletar una rama
```bash
git branch -d nombre-rama
```

---

## 📋 Flujo Típico de Trabajo

### 1. Comenzar el día
```bash
git pull origin main          # Traer últimos cambios
npm install                    # Actualizar dependencias
npm run dev                    # Iniciar servidor
```

### 2. Crear nueva feature
```bash
git checkout -b feature/mi-feature     # Crear rama
# Hacer cambios...
npm test                               # Verificar tests
git add .                              # Preparar cambios
git commit -m "Agregar mi-feature"     # Guardar
git push origin feature/mi-feature     # Enviar
```

### 3. Sindicalizar cambios antes de push
```bash
git pull origin main           # Traer cambios recientes
git merge main                 # Fusionar (si hay conflictos)
git push origin mi-rama        # Enviar
```

### 4. Ver cambios antes de commit
```bash
git status                     # Ver qué cambió
git diff archivo.js            # Ver cambios específicos
git add archivo.js             # Preparar uno por uno
git commit -m "Mensaje claro"  # Guardar
```

---

## 💡 Consejos Prácticos

### Alias útiles (añadir a `.bashrc` o `.zshrc`)
```bash
alias gs='git status'
alias gl='git log --oneline'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gpl='git pull'
```

### Ver último commit que hicimos
```bash
git log -1
```

### Deshacer cambios locales (destructivo ⚠️)
```bash
git checkout -- archivo.js     # Revertir un archivo
git reset --hard               # Revertir todos (perderá cambios)
```

### Cambiar mensaje del último commit
```bash
git commit --amend -m "Nuevo mensaje"
```

### Ver diferencia entre ramas
```bash
git diff rama1 rama2
```

---

## 📱 Flujo Rápido de Referencia

| Tarea | Comando |
|-------|---------|
| Instalar | `npm install` |
| Desarrollar | `npm run dev` |
| Tests | `npm test` |
| Tests watch | `npm run test:watch` |
| Cobertura | `npm run test:coverage` |
| Build | `npm run build` |
| Git status | `git status` |
| Git commit | `git add . && git commit -m "msg"` |
| Git push | `git push origin rama` |
| Git pull | `git pull origin main` |

---

**¡Listo para trabajar! 🚀**

Para más detalles, consulta:
- [README.md](./README.md) - Documentación completa
- [TESTING_GUIDE.md](./TESTING_GUIDE.md) - Guía de testing avanzada
- [DOCUMENTATION_TEMPLATE.md](./DOCUMENTATION_TEMPLATE.md) - Template de docs
