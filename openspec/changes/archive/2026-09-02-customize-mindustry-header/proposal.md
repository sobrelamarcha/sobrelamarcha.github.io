## Why

El header de `mindustry.html` actualmente replica el header grande del hub (`index.html`), incluyendo "Bienvenido a" y el nombre del sitio en h1. Esto es redundante: el usuario ya fue bienvenido en el index. Las páginas de sección necesitan un header propio que refleje dónde está el usuario y facilite la navegación de vuelta al hub.

## What Changes

- **Header de mindustry.html** se reemplaza por un header compacto con:
  - Marca "SOBRE LA MARCHA" como etiqueta pequeña (no h1)
  - Nombre de la sección "Esquemas de Mindustry" como título principal
  - Descripción de la sección
  - Botón de retorno `← Volver al inicio` enlazando a `index.html`
  - Enlace a la lista de vídeos de la sección (ya existente)
- **Build note** se mueve del header al contenido principal (`<main>`)
- **Estilos CSS** se ajustan para el header compacto de sección

## Capabilities

### New Capabilities

- `section-header`: Header compacto para páginas de sección con marca, nombre de sección, navegación de retorno y enlace a contenido relacionado

### Modified Capabilities

- `section-hub`: El requisito de "header y footer compartidos" se relaja — el hub mantiene su header grande, las secciones usan el header compacto

## Impact

- `mindustry.html`: reestructuración del bloque `<header>`
- `styles.css`: nuevos estilos para header de sección, ajustes al header existente
- `index.html`: sin cambios (conserva su header de hub)
