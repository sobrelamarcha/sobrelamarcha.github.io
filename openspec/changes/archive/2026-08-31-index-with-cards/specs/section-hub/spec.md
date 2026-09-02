## ADDED Requirements

### Requirement: Página de índice como hub de navegación
El sitio SHALL mostrar una página de índice (`index.html`) que sirva como punto de entrada con cards de navegación a las secciones del sitio.

#### Scenario: Carga del hub
- **WHEN** el usuario navega a la raíz del sitio (`/`)
- **THEN** se muestra la página de índice con el header del sitio y 3 cards de sección centradas verticalmente

### Requirement: Cards de sección con imagen, descripción y botón
Cada card de sección SHALL mostrar una imagen representativa, una descripción de la sección y un botón de acceso.

#### Scenario: Estructura de cada card
- **WHEN** se renderiza una card de sección
- **THEN** la card contiene: imagen (`img/{seccion}.png`), nombre de la sección, descripción breve y un botón de acción

#### Scenario: Layout de las cards
- **WHEN** la página carga con 3 secciones definidas
- **THEN** las 3 cards se muestran en fila (grid de 3 columnas), centradas verticalmente en el viewport

### Requirement: Sección activa con enlace funcional
La card de Mindustry SHALL estar activa y enlazar a `mindustry.html`.

#### Scenario: Navegación a Mindustry
- **WHEN** el usuario pulsa el botón de la card de Mindustry
- **THEN** se navega a `mindustry.html`

### Requirement: Secciones en construcción deshabilitadas
Las cards de Mineclonia y OpenTTD SHALL estarán deshabilitadas con un indicador visual de "Próximamente".

#### Scenario: Card deshabilitada
- **WHEN** una sección está marcada como "próximamente"
- **THEN** la card muestra opacidad reducida, el botón se reemplaza por el texto "Próximamente" con icono de candado, y no es clickeable

#### Scenario: Indicador visual de construcción
- **WHEN** el usuario visualiza una card deshabilitada
- **THEN** puede identificar claramente que la sección existe pero no está disponible aún

### Requirement: Header y footer compartidos
El hub SHALL usar la misma estructura de header y footer que las páginas de sección, con textos adaptables.

#### Scenario: Header del hub
- **WHEN** se carga el index.html
- **THEN** el header muestra el nombre del sitio, un tagline general, el enlace al canal de YouTube y la nota de construcción

#### Scenario: Footer del hub
- **WHEN** se carga el index.html
- **THEN** el footer es idéntico al de las páginas de sección
