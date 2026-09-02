## Why

`index.html` concentra la maquetación junto con ~260 líneas de CSS y ~100 de JavaScript embebidos, incluyendo el listado de esquemas. Eso dificulta el mantenimiento: cualquier ajuste de estilo, de comportamiento o de contenido obliga a tocar un único archivo grande. Este es un sitio estático desplegado en GitHub Pages, sin mecanismo de build, por lo que separar el CSS y el JS en archivos externos es la opción natural.

## What Changes

- Extraer el bloque `<style>` de `index.html` a un nuevo archivo `styles.css`.
- Extraer el array `schematics` a un nuevo archivo `data.js`, expuesto globalmente y cargado antes que el JavaScript de la aplicación.
- Extraer el JavaScript restante (render del listado, filtro de búsqueda y botón "Copiar") a un nuevo archivo `app.js`.
- En `index.html`, sustituir el `<style>` por un `<link rel="stylesheet" href="styles.css">` y el `<script>` por `<script src="data.js" defer></script>` y `<script src="app.js" defer></script>`.
- El resultado debe verse y funcionar idéntico: listado de esquemas, filtro por nombre, copiado de código y enlaces de vídeo (o su estado "pendiente").
- No se modifica ningún comportamiento ni contenido: es una refactorización puramente estructural.

## Capabilities

### New Capabilities

- `schematic-listing`: comportamiento de la página — mostrar el listado de esquemas de Mindustry, filtrarlo por nombre mediante la búsqueda, copiar el código de cada esquema al portapapeles y enlazar el vídeo correspondiente o mostrar el estado de vídeo pendiente.

### Modified Capabilities

<!-- No existing capabilities yet: openspec/specs/ is empty. -->

## Impact

- `index.html` se reduce a la maquetación; se eliminan el `<style>` y el `<script>` embebidos.
- Nuevos archivos en la raíz del proyecto: `styles.css`, `data.js` y `app.js`.
- Sin dependencias nuevas, sin build ni herramientas adicionales.
- Los códigos de esquema y el contenido existente se conservan tal cual.