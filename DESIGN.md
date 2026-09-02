# DESIGN.md — Sobre La Marcha

## Estructura del sitio

```
index.html        → Hub de navegación (3 cards)
mindustry.html    → Catálogo de esquemáticos
styles.css        → Estilos compartidos
```

- `index.html` es el punto de entrada. Enlaza a `mindustry.html` (activo) y a Mineclonia/OpenTTD (deshabilitados).
- Header y footer compartidos entre ambas páginas, con textos adaptables.

---

## Identidad visual

### Paleta de colores

| Token           | Hex       | Uso                              |
| --------------- | --------- | -------------------------------- |
| `--bg`          | `#0a0d0b` | Fondo principal                  |
| `--surface`     | `#121714` | Tarjetas, superficies elevadas   |
| `--surface-2`   | `#1a211c` | Fondo de thumbnails, textarea    |
| `--border`      | `#26302a` | Bordes principales               |
| `--border-soft` | `#1e2620` | Grid de fondo, bordes sutiles    |
| `--text`        | `#e9ede9` | Texto principal                  |
| `--text-dim`    | `#8a988f` | Texto secundario, descripciones  |
| `--gold`        | `#dba646` | Acentos, títulos, botón copiar   |
| `--gold-dim`    | `#8a6a30` | Bordes dorados apagados          |
| `--green`       | `#5f9a5a` | Tags de categoría                |
| `--cyan`        | `#5ed3e3` | Links, foco, feedback de copiado |

### Tipografías

| Fuente             | Pesos         | Uso                                       |
| ------------------ | ------------- | ----------------------------------------- |
| **Chakra Petch**   | 500, 600, 700 | Títulos, nombre del sitio                 |
| **Inter**          | 400, 500      | Texto general, cuerpo                     |
| **JetBrains Mono** | 400, 500      | Monospace: tags, código, footer, búsqueda |

### Efectos visuales

- **Grid de fondo**: Dos `linear-gradient` superpuestos creando cuadrícula de 36×36px
- **Thumbnail**: Patrón de tablero (transparencia) con esquinas decorativas doradas (`::before`, `::after` + elementos extra)
- **Regla del header**: `clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%)` — forma trapezoidal
- **Gradiente del header**: `linear-gradient(180deg, rgba(95,154,90,0.10), transparent 70%)`

---

## Layout

### Header

- Centrado, padding `56px 24px 40px`
- Contenido: eyebrow → h1 → sub → rule → yt-link → build-note
- `build-note`: borde izquierdo cyan, fondo surface

### Main

- `max-width: 980px`, centrado, padding `48px 24px 100px`

### Toolbar

- Flexbox: búsqueda (flex:1) + contador
- Búsqueda: fondo surface, borde border, foco cyan

### Tarjetas (`.card`)

- CSS Grid: `grid-template-columns: 290px 1fr`
- Responsive: colapsa a `1fr` en `max-width: 700px`
- Contenido: thumbnail + bloque de info (nombre, tag, descripción, video, código, botón copiar)

### Footer

- Centrado, borde superior sutil
- Texto dim, JetBrains Mono 12px

---

## Paleta oscura — Design tokens

```css
:root {
  /* Superficies */
  --bg: #0a0d0b;
  --surface: #121714;
  --surface-2: #1a211c;

  /* Bordes */
  --border: #26302a;
  --border-soft: #1e2620;

  /* Texto */
  --text: #e9ede9;
  --text-dim: #8a988f;

  /* Acentos */
  --gold: #dba646;
  --gold-dim: #8a6a30;
  --green: #5f9a5a;
  --cyan: #5ed3e3;
}
```

---

## Componentes

### Thumbnail (`.thumb`)

- Proporción: `aspect-ratio: 725/257`
- Fondo: patrón tablero (transparencia)
- Imagen: `object-fit: contain`, `image-rendering: pixelated`
- Esquinas: 4 pseudo/elements decorativos con borde dorado

### Tarjeta de esquemático (`.card`)

- Grid de 2 columnas (thumbnail + contenido)
- Contenido con flexbox vertical, gap 12px
- Nombre: Chakra Petch 600 19px
- Tag: JetBrains Mono 11px, borde redondeado 20px, color green
- Descripción: Inter 13.5px, text-dim
- Video link: JetBrains Mono 12px cyan
- Video pendiente: JetBrains Mono 12px italic, text-dim

### Código + Botón copiar

- Fila flex con textarea (flex:1) + botón (76px)
- Textarea: JetBrains Mono 11.5px, fondo surface-2, resize vertical
- Botón: borde dorado, icono + texto vertical
- Feedback: estado `.copied` cambia borde/texto a cyan por 1.5s

### Botón YouTube

- Inline-flex, borde dorado redondeado 20px
- Icono SVG + texto
- Hover: borde y color más brillantes

### Hub Grid (`.hub-grid`)

- CSS Grid: `grid-template-columns: repeat(3, 1fr)`, gap 24px
- Centrado vertical: `min-height: 50vh` + `align-items: center`
- Responsive: colapsa a 1 columna en `max-width: 700px`

### Hub Card (`.hub-card`)

- Superficie oscura, borde sutil, border-radius 6px
- Imagen: `aspect-ratio: 16/9`, fondo checkerboard, `object-fit: contain`
- Título: Chakra Petch 18px 600
- Descripción: Inter 13.5px text-dim
- Botón: JetBrains Mono 12px, borde dorado

### Hub Card Deshabilitada (`.hub-card.coming-soon`)

- Opacidad reducida: `opacity: .45`
- Sin interacción: `pointer-events: none`
- Imagen con `filter: grayscale(60%)`
- Botón reemplazado por label "🔒 Próximamente"

---

## Responsive

| Breakpoint | Cambios                                       |
| ---------- | --------------------------------------------- |
| `> 700px`  | Grid 290px + 1fr en tarjetas                  |
| `≤ 700px`  | Tarjeta colapsa a 1 columna, thumbnail arriba |

---

## Iconos

- YouTube: SVG inline en `index.html` (path viewBox 24×24)
- Copiar: SVG inline en `app.js` (generado dinámicamente)

---

## Espaciado y dimensiones clave

| Elemento                 | Valor               |
| ------------------------ | ------------------- |
| Header padding           | 56px 24px 40px      |
| Main max-width           | 980px               |
| Main padding             | 48px 24px 100px     |
| Card gap (lista)         | 22px                |
| Card grid col            | 290px + 1fr         |
| Thumbnail aspect         | 725/257             |
| Thumbnail padding        | 10px                |
| Thumbnail corners        | 16×16px, offset 8px |
| Code textarea min-height | 80px                |
| Code textarea max-height | 160px               |
| Copy button width        | 76px                |
| Build-note max-width     | 640px               |
| Rule width               | 120px, height 3px   |
| Grid background          | 36×36px             |
