## 1. Renombrar archivos existentes

- [x] 1.1 Renombrar `index.html` → `mindustry.html`
- [x] 1.2 Actualizar referencia CSS en `mindustry.html` (sigue apuntando a `styles.css`, sin cambio)

## 2. Crear página de índice (hub)

- [x] 2.1 Crear nuevo `index.html` con estructura HTML completa (head, header, main, footer)
- [x] 2.2 Añadir las 3 cards de sección en el main: Mineclonia, OpenTTD, Mindustry
- [x] 2.3 Configurar card de Mindustry como activa con enlace a `mindustry.html`
- [x] 2.4 Configurar cards de Mineclonia y OpenTTD como deshabilitadas (clase `.coming-soon`)
- [x] 2.5 Añadir imágenes de referencia: `img/mindustry.png`, `img/mineclonia.png`, `img/openttd.png`

## 3. Estilos CSS para el hub

- [x] 3.1 Añadir estilos para `.hub-grid` (grid 3 columnas, centrado vertical)
- [x] 3.2 Añadir estilos para `.hub-card` (card compacta con imagen, nombre, descripción, botón)
- [x] 3.3 Añadir estilos para `.hub-card.coming-soon` (opacidad reducida, pointer-events none)
- [x] 3.4 Añadir estilos para `.hub-card .coming-soon-label` (texto "Próximamente" con icono candado)
- [x] 3.5 Añadir media query para responsive (1 columna en ≤700px)

## 4. Header y footer compartidos

- [x] 4.1 Asegurar que el header del hub usa la misma estructura que mindustry.html
- [x] 4.2 Ajustar tagline del hub a texto general (no específico de Mindustry)
- [x] 4.3 Verificar que el footer es idéntico en ambas páginas

## 5. Verificación y limpieza

- [x] 5.1 Verificar que `mindustry.html` funciona correctamente (búsqueda, copiado, renderizado)
- [x] 5.2 Verificar que el hub muestra las 3 cards en fila
- [x] 5.3 Verificar que la card de Mindustry navega a `mindustry.html`
- [x] 5.4 Verificar que las cards deshabilitadas muestran "Próximamente" y no son clickeables
- [x] 5.5 Actualizar `AGENTS.md` con la nueva estructura de archivos
- [x] 5.6 Actualizar `DESIGN.md` con los nuevos componentes del hub
