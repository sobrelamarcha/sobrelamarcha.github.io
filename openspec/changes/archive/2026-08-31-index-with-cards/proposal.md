## Why

El sitio actual usa `index.html` como la sección de Mindustry directamente. A medida que el canal crece con más juegos (Mineclonia, OpenTTD), se necesita una página de índice que sirva como punto de entrada y permita navegar entre secciones. Renombrar `index.html` a `mindustry.html` y crear un nuevo `index.html` con cards de navegación es el paso lógico para escalar el sitio.

## What Changes

- **BREAKING**: Renombrar `index.html` → `mindustry.html` (la URL raíz ahora muestra el hub, no Mindustry directamente)
- Crear nuevo `index.html` como página de índice con 3 cards de sección (Mineclonia, OpenTTD, Mindustry)
- Las cards de Mineclonia y OpenTTD estarán deshabilitadas ("Próximamente") hasta que esas secciones existan
- Compartir header y footer entre el hub y mindustry.html
- Referenciar imágenes placeholders (`img/mindustry.png`, `img/mineclonia.png`, `img/openttd.png`) que el usuario creará manualmente
- `app.js` y `data.js` siguen funcionando sin cambios en `mindustry.html`

## Capabilities

### New Capabilities
- `section-hub`: Página de índice con cards de navegación entre secciones del sitio (Mineclonia, OpenTTD, Mindustry), incluyendo estados activos y "próximamente"

### Modified Capabilities
- `schematic-listing`: Cambio menor — la página ahora se sirve desde `mindustry.html` en lugar de `index.html`. Los requerimientos funcionales no cambian, solo la ubicación del archivo.

## Impact

- `index.html` → eliminado y reemplazado por nuevo hub
- `mindustry.html` → renombrado desde `index.html` (mismo contenido)
- `styles.css` → se añaden estilos para las cards del hub (grid 3 columnas, estado disabled)
- `AGENTS.md` → actualizar estructura de archivos y referencia a mindustry.html
- `DESIGN.md` → documentar nuevos componentes (hub cards)
- Enlaces externos al YouTube: el link actual apunta a la raíz, que ahora será el hub (correcto, sin problema)
