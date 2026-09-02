## Context

El sitio "Sobre La Marcha" es un catálogo estático de esquemáticos de Mindustry alojado en GitHub Pages. Actualmente `index.html` es directamente la sección de Mindustry. El canal de YouTube cubre múltiples juegos, por lo que se necesita una página de índice que actúe como hub de navegación.

**Estado actual:**
- `index.html` = sección Mindustry (header + buscador + tarjetas + footer)
- `styles.css` = 250 líneas, tema oscuro con variables CSS
- `app.js` + `data.js` = lógica de renderizado y datos de esquemáticos
- `img/` = screenshots de esquemáticos

**Restricciones:**
- Sin build tools, sin dependencias, CSS/JS vanilla
- GitHub Pages sirve la rama `main` directamente
- El usuario creará las imágenes manualmente después

## Goals / Non-Goals

**Goals:**
- Crear un `index.html` como hub con 3 cards de sección (Mineclonia, OpenTTD, Mindustry)
- Las 3 cards visibles en fila, centradas verticalmente, con imagen + descripción + botón
- Mineclonia y OpenTTD deshabilitadas con mensaje "Próximamente"
- Mindustry activa y funcional (enlaza a `mindustry.html`)
- Header y footer compartidos entre hub y mindustry.html
- Mantener `app.js`, `data.js` y la funcionalidad de Mindustry sin cambios

**Non-Goals:**
- No se crearán las secciones de Mineclonia ni OpenTTD (solo la card)
- No se añade JavaScript al hub (es puramente estático)
- No se cambia la funcionalidad de búsqueda/copiado de Mindustry
- No se añaden animaciones complejas ni transiciones entre páginas

## Decisions

### Decision 1: Un solo `styles.css` compartido

**Elección:** Un único archivo CSS para ambas páginas.

**Alternativas consideradas:**
- CSS separados (`styles-hub.css` + `styles.css`): Más limpio pero duplica variables y requiere mantener dos archivos.

**Razón:** Consistente con la filosofía del proyecto (minimalista, sin build tools). Los estilos del hub son ~40 líneas adicionales. Las variables CSS compartidas aseguran coherencia visual.

### Decision 2: CSS Grid de 3 columnas para las cards del hub

**Elección:** `display: grid; grid-template-columns: repeat(3, 1fr)` con responsive a 1 columna en `max-width: 700px`.

**Alternativas consideradas:**
- Flexbox: Funcional pero Grid es más semántico para layout 2D.
- Carrusel: Complejidad innecesaria para 3 elementos.

**Razón:** Grid ya se usa en las tarjetas de esquemáticos. Consistencia con el patrón existente. Responsive natural con media query existente.

### Decision 3: Header compartido con textos adaptables

**Elección:** El header del hub usa la misma estructura HTML (eyebrow + h1 + sub + rule + yt-link + build-note) pero con un tagline general. `mindustry.html` conserva el tagline específico de esquemáticos.

**Razón:** Reutiliza el estilo existente sin cambios estructurales. El usuario puede ajustar los textos fácilmente.

### Decision 4: Cards deshabilitadas con CSS `opacity` y `pointer-events: none`

**Elección:** Las cards de Mineclonia y OpenTTD usan una clase `.coming-soon` que aplica opacidad reducida, cursor por defecto, y el botón se reemplaza por un texto "Próximamente" con icono de candado.

**Alternativas consideradas:**
- Overlay visual sobre toda la card: Más agresivo visualmente.
- Solo deshabilitar el botón: El usuario podría confundirse al ver la card "clicable".

**Razón:** La opacidad comunica claramente que la sección no está disponible sin ocultarla completamente. El usuario sabe que existe pero no está lista.

### Decision 5: Imágenes placeholder referenciadas

**Elección:** Referenciar `img/mindustry.png`, `img/mineclonia.png`, `img/openttd.png` como `src` de las cards. El usuario las creará manualmente.

**Razón:** Evita tener que crear imágenes temporales. El checkerboard pattern de `.thumb` ya sirve como fallback visual si la imagen no carga.

## Risks / Trade-offs

- **[Riesgo]** Enlaces externos existentes (YouTube) apuntan a la raíz → **Mitigación:** El nuevo `index.html` sirve en la raíz, así que los enlaces siguen funcionando. El contenido de Mindustry se accesibilidad vía `/mindustry.html`.

- **[Riesgo]** Las imágenes placeholder no existen → **Mitigación:** El CSS de thumbnails ya tiene un patrón de tablero como fondo. Si la imagen no carga, se ve el patrón. El usuario sabrá que debe crear las imágenes.

- **[Trade-off]** Header compartido pero con textos diferentes → Aceptable porque la estructura HTML es idéntica, solo cambia el contenido textual.

- **[Trade-off]** `app.js` y `data.js` no se cargan en el hub → Correcto, el hub es estático. Si en el futuro se necesita JS en el hub, se añadirá un script específico.
