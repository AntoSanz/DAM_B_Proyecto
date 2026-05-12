# Guia rapida de tests (primera vez)

Esta guia explica como ejecutar los tests del proyecto paso a paso desde cero.

## 1) Requisitos previos

- Tener instalado Node.js 18 o superior.
- Tener npm disponible (`npm -v`).

## 2) Descargar y entrar al proyecto

```bash
git clone <URL_DEL_REPO>
cd DAM_B_Proyecto
```

## 3) Instalar dependencias

Instala frontend y backend con un solo comando:

```bash
npm run install:all
```

## 4) Preparar base de datos (recomendado antes de tests)

```bash
npm run db:bootstrap
```

Si necesitas reiniciar datos:

```bash
npm run db:reset
npm run db:seed:users
```

## 5) Ejecutar tests de backend

Desde la raiz del proyecto:

```bash
npm run test:back
```

## 6) Ejecutar tests de frontend

Desde la raiz del proyecto:

```bash
npm run test:front
```

## 7) Ejecutar test de integracion front-back

Desde la raiz del proyecto:

```bash
npm run test:integration
```

## 8) Orden recomendado para primera ejecucion

1. `npm run install:all`
2. `npm run db:bootstrap`
3. `npm run test:back`
4. `npm run test:front`
5. `npm run test:integration`

## 9) Problemas comunes

- Error de modulos no encontrados:
  - Ejecuta otra vez `npm run install:all`.
- Error de base de datos o tablas:
  - Ejecuta `npm run db:bootstrap`.
- Fallos por datos sucios:
  - Ejecuta `npm run db:reset` y `npm run db:seed:users`.
