# Tienda Online

**TRABAJO FINAL DEL MÓDULO DE PROYECTO**

- **Antonio Sanz Pans**
- **Lucas Ezequiel Juncos Luque**
- **Daniel Jordá Conde**

---

**Profesor:** Albert Llabres Darder

**Programa:** Desarrollo de aplicaciones multiplataforma

**Curso:** 2025-2026

---

## ÍNDICE

1. [INTRODUCCIÓN](#introducción)
   - [Motivaciones y Contexto del Proyecto](#motivaciones-y-contexto-del-proyecto)
   - [Descripción del Proyecto](#descripción-del-proyecto)
   - [Funcionalidades Principales](#funcionalidades-principales)
   - [Stack Tecnológico](#stack-tecnológico)
2. [OBJETIVOS](#objetivos)
   - [Objetivos Generales](#objetivos-generales)
   - [Objetivos Específicos](#objetivos-específicos)
3. [ENFOQUE Y METODOLOGÍA](#enfoque-y-metodología)
   - [Enfoque de Desarrollo](#enfoque-de-desarrollo)
   - [Metodología de Trabajo Colaborativo](#metodología-de-trabajo-colaborativo)
   - [Metodología Técnica](#metodología-técnica)
4. [ANÁLISIS DE RIESGOS](#análisis-de-riesgos)
5. [PLANIFICACIÓN TEMPORAL](#planificación-temporal)
   - [Hitos y Distribución del Tiempo](#hitos-y-distribución-del-tiempo)
   - [Diagrama de Gantt](#diagrama-de-gantt)
6. [ANÁLISIS DE REQUISITOS Y CASOS DE USO](#análisis-de-requisitos-y-casos-de-uso)
   - [1. REQUISITOS INICIALES](#1-requisitos-iniciales)
   - [2. CASOS DE USO](#2-casos-de-uso)
   - [3. RELACIONES ENTRE CASOS DE USO](#3-relaciones-entre-casos-de-uso)

---

## INTRODUCCIÓN

### Motivaciones y Contexto del Proyecto

La elección de este tema responde a la necesidad de consolidar una comprensión rigurosa y aplicada del desarrollo de aplicaciones web modernas. En el contexto actual, donde la transformación digital constituye un eje estratégico para cualquier organización, resulta imprescindible que el profesional del ámbito informático adquiera experiencia real en el desarrollo integral de aplicaciones comerciales desde una perspectiva full-stack.

Se ha seleccionado el desarrollo de una tienda online como caso de estudio por tratarse de un entorno realista y técnicamente exigente, que requiere la integración estructurada de múltiples tecnologías y principios de ingeniería de software. Este planteamiento permite abordar de manera simultánea aspectos técnicos fundamentales —como la definición de la arquitectura, el diseño y gestión de bases de datos o el desarrollo de interfaces de usuario— junto con dimensiones organizativas clave, entre ellas el trabajo colaborativo, el control de versiones y la planificación y seguimiento del proyecto.

Asimismo, el desarrollo de este proyecto facilita la aplicación práctica y cohesionada de los conocimientos adquiridos a lo largo del ciclo formativo, situándolos en un escenario que reproduce dinámicas propias de un entorno profesional real. El trabajo en equipo aporta, además, un valor formativo añadido, al favorecer el desarrollo de competencias transversales como la coordinación, la comunicación efectiva y la resolución colaborativa de problemas, esenciales en el ejercicio profesional del desarrollo de software.

### Descripción del Proyecto

El presente trabajo de fin de curso consiste en el desarrollo de una aplicación web que simula el funcionamiento de una tienda online completa. El proyecto abarcará todas las capas fundamentales de una aplicación actual: back-end, front-end y base de datos, garantizando una visión global e integrada del proceso de desarrollo de software moderno.

### Funcionalidades Principales

La aplicación incluirá las siguientes características:

- **Gestión de productos:** Catálogo de productos organizados por categorías, con visualización en listado y vistas de detalle ampliadas
- **Sistema de autenticación:** Login persistente
- **Carrito de compras:** Funcionalidad para almacenar productos seleccionados durante la navegación
- **Simulación de pasarela de pago:** Flujo de compra realista sin transacciones monetarias reales
- **Gestión de usuarios y pedidos:** Almacenamiento persistente de información de clientes y su historial de compras

### Stack Tecnológico

- **Back-end:** Node.js con JavaScript, responsable de la lógica de negocio, gestión de usuarios y comunicación con la base de datos
- **Front-end:** Web Components reutilizables, proporcionando modularidad, mantenimiento y escalabilidad
- **Base de datos:** Sistema relacional SQL para la gestión de productos, usuarios y pedidos
- **Control de versiones:** GitHub con flujo de trabajo basado en ramas y Pull Requests
- **Gestión de tareas:** Tablero Kanban integrado en GitHub Projects

---

## OBJETIVOS

### Objetivos Generales

- Desarrollar una aplicación web funcional que implemente un caso de uso real de comercio electrónico.
- Adquirir experiencia práctica en el desarrollo full-stack utilizando tecnologías actuales.
- Comprender y aplicar metodologías y herramientas utilizadas en entornos profesionales.
- Consolidar la capacidad de trabajo colaborativo en equipo mediante herramientas de desarrollo estándar.

### Objetivos Específicos

- Dominar la creación de arquitecturas backend escalables con Node.js y gestión de bases de datos SQL.
- Desarrollar interfaces de usuario modulares y mantenibles utilizando Web Components.
- Implementar sistemas de autenticación y sesiones de usuario seguros y persistentes.
- Aplicar patrones de desarrollo colaborativo: ramas, Pull Requests y revisión de código.
- Implementar la totalidad del flujo de compra, incluyendo carrito y simulación de pago.
- Optimizar la experiencia de usuario mediante una navegación intuitiva y un diseño coherente.
- Documentar adecuadamente el código y la arquitectura del sistema.

---

## ENFOQUE Y METODOLOGÍA

### Enfoque de Desarrollo

Se adoptará un enfoque ágil e iterativo, dividiendo el proyecto en ciclos de desarrollo cortos (sprints) que permitan la entrega incremental de funcionalidades. Cada sprint se alineará con las entregas programadas en el entorno académico, garantizando una planificación coherente con el calendario establecido.

Esta organización permitirá disponer de mecanismos de retroalimentación temprana, facilitando la detección y corrección de posibles desviaciones, así como la adaptación progresiva a cambios o ajustes en los requisitos definidos. De este modo, se favorece un proceso de desarrollo más controlado, flexible y orientado a la mejora continua.

### Metodología de Trabajo Colaborativo

- **Control de versiones:** Utilización de GitHub con un flujo de ramas (Git Flow) donde la rama "master" permanece estable y los cambios se integran mediante Pull Requests revisadas.
- **Gestión de tareas:** Tablero Kanban en GitHub Projects para visualizar el estado de las tareas (Backlog, Ready, In progress, Done, Discarded).
- **Comunicación:** Reuniones periódicas de sincronización y uso de canales de comunicación asincrónica.
- **Revisión de código:** Cada Pull Request será revisada al menos por un compañero antes de su integración.

### Metodología Técnica

- **Desarrollo modular:** Implementación de componentes independientes y reutilizables en el front-end.
- **Separación de capas:** Distinción clara entre lógica de presentación, lógica de negocio y acceso a datos
- **Testing:** Implementación de pruebas unitarias para las funcionalidades críticas.
- **Documentación:** Generación de documentación técnica clara y accesible para el código y la arquitectura.

---

## ANÁLISIS DE RIESGOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|--------|-----------|
| Limitada experiencia inicial con las tecnologías empleadas | Alta | Alto | Establecer sesiones de formación previas, consultar documentación oficial, aprender durante el desarrollo inicial |
| Descoordinación del equipo por trabajar completamente online | Alta | Alto | Establecer reuniones regulares, definir canales de comunicación claros, crear documentación compartida |
| Incompatibilidades de horarios por responsabilidades laborales y familiares | Media | Medio | Flexibilidad en la planificación, trabajo asincrónico bien documentado, alertas anticipadas de cambios de disponibilidad |
| Conflictos de versión en el control de versiones | Media | Medio | Buenas prácticas de Git, ramas bien organizadas, comunicación antes de cambios importantes |
| Alcance excesivo del proyecto | Media | Medio | Definición clara de funcionalidades mínimas (MVP), priorización de tareas, diferenciación de mejoras opcionales |
| Retrasos en la integración de componentes | Media | Medio | Interfaces bien definidas previamente, testing durante desarrollo, integraciones frecuentes |
| Problemas de rendimiento en la aplicación | Baja | Alto | Análisis de rendimiento temprano, optimización iterativa, monitoreo durante la fase de testing |

---

## PLANIFICACIÓN TEMPORAL

El proyecto se estructurará en las siguientes fases:

| Fase | Duración | Hito |
|------|----------|------|
| Fase 1: Planificación y Diseño | 14 días | Arquitectura definida, base de datos diseñada, equipo configurado |
| Fase 2: Setup Inicial | 7 días | Entorno de desarrollo configurado, repositorio preparado, estructura de proyecto creada |
| Fase 3: Desarrollo Backend (MVP) | 21 días | Diseño de API REST, modelos de datos y lógica de autenticación |
| Fase 4: Desarrollo Frontend (MVP) | 21 días | Componentes principales, navegación, integración con API |
| Fase 5: Integración y Testing | 14 días | Sistema integrado, testing completo, corrección de errores críticos |
| Fase 6: Refinamiento y Mejoras | 14 días | Optimización, mejoras opcionales, corrección de errores documentación final |
| Fase 7: Revisión Final y Entrega | 12 días | Testing final, documentación completa, presentación preparada |

### Hitos y Distribución del Tiempo

Los hitos tendrán asignados unas fechas aproximadas que podrían variar según se desarrolle el proyecto:

| Hito | Inicio | Duración | Fin |
|------|--------|----------|-----|
| Arquitectura y BD definidos | 01/02/2026 | 14 | 14/02/2026 |
| Entorno configurado y GitHub | 15/02/2026 | 7 | 21/02/2026 |
| Backend funcional | 22/02/2026 | 21 | 14/03/2026 |
| Frontend funcional | 15/03/2026 | 21 | 04/04/2026 |
| Integración frontend + backend | 05/04/2026 | 7 | 11/04/2026 |
| Pruebas y testing | 12/04/2026 | 7 | 18/04/2026 |
| Refinamiento de la app | 19/04/2026 | 14 | 02/05/2026 |
| Versión final y documentación | 03/05/2026 | 7 | 09/05/2026 |
| Entrega final | 10/05/2026 | 5 | 14/05/2026 |
| **TOTAL** | | **103** | |

*Fechas aproximadas*

### Diagrama de Gantt

[Diagrama de Gantt - Ver en documento visual]

---

## ANÁLISIS DE REQUISITOS Y CASOS DE USO

### 1. REQUISITOS INICIALES

#### 1.1 Requisitos Funcionales

Los requisitos funcionales definen las funcionalidades específicas que debe cumplir el sistema:

##### 1.1.1 Gestión de Usuarios

- **RF-001:** El sistema debe permitir el registro de nuevos usuarios con validación de datos.
- **RF-002:** El sistema debe permitir la autenticación de usuarios mediante credenciales.
- **RF-003:** El sistema debe permitir la visualización y edición del perfil de usuario.
- **RF-004:** El sistema debe permitir la recuperación de contraseña mediante correo electrónico.
- **RF-005:** El sistema debe permitir la gestión de roles y permisos de usuarios.

##### 1.1.2 Gestión de Datos

- **RF-006:** El sistema debe permitir crear, leer, actualizar y eliminar registros (CRUD).
- **RF-007:** El sistema debe permitir la búsqueda avanzada de registros con múltiples filtros.
- **RF-008:** El sistema debe permitir la exportación de datos en múltiples formatos (CSV, PDF, JSON).
- **RF-009:** El sistema debe permitir la importación de datos desde archivos externos.
- **RF-010:** El sistema debe mantener un registro histórico de cambios en los datos.

##### 1.1.3 Interfaz de Usuario

- **RF-011:** El sistema debe proporcionar una interfaz responsiva compatible con dispositivos móviles y de escritorio.
- **RF-012:** El sistema debe incluir un panel de control (dashboard) con métricas principales.
- **RF-013:** El sistema debe permitir la personalización de la interfaz según preferencias del usuario.
- **RF-014:** El sistema debe proporcionar mensajes claros de retroalimentación en todas las operaciones.

##### 1.1.4 Notificaciones

- **RF-015:** El sistema debe generar notificaciones en tiempo real para eventos importantes.
- **RF-016:** El sistema debe permitir que los usuarios configuren sus preferencias de notificaciones.
- **RF-017:** El sistema debe enviar notificaciones por correo electrónico para eventos críticos.

##### 1.1.5 Seguridad

- **RF-018:** El sistema debe validar todos los datos de entrada contra inyecciones.
- **RF-019:** El sistema debe implementar autenticación de dos factores (2FA) opcional.
- **RF-020:** El sistema debe cifrar datos sensibles tanto en tránsito como en reposo.

#### 1.2 Requisitos No Funcionales

Los requisitos no funcionales definen las características de calidad del sistema:

##### 1.2.1 Disponibilidad y Confiabilidad

- **RNF-001:** El sistema debe tener una disponibilidad mínima del 99.5% mensualmente.
- **RNF-002:** El sistema debe implementar mecanismos de recuperación ante fallos automáticos.
- **RNF-003:** El sistema debe hacer backup de datos al menos una vez al día.
- **RNF-004:** El tiempo de recuperación ante desastres (RTO) no debe exceder 4 horas.

##### 1.2.2 Rendimiento

- **RNF-005:** El tiempo de respuesta de cualquier operación no debe exceder 3 segundos.
- **RNF-006:** La aplicación debe cargar en menos de 2 segundos en conexiones 3G.
- **RNF-007:** El sistema debe soportar al menos 1000 usuarios concurrentes.
- **RNF-008:** Las consultas a base de datos deben completarse en menos de 1 segundo.

##### 1.2.3 Escalabilidad

- **RNF-009:** El sistema debe diseñarse para crecer a 10000 usuarios sin degradación significativa.
- **RNF-010:** La arquitectura debe permitir el escalado horizontal de servidores.
- **RNF-011:** El sistema debe gestionar al menos 10GB de datos sin problemas de rendimiento.

##### 1.2.4 Seguridad

- **RNF-012:** Todos los datos en tránsito deben cifrase con TLS 1.2 o superior.
- **RNF-013:** Las contraseñas deben cumplir una política de complejidad mínima.
- **RNF-014:** El sistema debe registrar todos los accesos y cambios significativos (auditoría).
- **RNF-015:** El sistema debe cumplir con normativas de protección de datos (GDPR, LOPD).

##### 1.2.5 Usabilidad

- **RNF-016:** La interfaz debe ser intuitiva sin necesidad de formación adicional.
- **RNF-017:** El sistema debe estar disponible en múltiples idiomas (mínimo inglés y español).
- **RNF-018:** El tiempo de aprendizaje para nuevos usuarios no debe exceder 30 minutos.
- **RNF-019:** El sistema debe cumplir estándares de accesibilidad WCAG 2.1 nivel AA.

##### 1.2.6 Mantenibilidad

- **RNF-020:** El código debe seguir estándares de buenas prácticas y convenciones establecidas.
- **RNF-021:** La documentación debe mantenerse actualizada con el código.
- **RNF-022:** El sistema debe permitir actualizaciones sin tiempo de inactividad (zero-downtime deployments).

##### 1.2.7 Compatibilidad

- **RNF-023:** El sistema debe ser compatible con los últimos navegadores (Chrome, Firefox, Safari, Edge).
- **RNF-024:** El sistema debe funcionar en dispositivos iOS y Android.
- **RNF-025:** El sistema debe ser compatible con diferentes sistemas operativos (Windows, macOS, Linux).

#### 1.3 Requisitos Técnicos

Los requisitos técnicos especifican la tecnología y arquitectura a utilizar:

##### 1.3.1 Frontend

- **RT-001:** Desarrollo con JavaScript/React como framework principal.
- **RT-002:** Uso de herramientas de construcción (Webpack, Vite) para optimización.
- **RT-003:** Implementación de Redux o Context API para gestión de estado.
- **RT-004:** Uso de librerías de UI (Material-UI, Bootstrap) para consistencia visual.
- **RT-005:** Implementación de CSS responsive y Mobile-First.

##### 1.3.2 Backend

- **RT-006:** Desarrollo con Node.js como entorno de ejecución.
- **RT-007:** Uso de Express.js como framework web.
- **RT-008:** Implementación de APIs RESTful con estándares OpenAPI/Swagger.
- **RT-009:** Uso de autenticación basada en JWT (JSON Web Tokens).
- **RT-010:** Implementación de middleware para validación y seguridad.

##### 1.3.3 Base de Datos

- **RT-011:** SQL como base de datos principal para datos estructurados.
- **RT-012:** Redis para caché y sesiones.
- **RT-013:** Implementación de índices para optimizar consultas.
- **RT-014:** Versionado y migración de esquemas de base de datos.

##### 1.3.4 Infraestructura

- **RT-015:** Despliegue en contenedores Docker.
- **RT-016:** Orquestación con Docker Compose o Kubernetes.
- **RT-017:** CI/CD pipeline con GitHub Actions, Jenkins o GitLab CI.
- **RT-018:** Hosting en cloud (AWS, Azure, Google Cloud) o servidor dedicado.

##### 1.3.5 Testing y Calidad

- **RT-019:** Tests unitarios con Jest o Mocha.
- **RT-020:** Tests de integración para APIs.
- **RT-021:** Tests end-to-end con Cypress o Selenium.
- **RT-022:** Cobertura de código mínima del 80%.
- **RT-023:** Linting y formateado automático con ESLint y Prettier.

##### 1.3.6 Monitoreo y Logging

- **RT-024:** Sistema de logging centralizado (ELK, Splunk, Datadog).
- **RT-025:** Monitoreo de rendimiento (APM) en tiempo real.
- **RT-026:** Alertas configurables para eventos críticos.
- **RT-027:** Trazabilidad de transacciones (correlation IDs).

---

### 2. CASOS DE USO

#### 2.1 Diagrama de Casos de Uso

[Diagrama de Casos de Uso - Ver en documento visual]

#### 2.2 Descripción de Casos de Uso

##### UC-001: Autenticación de Usuario

**Actor Principal:** Usuario no autenticado

**Descripción:** El usuario introduce sus credenciales para acceder al sistema.

**Precondiciones:**
- El usuario debe tener una cuenta registrada en el sistema.
- El sistema debe estar disponible y accesible.

**Flujo Principal:**
1. El usuario accede a la página de login.
2. El usuario introduce su nombre de usuario y contraseña.
3. El sistema valida las credenciales.
4. El sistema genera un token JWT.
5. El sistema redirige al usuario al dashboard principal.
6. El caso de uso finaliza satisfactoriamente.

**Flujos Alternativos:**
- **2a. Credenciales inválidas:** Si las credenciales no son válidas, el sistema muestra un mensaje de error y permanece en la pantalla de login.
- **2b. Cuenta no existe:** Si la cuenta no existe, se sugiere al usuario registrarse.
- **2c. Cuenta desactivada:** Si la cuenta está desactivada, se muestra un mensaje informativo.

**Postcondiciones:**
- El usuario está autenticado en el sistema.
- Se genera una sesión válida con token JWT.
- Se registra el acceso en los logs de auditoría.

---

##### UC-002: Gestión de Perfil de Usuario

**Actor Principal:** Usuario autenticado

**Descripción:** El usuario visualiza y modifica la información de su perfil personal.

**Precondiciones:**
- El usuario debe estar autenticado en el sistema.
- El usuario debe tener acceso a su perfil.

**Flujo Principal:**
1. El usuario accede a la sección "Mi Perfil".
2. El sistema muestra la información actual del perfil.
3. El usuario modifica los datos deseados (correo, teléfono, foto, etc.).
4. El usuario confirma los cambios.
5. El sistema valida los nuevos datos.
6. El sistema actualiza el perfil en la base de datos.
7. Se muestra un mensaje de confirmación.
8. El caso de uso finaliza satisfactoriamente.

**Flujos Alternativos:**
- **3a. Datos inválidos:** Si los datos introducidos no son válidos, se muestra un error específico.
- **3b. Correo duplicado:** Si el correo ya existe en otro usuario, se solicita uno diferente.
- **3c. Cancelar cambios:** El usuario puede cancelar en cualquier momento sin guardar cambios.

**Postcondiciones:**
- La información del perfil se actualiza correctamente.
- Se registra el cambio en el historial de auditoría.
- Se envía confirmación por correo si se cambió el email.

---

##### UC-003: Crear Registro

**Actor Principal:** Usuario autenticado con permisos de creación

**Descripción:** El usuario crea un nuevo registro en el sistema.

**Precondiciones:**
- El usuario debe estar autenticado.
- El usuario debe tener permisos de creación.
- El formulario de creación debe estar disponible.

**Flujo Principal:**
1. El usuario accede a la opción "Crear nuevo registro".
2. El sistema muestra el formulario vacío con los campos requeridos.
3. El usuario completa los campos obligatorios y opcionales.
4. El usuario valida los datos introducidos.
5. El usuario confirma la creación.
6. El sistema valida los datos en el servidor.
7. El sistema almacena el registro en la base de datos.
8. Se asigna un ID único al registro.
9. Se muestra un mensaje de confirmación con el ID del registro.
10. El caso de uso finaliza satisfactoriamente.

**Flujos Alternativos:**
- **3a. Validación fallida:** Si hay errores de validación, se muestran específicamente.
- **3b. Error en base de datos:** Si falla el almacenamiento, se informa al usuario y se sugiere reintentar.
- **3c. Cancelar operación:** El usuario puede cancelar en cualquier momento.

**Postcondiciones:**
- El nuevo registro se almacena en la base de datos.
- Se asigna un ID único e inmutable.
- Se registra la creación en los logs de auditoría.
- Se genera una notificación si está configurada.

---

##### UC-004: Visualizar Registros

**Actor Principal:** Usuario autenticado con permisos de lectura

**Descripción:** El usuario visualiza la lista de registros con sus detalles.

**Precondiciones:**
- El usuario debe estar autenticado.
- El usuario debe tener permisos de lectura.
- Deben existir registros en la base de datos.

**Flujo Principal:**
1. El usuario accede a la sección de registros.
2. El sistema obtiene los registros de la base de datos.
3. El sistema aplica filtros por defecto (permisos del usuario).
4. El sistema muestra la lista de registros en tabla paginada.
5. El usuario puede ver detalles haciendo clic en un registro.
6. El sistema muestra los detalles completos del registro.
7. El caso de uso finaliza.

**Flujos Alternativos:**
- **4a. Sin registros:** Si no hay registros, se muestra un mensaje informativo.
- **4b. Permisos insuficientes:** Si el usuario no tiene permisos para ciertos registros, no los ve.
- **4c. Error de carga:** Si falla la carga, se muestra mensaje de error.

**Postcondiciones:**
- Los registros se muestran correctamente filtrados por permisos.
- Se registra el acceso en logs de auditoría.
- La paginación funciona correctamente.

---

##### UC-005: Actualizar Registro

**Actor Principal:** Usuario autenticado con permisos de actualización

**Descripción:** El usuario modifica la información de un registro existente.

**Precondiciones:**
- El usuario debe estar autenticado.
- El usuario debe tener permisos de actualización en el registro.
- El registro debe existir y estar accesible.

**Flujo Principal:**
1. El usuario selecciona un registro de la lista.
2. El usuario accede a la opción "Editar".
3. El sistema muestra el formulario con los datos actuales.
4. El usuario modifica los campos deseados.
5. El usuario valida los cambios.
6. El usuario confirma la actualización.
7. El sistema valida los datos en el servidor.
8. El sistema actualiza el registro en la base de datos.
9. Se registra la versión anterior en el historial.
10. Se muestra mensaje de confirmación.
11. El caso de uso finaliza satisfactoriamente.

**Flujos Alternativos:**
- **4a. Validación fallida:** Se muestran los errores específicos.
- **4b. Conflicto de edición:** Si otro usuario está editando, se notifica al usuario.
- **4c. Permisos insuficientes:** Se informa que no tiene permisos para editar.
- **4d. Cancelar cambios:** El usuario puede cancelar sin guardar.

**Postcondiciones:**
- El registro se actualiza correctamente.
- Se crea una entrada en el historial de cambios.
- Se registra en auditoría quién y cuándo cambió.
- Se notifica si está configurado.

---

##### UC-006: Eliminar Registro

**Actor Principal:** Usuario autenticado con permisos de eliminación

**Descripción:** El usuario elimina un registro del sistema.

**Precondiciones:**
- El usuario debe estar autenticado.
- El usuario debe tener permisos de eliminación.
- El registro debe existir.

**Flujo Principal:**
1. El usuario selecciona uno o más registros.
2. El usuario accede a la opción "Eliminar".
3. El sistema muestra una confirmación de eliminación.
4. El usuario confirma la eliminación.
5. El sistema verifica si hay dependencias.
6. El sistema elimina el registro (o lo marca como eliminado).
7. Se registra la eliminación en auditoría.
8. Se muestra mensaje de confirmación.
9. El caso de uso finaliza satisfactoriamente.

**Flujos Alternativos:**
- **5a. Dependencias detectadas:** Se informa que el registro no puede eliminarse debido a dependencias.
- **5b. Usuario cancela:** El usuario puede cancelar la eliminación.
- **5c. Error en base de datos:** Se informa del error y se sugiere reintentar.

**Postcondiciones:**
- El registro se elimina o marca como eliminado.
- Se realiza soft delete (opcionalmente con recuperación).
- Se registra en auditoría la eliminación.
- Los usuarios afectados se notifican si corresponde.

---

##### UC-007: Búsqueda y Filtrado de Registros

**Actor Principal:** Usuario autenticado

**Descripción:** El usuario busca y filtra registros según criterios específicos.

**Precondiciones:**
- El usuario debe estar autenticado.
- Deben existir registros en el sistema.

**Flujo Principal:**
1. El usuario accede a la sección de búsqueda.
2. El usuario introduce términos de búsqueda o selecciona filtros.
3. El usuario puede aplicar múltiples filtros simultáneamente.
4. El usuario hace clic en "Buscar".
5. El sistema realiza la búsqueda en la base de datos.
6. El sistema muestra los resultados ordenados.
7. El usuario puede refinar la búsqueda.
8. El caso de uso finaliza.

**Flujos Alternativos:**
- **5a. Sin resultados:** Se muestra mensaje indicando que no hay coincidencias.
- **5b. Búsqueda vacía:** Se muestran todos los registros con permisos.
- **5c. Criterios inválidos:** Se informa sobre el formato esperado.

**Postcondiciones:**
- Se muestran solo los registros que coinciden con los criterios.
- Se respetan los permisos del usuario.
- Los resultados se ordenan por relevancia o criterio elegido.
- Se registra la búsqueda realizada.

---

##### UC-008: Exportar Datos

**Actor Principal:** Usuario autenticado con permisos de exportación

**Descripción:** El usuario exporta datos a diferentes formatos.

**Precondiciones:**
- El usuario debe estar autenticado.
- El usuario debe tener permisos de exportación.
- Deben existir datos para exportar.

**Flujo Principal:**
1. El usuario selecciona los datos a exportar (o exporta búsqueda actual).
2. El usuario accede a la opción "Exportar".
3. El sistema muestra opciones de formato (CSV, PDF, JSON, Excel).
4. El usuario selecciona el formato deseado.
5. El usuario elige opciones adicionales (columnas, ordenamiento, etc.).
6. El usuario confirma la exportación.
7. El sistema genera el archivo en el formato seleccionado.
8. El sistema envía el archivo para descarga.
9. El caso de uso finaliza.

**Flujos Alternativos:**
- **6a. Archivo muy grande:** Se realiza la exportación en segundo plano y se notifica por correo.
- **6b. Formato no disponible:** Se muestran solo formatos disponibles.
- **6c. Error en generación:** Se informa del error y se sugiere reintentar.

**Postcondiciones:**
- El archivo se genera correctamente en el formato seleccionado.
- Se respetan los permisos (solo datos que puede ver).
- Se registra la exportación en auditoría.
- El archivo es descargable por 24 horas.

---

##### UC-009: Recibir Notificaciones

**Actor Principal:** Usuario autenticado

**Descripción:** El usuario recibe notificaciones sobre eventos del sistema.

**Precondiciones:**
- El usuario debe estar autenticado.
- El usuario debe tener notificaciones habilitadas.
- Debe ocurrir un evento que genere notificación.

**Flujo Principal:**
1. Ocurre un evento importante en el sistema (creación, actualización, etc.).
2. El sistema genera una notificación.
3. El sistema verifica preferencias del usuario.
4. El sistema envía notificación (en aplicación, email, SMS).
5. El usuario recibe la notificación.
6. El usuario puede acceder a través del enlace de la notificación.
7. El caso de uso finaliza.

**Flujos Alternativos:**
- **3a. Usuario offline:** La notificación se almacena y muestra cuando se conecte.
- **3b. Notificación deshabilitada:** No se envía si el usuario la tiene deshabilitada.
- **3c. Error en envío:** Se reintentan automáticamente.

**Postcondiciones:**
- La notificación se registra en el historial del usuario.
- El usuario puede verla en su centro de notificaciones.
- Se registra si la notificación fue leída.

---

##### UC-010: Configurar Preferencias de Usuario

**Actor Principal:** Usuario autenticado

**Descripción:** El usuario configura sus preferencias y notificaciones del sistema.

**Precondiciones:**
- El usuario debe estar autenticado.
- El sistema debe tener opciones de configuración disponibles.

**Flujo Principal:**
1. El usuario accede a "Configuración" o "Preferencias".
2. El sistema muestra las opciones disponibles organizadas por categorías.
3. El usuario modifica las preferencias deseadas:
   - Idioma de la interfaz
   - Tema (claro/oscuro)
   - Notificaciones (email, SMS, en-app)
   - Privacidad
   - Zona horaria
4. El usuario guarda los cambios.
5. El sistema valida las preferencias.
6. El sistema actualiza la configuración del usuario.
7. Se muestra confirmación.
8. El caso de uso finaliza.

**Flujos Alternativos:**
- **5a. Valores inválidos:** Se muestran mensajes de error específicos.
- **5b. Cancelar cambios:** El usuario puede descartar cambios.
- **5c. Restaurar valores por defecto:** El usuario puede volver a configuración inicial.

**Postcondiciones:**
- Las preferencias del usuario se guardan correctamente.
- Los cambios se aplican inmediatamente en la interfaz.
- Se registran en auditoría cambios críticos.
- Las nuevas preferencias se respetan en futuras operaciones.

---

### 3. RELACIONES ENTRE CASOS DE USO

| Caso de Uso | Relación | Relacionado con |
|-------------|----------|-----------------|
| UC-001 | Precede | UC-002, UC-003, UC-004, UC-005, UC-006, UC-007, UC-008, UC-009, UC-010 |
| UC-002 | Independiente | - |
| UC-003 | Genera evento | UC-009 |
| UC-004 | Fundamento | UC-005, UC-006, UC-007, UC-008 |
| UC-005 | Genera evento | UC-009 |
| UC-006 | Genera evento | UC-009 |
| UC-007 | Especialización | UC-004 |
| UC-008 | Depende de | UC-004 |
| UC-009 | Activado por | UC-003, UC-005, UC-006 |
| UC-010 | Afecta a | UC-009 |

---

# FASE DE DISEÑO

La fase de diseño recoge todas las decisiones arquitectónicas y estructurales tomadas antes de iniciar la implementación del proyecto. El objetivo es disponer de un modelo completo y coherente del sistema que sirva de guía durante el desarrollo.

---

## 1. DIAGRAMA DE CLASES

> 📌 **Nota:** Una vez generado el diagrama con Lucidchart o Draw.io, sustituir la siguiente sección por la imagen exportada:
> `![Diagrama UML de Clases - Game Store](./docs/diseño/diagramas/diagrama-uml-clases.png)`

### Estructura Principal

```
┌─────────────────────┐
│        User         │
├─────────────────────┤
│ - id: number        │
│ - email: string     │
│ - password: string  │
│ - name: string      │
├─────────────────────┤
│ + create()          │
│ + findByEmail()     │
│ + findById()        │
│ + update()          │
│ + delete()          │
└─────────────────────┘
          △
          │ hereda
          │
┌─────────────────────┐
│        Admin        │
├─────────────────────┤
│ - role: string      │
├─────────────────────┤
│ + manageProducts()  │
│ + manageUsers()     │
└─────────────────────┘


┌──────────────────────┐         ┌─────────────────────┐
│       Category       │         │       Product        │
├──────────────────────┤         ├─────────────────────┤
│ - id: number         │◇──1:N──▶│ - id: number        │
│ - name: string       │         │ - categoryId: number │
│ - description: string│         │ - name: string       │
├──────────────────────┤         │ - price: decimal     │
│ + getProducts()      │         │ - developer: string  │
│ + getName()          │         │ - genre: string      │
└──────────────────────┘         │ - releaseDate: date  │
                                 │ - rating: decimal    │
                                 │ - inStock: boolean   │
                                 ├─────────────────────┤
                                 │ + getDetails()       │
                                 │ + updatePrice()      │
                                 │ + checkStock()       │
                                 └─────────────────────┘


┌──────────────────────┐         ┌─────────────────────┐
│         Cart         │         │      CartItem        │
├──────────────────────┤         ├─────────────────────┤
│ - id: number         │◇──1:N──▶│ - id: number        │
│ - userId: number     │         │ - cartId: number     │
│ - createdAt: date    │         │ - productId: number  │
├──────────────────────┤         │ - quantity: number   │
│ + addItem()          │         ├─────────────────────┤
│ + removeItem()       │         │ + updateQuantity()   │
│ + getTotalPrice()    │         │ + getSubtotal()      │
│ + checkout()         │         └─────────────────────┘
└──────────────────────┘


┌──────────────────────┐         ┌─────────────────────┐
│        Order         │         │     OrderItem        │
├──────────────────────┤         ├─────────────────────┤
│ - id: number         │◇──1:N──▶│ - id: number        │
│ - userId: number     │         │ - orderId: number    │
│ - totalPrice: decimal│         │ - productId: number  │
│ - status: string     │         │ - quantity: number   │
│ - createdAt: date    │         │ - unitPrice: decimal │
├──────────────────────┤         ├─────────────────────┤
│ + create()           │         │ + getSubtotal()      │
│ + getStatus()        │         │ + getProduct()       │
│ + cancel()           │         └─────────────────────┘
└──────────────────────┘
```

### Relaciones

- **1:N** — Una categoría contiene muchos productos
- **1:N** — Un carrito contiene muchos items
- **1:N** — Un pedido contiene muchos items de pedido
- **Herencia** — Admin extiende de User

### Descripción de Entidades

| Clase | Responsabilidad | Atributos Principales | Métodos |
|-------|-----------------|----------------------|---------|
| **User** | Gestionar datos y autenticación de usuarios | id, email, password, name | CRUD completo |
| **Admin** | Operaciones administrativas | role | manageProducts(), manageUsers() |
| **Category** | Agrupar productos por tipo | id, name, description | getProducts() |
| **Product** | Información de juegos disponibles | id, categoryId, name, price, developer, genre | getDetails(), checkStock() |
| **Cart** | Carrito temporal de usuario | id, userId, createdAt | addItem(), removeItem(), checkout() |
| **CartItem** | Items dentro del carrito | id, cartId, productId, quantity | updateQuantity(), getSubtotal() |
| **Order** | Registro de compra finalizada | id, userId, totalPrice, status, createdAt | create(), getStatus(), cancel() |
| **OrderItem** | Items dentro de una orden | id, orderId, productId, quantity, unitPrice | getSubtotal(), getProduct() |

---

## 2. DIAGRAMAS DE SECUENCIA

Diagramas UML de secuencia para los casos de uso más relevantes, mostrando la interacción entre objetos a lo largo del tiempo y el flujo de mensajes.

### 2.1 Caso de Uso: Visualizar Productos de una Categoría

```
Usuario      Frontend         Backend          Base de Datos
  │              │               │                   │
  │─ click en ──▶│               │                   │
  │  categoría   │               │                   │
  │              │─ GET /api/categories/1/products ──▶│
  │              │               │                   │
  │              │               │─ SELECT * FROM products WHERE categoryId=1 ─▶│
  │              │               │                   │
  │              │               │◀─ [products...]   │
  │              │◀──────────────│                   │
  │◀─ mostrar ───│               │                   │
  │  productos   │               │                   │
```

**Flujo:**
1. Usuario hace clic en una categoría
2. Frontend envía GET request al backend
3. Backend consulta base de datos
4. Base de datos retorna productos filtrados
5. Frontend recibe datos y renderiza lista

---

### 2.2 Caso de Uso: Registro de Usuario

```
Usuario      Frontend         Backend          Base de Datos
  │              │               │                   │
  │─ completar ─▶│               │                   │
  │  formulario  │               │                   │
  │              │─ POST /api/auth/register ─────────▶│
  │              │  (email, password, name)            │
  │              │               │                   │
  │              │               │─ validar email    │
  │              │               │─ hash password    │
  │              │               │─ INSERT INTO users ─▶│
  │              │               │                   │
  │              │               │◀─ success/error   │
  │              │◀──────────────│                   │
  │◀─ confirmación│              │                   │
```

**Flujo:**
1. Usuario completa formulario de registro
2. Frontend valida datos básicos
3. Frontend envía POST con credenciales
4. Backend valida email único
5. Backend hashea contraseña con scrypt
6. Backend inserta usuario en base de datos
7. Retorna confirmación o error

---

### 2.3 Caso de Uso: Agregar Producto al Carrito

```
Usuario      Frontend         Backend          Base de Datos
  │              │               │                   │
  │─ click ──────▶│              │                   │
  │  "Añadir al  │               │                   │
  │   carrito"   │─ POST /api/cart/items ────────────▶│
  │              │  (productId, quantity)              │
  │              │               │                   │
  │              │               │─ verificar stock  │
  │              │               │─ INSERT INTO cartItems ─▶│
  │              │               │                   │
  │              │               │◀─ itemAdded       │
  │              │◀──────────────│                   │
  │◀─ actualizar ─│              │                   │
  │   carrito    │               │                   │
```

**Flujo:**
1. Usuario hace clic en "Añadir al carrito"
2. Frontend envía POST con producto y cantidad
3. Backend verifica disponibilidad de stock
4. Backend inserta item en cartItems
5. Retorna confirmación
6. Frontend actualiza UI del carrito

---

### 2.4 Caso de Uso: Checkout (Realizar Compra)

```
Usuario      Frontend         Backend          Base de Datos
  │              │               │                   │
  │─ click ──────▶│              │                   │
  │  "Realizar   │               │                   │
  │   compra"    │─ POST /api/orders ────────────────▶│
  │              │               │                   │
  │              │               │─ validar carrito  │
  │              │               │─ BEGIN TRANSACTION │
  │              │               │─ INSERT INTO orders ─▶│
  │              │               │─ INSERT INTO orderItems ─▶│
  │              │               │─ UPDATE products (stock) ─▶│
  │              │               │─ COMMIT           │
  │              │◀──────────────│                   │
  │◀─ pedido ────│               │                   │
  │   confirmado │               │                   │
```

**Flujo:**
1. Usuario hace clic en "Realizar compra"
2. Frontend envía carrito al backend
3. Backend inicia transacción
4. Backend inserta orden
5. Backend inserta items de orden
6. Backend actualiza stock de productos
7. Backend confirma la transacción
8. Frontend recibe confirmación y limpia carrito

---

### 2.5 Caso de Uso: Login de Usuario

```
Usuario      Frontend         Backend          Base de Datos
  │              │               │                   │
  │─ completar ─▶│               │                   │
  │  login       │               │                   │
  │              │─ POST /api/auth/login ────────────▶│
  │              │  (email, password)                  │
  │              │               │                   │
  │              │               │─ SELECT * FROM users WHERE email ─▶│
  │              │               │                   │
  │              │               │◀─ usuario         │
  │              │               │─ comparar hashes  │
  │              │               │─ generar token    │
  │              │◀──────────────│                   │
  │◀─ token/error│               │                   │
  │   + redirect │               │                   │
```

**Flujo:**
1. Usuario ingresa email y contraseña
2. Frontend valida formato
3. Frontend envía POST con credenciales
4. Backend busca usuario por email
5. Backend compara hash de contraseña
6. Si es correcto, genera JWT token
7. Frontend almacena token y redirige

---

## 3. DIAGRAMA ENTIDAD–RELACIÓN (E/R)

### Modelo Conceptual de la Base de Datos

```
┌─────────────┐
│    Users    │
├─────────────┤
│ id (PK)     │
│ email       │
│ password    │
│ name        │
│ createdAt   │
└──────┬──────┘
       │ 1:N
       ├──────────────────────┐
       │                      │
┌──────▼──────┐        ┌──────▼──────┐
│    Carts    │        │   Orders    │
├─────────────┤        ├─────────────┤
│ id (PK)     │        │ id (PK)     │
│ userId (FK) │        │ userId (FK) │
│ createdAt   │        │ totalPrice  │
└──────┬──────┘        │ status      │
       │ 1:N           │ createdAt   │
┌──────▼──────────┐    └──────┬──────┘
│   CartItems     │           │ 1:N
├─────────────────┤    ┌──────▼──────────┐
│ id (PK)         │    │   OrderItems    │
│ cartId (FK)     │    ├─────────────────┤
│ productId (FK) ─┼──┐ │ id (PK)         │
│ quantity        │  │ │ orderId (FK)     │
└─────────────────┘  │ │ productId (FK) ─┼──┐
                     │ │ quantity         │  │
                     │ │ unitPrice        │  │
                     │ └─────────────────┘  │
                     │                      │
                     └──────────┬───────────┘
                                │ N:1
┌─────────────┐         ┌───────▼───────┐
│ Categories  │         │   Products    │
├─────────────┤         ├───────────────┤
│ id (PK)     │──1:N───▶│ id (PK)       │
│ name        │         │ categoryId(FK)│
│ description │         │ name          │
└─────────────┘         │ description   │
                        │ price         │
                        │ developer     │
                        │ genre         │
                        │ players       │
                        │ releaseDate   │
                        │ rating        │
                        │ inStock       │
                        │ image         │
                        └───────────────┘
```

### Entidades y Atributos

#### USERS
- **id** (PK): Identificador único del usuario (autoincrement)
- **email**: Correo electrónico único del usuario
- **password**: Contraseña hasheada con scrypt + salt
- **name**: Nombre completo del usuario
- **createdAt**: Timestamp de creación de la cuenta

#### CATEGORIES
- **id** (PK): Identificador único de categoría
- **name**: Nombre de la categoría (único)
- **description**: Descripción de la categoría

#### PRODUCTS
- **id** (PK): Identificador único de producto
- **categoryId** (FK → Categories.id): Categoría a la que pertenece
- **name**: Nombre del producto
- **description**: Descripción completa
- **shortDescription**: Descripción corta para listados
- **longDescription**: Descripción extendida para detalles
- **price**: Precio del juego (decimal)
- **developer**: Desarrollador/Studio del juego
- **genre**: Género del juego
- **players**: Rango de jugadores (ej: "2-5")
- **releaseDate**: Fecha de lanzamiento
- **rating**: Calificación del producto (0-5)
- **inStock**: Disponibilidad en stock (booleano)
- **image**: URL de la imagen del producto
- **createdAt**: Timestamp de creación
- **updatedAt**: Timestamp de última actualización

#### CARTS
- **id** (PK): Identificador único del carrito
- **userId** (FK → Users.id): Usuario propietario del carrito
- **createdAt**: Timestamp de creación

#### CARTITEMS
- **id** (PK): Identificador único del item
- **cartId** (FK → Carts.id): Carrito asociado
- **productId** (FK → Products.id): Producto en el carrito
- **quantity**: Cantidad de unidades del producto
- **createdAt**: Timestamp de adición al carrito

#### ORDERS
- **id** (PK): Identificador único del pedido
- **userId** (FK → Users.id): Usuario que realizó la compra
- **totalPrice**: Precio total del pedido (decimal)
- **status**: Estado del pedido (pending, completed, cancelled)
- **createdAt**: Timestamp del pedido
- **updatedAt**: Timestamp de última actualización

#### ORDERITEMS
- **id** (PK): Identificador único del item
- **orderId** (FK → Orders.id): Pedido asociado
- **productId** (FK → Products.id): Producto comprado
- **quantity**: Cantidad comprada
- **unitPrice**: Precio unitario en el momento de compra (snapshot)
- **createdAt**: Timestamp de creación

---

## 4. DIAGRAMA RELACIONAL

### Modelo Lógico Normalizado (3FN)

#### Creación de Tablas

```sql
-- =============================================
-- TABLA: USERS
-- =============================================
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uk_email UNIQUE (email)
);

-- =============================================
-- TABLA: CATEGORIES
-- =============================================
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  CONSTRAINT uk_category_name UNIQUE (name)
);

-- =============================================
-- TABLA: PRODUCTS
-- =============================================
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  categoryId INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  shortDescription TEXT,
  longDescription TEXT,
  price DECIMAL(10, 2) NOT NULL,
  developer TEXT,
  genre TEXT,
  players TEXT,
  releaseDate TEXT,
  rating DECIMAL(3, 1),
  inStock BOOLEAN DEFAULT 1,
  image TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (categoryId) REFERENCES categories (id) ON DELETE CASCADE,
  CONSTRAINT chk_price CHECK (price >= 0),
  CONSTRAINT chk_rating CHECK (rating >= 0 AND rating <= 5),
  CONSTRAINT chk_instock CHECK (inStock IN (0, 1))
);

-- =============================================
-- TABLA: CARTS
-- =============================================
CREATE TABLE carts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
  CONSTRAINT uk_user_cart UNIQUE (userId)
);

-- =============================================
-- TABLA: CARTITEMS
-- =============================================
CREATE TABLE cartItems (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cartId INTEGER NOT NULL,
  productId INTEGER NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (cartId) REFERENCES carts (id) ON DELETE CASCADE,
  FOREIGN KEY (productId) REFERENCES products (id) ON DELETE RESTRICT,
  CONSTRAINT chk_quantity CHECK (quantity > 0),
  CONSTRAINT uk_cart_product UNIQUE (cartId, productId)
);

-- =============================================
-- TABLA: ORDERS
-- =============================================
CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER NOT NULL,
  totalPrice DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (userId) REFERENCES users (id) ON DELETE RESTRICT,
  CONSTRAINT chk_total CHECK (totalPrice >= 0)
);

-- =============================================
-- TABLA: ORDERITEMS
-- =============================================
CREATE TABLE orderItems (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  orderId INTEGER NOT NULL,
  productId INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  unitPrice DECIMAL(10, 2) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (orderId) REFERENCES orders (id) ON DELETE CASCADE,
  FOREIGN KEY (productId) REFERENCES products (id) ON DELETE RESTRICT,
  CONSTRAINT chk_qty CHECK (quantity > 0),
  CONSTRAINT chk_unit_price CHECK (unitPrice >= 0)
);
```

#### Índices para Optimización

```sql
CREATE INDEX idx_products_category ON products (categoryId);
CREATE INDEX idx_cartitems_cart ON cartItems (cartId);
CREATE INDEX idx_cartitems_product ON cartItems (productId);
CREATE INDEX idx_orders_user ON orders (userId);
CREATE INDEX idx_orderitems_order ON orderItems (orderId);
CREATE INDEX idx_orderitems_product ON orderItems (productId);
CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_carts_user ON carts (userId);
```

#### Restricciones de Integridad

| Restricción | Tipo | Descripción | Impacto |
|-------------|------|-------------|---------|
| PK (id) | PRIMARY KEY | Cada tabla tiene identificador único | Garantiza unicidad |
| FK (categoryId) | FOREIGN KEY | Producto debe existir en categoría | Integridad referencial |
| FK (userId) | FOREIGN KEY | Carrito/Orden debe pertenecer a usuario | Integridad referencial |
| UNIQUE (email) | UNIQUE | No hay usuarios con mismo email | Evita duplicados |
| UNIQUE (name) | UNIQUE | No hay categorías con mismo nombre | Evita duplicados |
| UNIQUE (cartId, productId) | UNIQUE | Un producto solo una vez por carrito | Lógica de negocio |
| CHECK (price >= 0) | CHECK | Precios no negativos | Validación de datos |
| CHECK (rating 0-5) | CHECK | Ratings válidos | Validación de datos |
| CHECK (quantity > 0) | CHECK | Cantidades positivas | Validación de datos |
| CHECK (status) | CHECK | Estados permitidos | Validación de datos |
| ON DELETE CASCADE | REFERENTIAL | Borrar categoría borra sus productos | Cascada de eliminación |
| ON DELETE RESTRICT | REFERENTIAL | No borrar producto si está en órdenes | Protege datos críticos |

#### Normalización

El modelo está en **Tercera Forma Normal (3FN)**:

- ✅ **1FN:** Todos los atributos contienen valores atómicos (no hay listas dentro de columnas)
- ✅ **2FN:** Todos los atributos dependen funcionalmente de la clave primaria completa
- ✅ **3FN:** No hay dependencias transitivas entre atributos no-clave

#### Diagrama de Dependencias

```
USERS (1) ──────────▶ (N) CARTS
          └──────────▶ (N) ORDERS

CATEGORIES (1) ─────▶ (N) PRODUCTS

CARTS (1) ──────────▶ (N) CARTITEMS
PRODUCTS (1) ───────▶ (N) CARTITEMS

ORDERS (1) ─────────▶ (N) ORDERITEMS
PRODUCTS (1) ───────▶ (N) ORDERITEMS
```

---

## 5. PROTOTIPO DE LA APLICACIÓN

### 5.1 Wireframes Principales

#### Pantalla de Inicio (Home)

```
┌─────────────────────────────────────────┐
│ Logo        GAME STORE        🛒 Carrito│
├─────────────────────────────────────────┤
│                                         │
│     Explora nuestras categorías         │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ Juegos   │  │ Juegos   │  │Juegos │ │
│  │ de Mesa  │  │ PC       │  │ Xbox  │ │
│  │    📦    │  │    🖥️    │  │   🎮  │ │
│  │ [Click]  │  │ [Click]  │  │[Click]│ │
│  └──────────┘  └──────────┘  └───────┘ │
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ Juegos   │  │ Juegos   │            │
│  │Nintendo  │  │   PS5    │            │
│  │    🎮    │  │    🎮    │            │
│  │ [Click]  │  │ [Click]  │            │
│  └──────────┘  └──────────┘            │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ ℹ️ Información de la tienda     │   │
│  │    Contacto | Sobre nosotros    │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Elementos:** Barra de navegación fija · Logo · Carrito (badge con cantidad) · Grid de categorías responsivo · Efecto hover · Footer informativo

---

#### Pantalla de Productos por Categoría

```
┌─────────────────────────────────────────┐
│ Logo       GAME STORE         🛒(3)     │
├─────────────────────────────────────────┤
│ Inicio > Juegos PC                      │
├─────────────────────────────────────────┤
│                                         │
│ Juegos PC disponibles (12 productos)    │
│                                         │
│  ┌────────────┐  ┌────────────┐        │
│  │  [Imagen]  │  │  [Imagen]  │        │
│  │   CS 2     │  │ Minecraft  │        │
│  │ Acción/FPS │  │  Sandbox   │        │
│  │  29.99€    │  │  26.99€    │        │
│  │  ⭐ 4.8    │  │  ⭐ 4.9    │        │
│  │ [Ver info] │  │ [Ver info] │        │
│  └────────────┘  └────────────┘        │
│                                         │
│  ┌────────────┐  ┌────────────┐        │
│  │  [Imagen]  │  │  [Imagen]  │        │
│  │  Fortnite  │  │  Valorant  │        │
│  │ Action/FPS │  │ FPS Táctico│        │
│  │   Gratis   │  │   Gratis   │        │
│  │  ⭐ 4.5    │  │  ⭐ 4.7    │        │
│  │ [Ver info] │  │ [Ver info] │        │
│  └────────────┘  └────────────┘        │
│                                         │
│       [Cargar más productos...]         │
└─────────────────────────────────────────┘
```

**Elementos:** Breadcrumb · Grid responsivo · Tarjetas con imagen/título/género/precio/rating · Paginación

---

#### Pantalla de Detalle de Producto

```
┌─────────────────────────────────────────┐
│ Logo       GAME STORE         🛒(3)     │
├─────────────────────────────────────────┤
│ Inicio > Juegos PC > Counter-Strike 2   │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────┐  Información del Juego    │
│  │         │  ━━━━━━━━━━━━━━━━━━━━━    │
│  │         │  Counter-Strike 2          │
│  │  Imagen │  ⭐ 4.8 / 5 (1.234 reseñas)│
│  │  Grande │  Desarrollador: Valve      │
│  │ 300x300 │  Género: Disparos / FPS   │
│  │         │  Jugadores: 10-64          │
│  │         │  Fecha: 01/09/2023         │
│  └─────────┘  Stock: ✓ Disponible      │
│                                         │
│  Descripción:                           │
│  Counter-Strike 2 es el juego de        │
│  disparos táctico en equipos más        │
│  popular del mundo...                   │
│                                         │
│  💰 Precio: 29.99€                      │
│                                         │
│  Cantidad: [ ▼ 1 ▲ ]                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  🛒 Añadir al carrito           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Productos Relacionados:                │
│  ┌──────┐ ┌──────┐ ┌──────┐           │
│  │ Dota2│ │ L4D2 │ │ TF2  │           │
│  └──────┘ └──────┘ └──────┘           │
└─────────────────────────────────────────┘
```

**Elementos:** Breadcrumb · Imagen grande · Info detallada · Rating · Descripción extendida · Precio · Selector de cantidad · Botón añadir al carrito · Productos relacionados

---

#### Pantalla de Carrito

```
┌─────────────────────────────────────────┐
│ Logo       GAME STORE         🛒(3)     │
├─────────────────────────────────────────┤
│ Inicio > Carrito                        │
├─────────────────────────────────────────┤
│                                         │
│ Tu carrito (3 productos)                │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                         │
│  CS 2                 Qty: [ ▼ 1 ▲ ]  │
│  29.99€               Subtotal: 29.99€ ❌│
│                                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                         │
│  Minecraft            Qty: [ ▼ 1 ▲ ]  │
│  26.99€               Subtotal: 26.99€ ❌│
│                                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                         │
│  Fortnite (Gratis)    Qty: [ ▼ 2 ▲ ]  │
│  0.00€                Subtotal:  0.00€ ❌│
│                                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ Subtotal:                      56.98€   │
│ Impuestos (21%):               11.97€   │
│ Envío:                          0.00€   │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ TOTAL:                         68.95€   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  ✓ Proceder a Checkout          │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  ↩️ Seguir comprando            │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Elementos:** Lista de productos · Modificar cantidad · Eliminar producto · Resumen de costos · Total destacado · Botones de acción

---

#### Pantalla de Checkout

```
┌─────────────────────────────────────────┐
│ Logo       GAME STORE         🛒        │
├─────────────────────────────────────────┤
│ Inicio > Carrito > Checkout             │
├─────────────────────────────────────────┤
│                                         │
│ Paso 1: ENVÍO     ✓ Completado          │
│ Paso 2: PAGO      → En progreso         │
│ Paso 3: CONFIRMACIÓN  ○ Pendiente       │
│                                         │
│ INFORMACIÓN DE ENVÍO                    │
│ ┌─────────────────────────────────┐   │
│ │ Nombre:    [________________]   │   │
│ │ Dirección: [________________]   │   │
│ │ Ciudad: [________]  CP: [_____] │   │
│ │ País:   [ España          ▼ ]   │   │
│ └─────────────────────────────────┘   │
│                                         │
│ MÉTODO DE PAGO                          │
│ ☑ Tarjeta de Crédito                   │
│   Número:  [____] [____] [____] [____] │
│   Vence:   [__/____]   CVC: [___]      │
│ ☐ PayPal                                │
│ ☐ Transferencia Bancaria                │
│                                         │
│ RESUMEN FINAL: 3 productos — 68.95€    │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  ✓ Confirmar compra             │   │
│  └─────────────────────────────────┘   │
│                                         │
│  🔒 Pago seguro — SSL 128-bit          │
└─────────────────────────────────────────┘
```

---

#### Pantalla de Confirmación de Compra

```
┌─────────────────────────────────────────┐
│ Logo       GAME STORE         🛒        │
├─────────────────────────────────────────┤
│ Inicio > Carrito > Confirmación         │
├─────────────────────────────────────────┤
│                                         │
│    ✅ ¡COMPRA REALIZADA CON ÉXITO!     │
│                                         │
│  Número de Pedido: #ORD-2026-001547     │
│  Fecha: 21/04/2026 15:30:22             │
│                                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Gracias por tu compra, usuario@mail   │
│  Tu pedido está siendo procesado.      │
│  Recibirás email de confirmación       │
│  en los próximos 5 minutos.            │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                         │
│  DETALLES DEL PEDIDO:                  │
│  1. CS 2                    29.99€      │
│  2. Minecraft               26.99€      │
│  3. Fortnite                 0.00€      │
│  Subtotal:                  56.98€      │
│  Impuestos:                 11.97€      │
│  TOTAL:                     68.95€      │
│                                         │
│  Estado: En preparación                 │
│  Envío estimado: 3-5 días hábiles      │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  📦 Rastrear pedido             │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  🏠 Volver a inicio             │   │
│  └─────────────────────────────────┘   │
│                                         │
│  📧 support@gamestore.com               │
│  📞 +34 900 123 456                     │
└─────────────────────────────────────────┘
```

---

### 5.2 Flujo de Navegación

```
        ┌─────────────┐
        │  Login/Reg  │
        └──────┬──────┘
               │
        ┌──────▼──────┐
        │    Home     │ ◄──────────────┐
        │ (Categorías)│                │
        └──────┬──────┘                │
               │                       │
        ┌──────▼──────────────┐        │
        │     Productos       │        │
        │  (por Categoría)    │        │
        └──────┬──────────────┘        │
               │                       │
        ┌──────▼──────────────┐        │
        │  Detalle Producto   │        │
        │ [Añadir al carrito] │        │
        └──────┬──────────────┘        │
               │                       │
        ┌──────▼──────────────┐        │
        │      Carrito        │────────┘
        │  [Modificar items]  │  (Seguir comprando)
        └──────┬──────────────┘
               │
        ┌──────▼──────────────┐
        │     Checkout        │
        │  [Envío + Pago]     │
        └──────┬──────────────┘
               │
        ┌──────▼──────────────┐
        │    Confirmación     │
        │  [Número Pedido]    │
        └─────────────────────┘
```

---

### 5.3 Guía de Estilos y Colores

#### Paleta de Colores

| Elemento | Color | Hex | Uso |
|----------|-------|-----|-----|
| Primario | Azul Marino | `#0066CC` | CTA principales, enlaces |
| Secundario | Verde Éxito | `#28A745` | Acciones positivas, stock |
| Peligro | Rojo | `#DC3545` | Errores, eliminación |
| Advertencia | Naranja | `#FFC107` | Alertas, atención |
| Información | Cian | `#17A2B8` | Info, notificaciones |
| Fondo | Blanco | `#FFFFFF` | Fondos principales |
| Fondo Alt | Gris Claro | `#F8F9FA` | Fondos alternativos |
| Texto Principal | Gris Oscuro | `#333333` | Texto normal |
| Texto Secundario | Gris Medio | `#666666` | Texto secundario |
| Borde | Gris Claro | `#E0E0E0` | Separadores, bordes |

#### Tipografía

| Elemento | Fuente | Tamaño | Peso |
|----------|--------|--------|------|
| Títulos H1 | Inter, sans-serif | 2.5rem (40px) | 700 Bold |
| Títulos H2 | Inter, sans-serif | 2rem (32px) | 700 Bold |
| Títulos H3 | Inter, sans-serif | 1.5rem (24px) | 600 Semi-bold |
| Párrafo | Inter, sans-serif | 1rem (16px) | 400 Regular |
| Small | Inter, sans-serif | 0.875rem (14px) | 400 Regular |
| Labels | Inter, sans-serif | 0.875rem (14px) | 600 Semi-bold |

#### Espaciado y Bordes

- Padding pequeño: `8px` · Mediano: `16px` · Grande: `24px`
- Margin pequeño: `8px` · Mediano: `16px` · Grande: `32px`
- Bordes redondeados: Pequeño `4px` · Mediano `8px` · Grande `12px` · Botones `6px`

---

### 5.4 Componentes Reutilizables

#### SectionCard

Tarjeta versátil para mostrar categorías y productos:

```jsx
<SectionCard
  title="Counter-Strike 2"
  subtitle="FPS Competitivo"
  description="Juego táctico de disparos en equipos"
  imageSrc="/cs2.jpg"
  buttonText="Ver detalles"
  onButtonClick={() => navigate(`/products/${id}`)}
  badge="Popular"
/>
```

#### ProductsList

Grid responsivo de productos:

```jsx
<ProductsList
  products={products}
  columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}
  onProductSelect={(id) => navigate(`/product/${id}`)}
  showFilters={true}
/>
```

#### Breadcrumb

Navegación jerárquica:

```jsx
<Breadcrumb
  items={[
    { label: "Inicio", path: "/" },
    { label: "Juegos PC", path: "/category/2" },
    { label: "Counter-Strike 2" }
  ]}
  onNavigate={(path) => navigate(path)}
  separator="›"
/>
```

#### CartBadge

Badge del carrito con cantidad:

```jsx
<CartBadge
  itemCount={3}
  totalPrice={68.95}
  onClick={() => navigate('/cart')}
/>
```

#### PriceTag

Etiqueta de precio con descuento opcional:

```jsx
<PriceTag
  price={29.99}
  originalPrice={39.99}
  discount={25}
  currency="€"
  highlighted={true}
/>
```

---

## 6. DECISIONES DE DISEÑO JUSTIFICADAS

### Backend

**Express.js** — Framework ligero y flexible, gran comunidad, performance suficiente para aplicaciones medianas y fácil integración con SQLite.

**SQLite** — Base de datos embebida sin servidor adicional, perfecta para desarrollo y proyectos de tamaño académico. Suficiente para el catálogo de productos. Backup sencillo (es un único archivo).

**Arquitectura por Capas** — Separación clara de responsabilidades: `Models → Services → Controllers → Routes`. Facilita mantenimiento y escalabilidad.

**Better-sqlite3** — Driver síncrono que simplifica la lectura del código, con mejor rendimiento que sqlite3 asíncrono. Ideal para operaciones CRUD básicas.

### Frontend

**React + Vite** — Herramientas modernas con Hot Module Replacement (HMR) para desarrollo ágil y build optimization automático.

**Bootstrap 5** — Sistema de grid responsivo robusto, componentes pre-construidos y personalizables, curva de aprendizaje baja.

**i18n Local** — Soporte multiidioma sin dependencias complejas, ideal para proyectos pequeños/medianos.

**React Hooks** — Funciones puras, código más limpio, sin necesidad de Redux para estado simple.

### Base de Datos

**3FN Normalizado** — Reduce redundancia, mantiene integridad referencial, facilita actualizaciones y elimina anomalías.

**Claves Foráneas y Restricciones** — `ON DELETE CASCADE/RESTRICT` previene inconsistencias. `CHECK constraints` validan datos directamente en BD.

**Índices Estratégicos** — Mejoran rendimiento en consultas frecuentes: búsqueda por email, productos por categoría, órdenes por usuario.

### Arquitectura General

**Separación Frontend-Backend** — Frontend consume API REST; backend es agnóstico a la UI. Facilita escalado y cambios futuros.

**JWT para Autenticación** — Stateless, escalable, seguro con HTTPS + secure cookies.

**Versionado de API** — `/api/v1/*` permite cambios sin romper clientes existentes.

---


# 7. IMPLEMENTACIÓN

## 7.1 Proceso de desarrollo
La implementación se realizó de forma **iterativa**, siguiendo un enfoque ágil basado en pequeñas entregas (sprints). El trabajo se dividió en tareas manejables (Kanban en GitHub Projects) y se integró mediante **ramas y Pull Requests**, manteniendo la rama estable para versiones funcionales. Este método permitió validar pronto las funcionalidades críticas (autenticación, catálogo y carrito) y reducir riesgos de integración al final.

A nivel técnico, se trabajó con una **arquitectura separada Frontend–Backend**: el frontend consume una API REST y el backend concentra la lógica de negocio y el acceso a datos. Esto facilita el mantenimiento, la escalabilidad y la posibilidad de sustituir o mejorar la interfaz sin reescribir el servidor.

## 7.2 Tecnologías utilizadas
- **Frontend:** **React + Vite** para una interfaz modular y rápida (HMR), y **Bootstrap 5** para maquetación responsiva y componentes consistentes. Se emplean **React Hooks** para gestionar estado y lógica de componentes sin necesidad de Redux en escenarios simples.  
- **Backend:** **Node.js + Express.js** para construir una **API REST** ligera, con estructura por capas.  
- **Base de datos:** **SQLite** como sistema relacional embebido (ideal para un proyecto académico por simplicidad y despliegue) y **better-sqlite3** como driver por su rendimiento y claridad de código.  
- **Seguridad y sesión:** **JWT** para autenticación stateless (alineado con una arquitectura desacoplada).  
- **Control de versiones y coordinación:** GitHub (ramas, PRs, revisiones) + Kanban en Projects.

## 7.3 Estructura global del proyecto (visión lógica)
La solución se organiza por responsabilidades:

**Backend (arquitectura por capas):**
- **Routes:** define endpoints REST (`/api/v1/...`) y delega a controladores.
- **Controllers:** gestionan request/response, validación básica y códigos de estado.
- **Services:** encapsulan lógica de negocio (registro/login, carrito, pedidos, etc.).
- **Models/DAO:** acceso a datos y consultas SQL hacia SQLite.
- **Middlewares:** autenticación (verificación JWT), validaciones y control de errores.

**Frontend (estructura por componentes):**
- **Vistas/páginas:** Home (categorías), listado por categoría, detalle de producto, carrito, checkout y confirmación.
- **Componentes reutilizables:** tarjetas de sección/producto, listados en grid, breadcrumb, badge del carrito, etiquetas de precio, etc.
- **Servicios de API:** capa de llamadas HTTP al backend y gestión del token/sesión.

Esta estructura refuerza la mantenibilidad: cada cambio queda localizado (por ejemplo, cambiar el modelo de datos no obliga a modificar la UI directamente).

## 7.4 Decisiones técnicas relevantes
- **Separación Frontend–Backend + API REST:** permite escalar y mantener cada parte de forma independiente.
- **Base de datos normalizada (3FN) con integridad referencial:** uso de claves foráneas, restricciones `CHECK` y reglas `ON DELETE CASCADE/RESTRICT` para evitar inconsistencias (por ejemplo, impedir borrar productos ligados a pedidos).
- **Transacciones en checkout:** durante la compra se agrupan operaciones (crear orden, añadir orderItems y actualizar stock) para mantener consistencia.
- **JWT:** autenticación eficiente para un sistema desacoplado, donde el cliente mantiene su sesión sin depender de estado en servidor.
- **Bootstrap 5 + diseño responsive:** asegura compatibilidad móvil/escritorio y acelera el desarrollo visual.
- **Versionado de API (`/api/v1/*`):** deja preparada la evolución futura sin romper clientes.

## 7.5 Secciones implementadas (módulos principales)
- **Autenticación:** registro y login con credenciales; generación y validación de JWT.
- **Catálogo:** categorías y productos con listado por categoría y **vista de detalle**.
- **Carrito:** añadir/eliminar productos, modificar cantidades, cálculo de subtotales y total.
- **Checkout:** formulario de envío y selección de pago (simulado), validación y confirmación.
- **Pedidos:** creación de orden y persistencia de items de pedido, con estado (pending/completed/cancelled).
- **Interfaz y navegación:** breadcrumbs, grids responsivos, feedback de acciones y consistencia visual mediante guía de estilos.

---

# 8. CONCLUSIONES

El proyecto cumple el objetivo principal de construir una **tienda online funcional** que cubre el flujo esencial de un e-commerce: autenticación, catálogo, carrito y compra simulada, utilizando tecnologías actuales y un proceso de trabajo colaborativo similar al profesional.

Las dificultades más relevantes fueron:
- **Integración entre capas** (frontend con API y persistencia), especialmente en operaciones encadenadas como checkout.
- **Diseño de base de datos y restricciones**, para mantener consistencia sin bloquear casos válidos (por ejemplo, eliminaciones y dependencias).
- **Gestión del estado en UI** (carrito, sesión, navegación) manteniendo una experiencia fluida.

Lecciones aprendidas:
- La **arquitectura por capas** reduce deuda técnica y facilita depurar.
- Definir bien el **modelo E/R y normalización** desde el inicio evita cambios costosos después.
- Integrar con PRs y revisiones mejora la calidad y reduce conflictos.

Líneas de mejora:
- Completar funcionalidades planteadas como futuras: búsqueda/filtros avanzados, historial de pedidos, wishlist, valoraciones, cupones y notificaciones.
- Reforzar **testing automatizado** (unitario, integración, e2e) y añadir herramientas de calidad (lint/format).
- Mejorar el despliegue: contenedorización (Docker) y pipeline CI/CD con GitHub Actions.

---

# 9. INNOVACIÓN Y PROSPECTIVA

La innovación del proyecto no se fundamenta en “inventar” el comercio electrónico, sino en la forma de diseñar e implementar una tienda online completa aplicando criterios técnicos propios de entornos profesionales: arquitectura desacoplada, modularidad, persistencia y seguridad, con un alcance realista para un proyecto académico.

Elementos innovadores de la solución desarrollada
1.	Arquitectura desacoplada basada en API REST
Se ha adoptado una separación clara entre interfaz y lógica de negocio mediante un frontend consumidor de una API REST y un backend independiente. Este enfoque mejora la mantenibilidad, facilita la escalabilidad y permite la evolución del sistema sin acoplar cambios de interfaz con cambios de servidor.
2.	Modelo de datos relacional consistente y normalizado
La solución incorpora un diseño de base de datos relacional normalizado (3FN), apoyado en claves primarias y foráneas, restricciones de integridad (CHECK) y políticas de borrado controladas (CASCADE/RESTRICT). Esta decisión refuerza la calidad del dato y reduce inconsistencias típicas en sistemas de catálogo, carrito y pedidos.
3.	Flujo de compra realista con control de consistencia
Se ha planteado el proceso de checkout como una operación compuesta (creación de pedido, inserción de líneas e impacto sobre stock), evitando estados intermedios incoherentes. Este tratamiento resulta relevante porque replica patrones habituales de sistemas reales, donde la consistencia entre operaciones es crítica.
4.	Autenticación moderna y escalable mediante JWT
Se ha implementado autenticación basada en JSON Web Tokens, alineada con arquitecturas sin estado. Esta aproximación permite gestionar el acceso de forma eficiente en aplicaciones desacopladas y deja preparada la ampliación hacia permisos, roles o estrategias de seguridad más avanzadas.
5.	Interfaz modular y coherente
La interfaz se ha construido con componentes reutilizables y criterios de diseño consistentes (guía de estilos, responsive y patrones repetibles). Esta modularidad reduce duplicidad, facilita la evolución del frontend y mejora la experiencia de usuario sin introducir complejidad innecesaria.
6.	Metodología y herramientas de trabajo similares a las de empresa
El desarrollo se ha apoyado en control de versiones con ramas, Pull Requests y un tablero Kanban para la planificación y seguimiento. Esta combinación aporta trazabilidad, mejora la calidad del código y reduce conflictos de integración, diferenciando el proyecto por su enfoque organizativo además del resultado técnico.

Encaje como mejora técnica en un contexto empresarial
La solución desarrollada resulta aplicable como base de un sistema real por su orientación a mantenibilidad, escalabilidad y consistencia. La separación por capas, el modelo de datos robusto y la autenticación mediante tokens permiten incorporar evoluciones (búsqueda avanzada, panel administrativo, historial de pedidos o nuevos clientes como móvil) sin reestructuraciones profundas, favoreciendo una mejora técnica progresiva en un entorno empresarial.

---

# 10. BIBLIOGRAFÍA (formato APA)

- Bootstrap. (s. f.). *Bootstrap Documentation*. https://getbootstrap.com/docs/5.0/getting-started/introduction/  
- Ecma International. (2024). *ECMAScript® 2024 Language Specification*. https://tc39.es/ecma262/  
- Express. (s. f.). *Express - Node.js web application framework*. https://expressjs.com/  
- GitHub. (s. f.). *GitHub Docs*. https://docs.github.com/  
- Mozilla Developer Network. (s. f.). *CSS*. https://developer.mozilla.org/docs/Web/CSS  
- Mozilla Developer Network. (s. f.). *HTML*. https://developer.mozilla.org/docs/Web/HTML  
- Mozilla Developer Network. (s. f.). *JavaScript*. https://developer.mozilla.org/docs/Web/JavaScript  
- Oracle. (s. f.). *UML Class Diagrams*. https://docs.oracle.com/cd/E19798-01/821-1770/bnbuk/index.html  
- React. (s. f.). *React Documentation*. https://react.dev/  
- RESTfulAPI.net. (s. f.). *REST API Best Practices*. https://restfulapi.net/  
- SQLite. (s. f.). *SQLite Documentation*. https://www.sqlite.org/docs.html  
- Vite. (s. f.). *Vite Guide*. https://vitejs.dev/guide/  
- Wikipedia contributors. (s. f.). *Entity–relationship model*. *Wikipedia*. https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model  
- W3Schools. (s. f.). *Database Normalization*. https://www.w3schools.com/sql/sql_ref_normalization.asp  

# 11. ANEXO
## MEJORAS FUTURAS

- [ ] Sistema de búsqueda y filtros avanzados
- [ ] Carrito persistente (localStorage)
- [ ] Historial de pedidos del usuario
- [ ] Sistema de favoritos / Wishlist
- [ ] Calificaciones y comentarios de usuarios
- [ ] Recomendaciones personalizadas
- [ ] Descuentos y cupones
- [ ] Sistema de notificaciones
- [ ] Integración con métodos de pago reales
- [ ] Panel administrativo completo

*Última actualización: 26 de Abril de 2026*  
*Versión del documento: 1.0*  
*Estado: ✅ Completado*  
*Autor: Equipo de Desarrollo DAM*  
*Fase: FINAL*