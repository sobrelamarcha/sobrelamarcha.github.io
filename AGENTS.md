# AGENTS.md — Sobre La Marcha

## Estado actual del sitio (2026-10-25)

### Archivos

- `index.html` — Hub de navegación con 3 cards de sección (Mineclonia, OpenTTD, Mindustry)
- `mindustry.html` — Página de esquemáticos de Mindustry (buscador, tarjetas, copiado)
- `styles.css` — Estilos compartidos (~310 líneas)
- `app.js` — Renderizado y lógica de búsqueda/copiado
- `data.js` — Array de esquemáticos (9 entradas actualmente)
- `img/` — Screenshots: `1-1_duos.webp`, `1-2_energia.webp`, `1-3_grafito.webp`, `2-1_grafito.webp`, `2-2_scatters.webp`, `2-3_silicio.webp`, `2-4_duos.webp`, `6_grafito.webp`, `7_silicio.webp`, `sections/mindustry.webp`, `sections/mineclonia.webp`, `sections/openttd.webp`

### Estructura

```
sobrelamarcha.github.io/
├── index.html          ← Hub (3 cards de sección)
├── mindustry.html      ← Catálogo de esquemáticos
├── styles.css          ← Estilos compartidos
├── app.js              ← Lógica Mindustry
├── data.js             ← Datos de esquemáticos
├── img/                ← Imágenes
├── AGENTS.md           ← Este archivo
├── DESIGN.md           ← Documento de diseño
├── README.md
├── _design/            ← Fuentes de diseño (PSD)
└── openspec/           ← Gestión de cambios
```

### Colores

- Fondo: `#0a0d0b` | Superficie: `#121714` | Dorado: `#dba646` | Verde: `#5f9a5a` | Cyan: `#5ed3e3`

### Fuentes

- Chakra Petch (títulos), Inter (cuerpo), JetBrains Mono (monospace)

## Reglas

- Mantener este archivo actualizado cuando la estructura o el estado del sitio cambien.
- Sin build tools, sin dependencias. Todo vanilla HTML/CSS/JS.
- GitHub Pages sirve `main` directamente.
