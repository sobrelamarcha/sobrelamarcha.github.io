## Context

`mindustry.html` es una página de sección del sitio "Sobre La Marcha". Actualmente comparte el mismo header grande que `index.html` (el hub), incluyendo el saludo "Bienvenido a" y el h1 del sitio. El hub usa la página de inicio como punto de entrada, mientras que las secciones son contenido específico al que se accede desde el hub.

El sitio es vanilla HTML/CSS/JS sin build tools. GitHub Pages sirve `main` directamente.

## Goals / Non-Goals

**Goals:**
- Header de sección compacto que refleje la ubicación actual del usuario
- Botón de retorno al hub para navegación clara
- Marca "Sobre La Marcha" presente pero no dominante
- Mantener el enlace a la playlist de YouTube de la sección

**Non-Goals:**
- Cambiar el header del hub (`index.html`)
- Añadir navegación entre secciones (solo retorno al hub)
- Modificar el contenido de `<main>` más allá de mover la build note

## Decisions

### 1. Estructura del header de sección

**Decisión:** Header compacto con marca como etiqueta, nombre de sección como foco, y acciones de navegación al final.

```
┌─────────────────────────────────────────────────┐
│  SOBRE LA MARCHA                                │
│  ───────────────────────────────────────────    │
│  Esquemas de Mindustry                          │
│  Experimentos con los esquemas del canal        │
│                                                 │
│  ← Volver al inicio     ▶ Lista de vídeos      │
└─────────────────────────────────────────────────┘
```

**Alternativas consideradas:**
- Breadcrumb `Inicio > Mindustry`: más compacto pero menos expresivo
- Solo `← Volver` sin texto de marca: pierde identidad del sitio
- Header horizontal tipo navbar: rompe la estética vertical del sitio

**Razón:** Mantiene la jerarquía visual vertical existente pero en formato compacto. La marca queda como contexto permanente sin competir con el nombre de sección.

### 2. Build note se mueve a main

**Decisión:** La build note (aviso de "estos esquemas podrían no funcionar") se mueve del `<header>` al inicio de `<main>`, antes del toolbar de búsqueda.

**Razón:** La build note es contenido informativo, no parte de la identidad o navegación del header. En el header compacto no hay espacio suficiente, y en main queda más natural como advertencia antes del catálogo.

### 3. CSS: clase `.section-header`

**Decisión:** Crear una nueva clase CSS `.section-header` para el header de sección, en lugar de reutilizar los estilos de `header` del hub.

**Razón:** Evita condicionales en CSS o especificidad excesiva. Los estilos son lo suficientemente distintos (padding reducido, h1 más pequeño, estructura de acciones) como para justificar una clase separada. El selector `header.section-header` permite aplicar estilos específicos sin afectar al hub.

## Risks / Trade-offs

- **[Riesgo]** Si en el futuro se añaden más secciones, cada una necesitará su propio header de sección → **Mitigación:** La estructura es reutilizable; solo cambia el texto del nombre y descripción de sección
- **[Trade-off]** Se pierde el enlace al canal de YouTube general del sitio en la página de sección → **Mitigación:** El enlace al canal está en el footer y en el hub, que es donde llega el usuario primero
