## MODIFIED Requirements

### Requirement: Header y footer compartidos
El hub SHALL usar un header propio (header grande con "Bienvenido a", h1 del sitio, tagline general, enlace al canal de YouTube y build note). Las páginas de sección SHALL usar un header compacto diferente (ver spec `section-header`).

#### Scenario: Header del hub
- **WHEN** se carga el `index.html`
- **THEN** el header muestra el nombre del sitio en h1 grande, el saludo "Bienvenido a", un tagline general, el enlace al canal de YouTube y la nota de construcción

#### Scenario: Header de sección
- **WHEN** se carga una página de sección (`mindustry.html`)
- **THEN** el header es compacto: marca como etiqueta pequeña, nombre de sección como foco, enlace de retorno al hub y enlace a contenido relacionado de la sección

#### Scenario: Footer del hub
- **WHEN** se carga el `index.html`
- **THEN** el footer es idéntico al de las páginas de sección
