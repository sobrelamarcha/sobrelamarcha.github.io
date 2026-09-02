## Purpose

Define el header compacto para páginas de sección del sitio, con marca, nombre de sección, navegación de retorno y enlace a contenido relacionado.

## Requirements

### Requirement: Header compacto de sección
Las páginas de sección SHALL usar un header compacto que muestre la marca del sitio como etiqueta pequeña, el nombre de la sección como título principal y una descripción breve.

#### Scenario: Estructura del header de sección
- **WHEN** se carga una página de sección (`mindustry.html`)
- **THEN** el header contiene: marca "SOBRE LA MARCHA" en texto pequeño, separador visual, nombre de la sección como foco principal, descripción de la sección y acciones de navegación

#### Scenario: Marca como etiqueta
- **WHEN** se renderiza el header de sección
- **THEN** la marca "SOBRE LA MARCHA" se muestra en mayúsculas con fuente JetBrains Mono, tamaño pequeño, posicionada arriba como contexto

#### Scenario: Nombre de sección como foco
- **WHEN** se renderiza el header de sección
- **THEN** el nombre de la sección ("Esquemas de Mindustry") se muestra como el elemento visualmente dominante del header

### Requirement: Botón de retorno al hub
El header de sección SHALL incluir un enlace de retorno al hub (`index.html`) con texto `← Volver al inicio`.

#### Scenario: Navegación de retorno
- **WHEN** el usuario pulsa el enlace "Volver al inicio"
- **THEN** se navega a `index.html`

#### Scenario: Estilo del enlace de retorno
- **WHEN** se renderiza el enlace de retorno
- **THEN** usa fuente JetBrains Mono, tamaño pequeño, color consistente con la paleta del sitio

### Requirement: Enlace a contenido relacionado
El header de sección SHALL incluir un enlace a la playlist de YouTube de la sección.

#### Scenario: Enlace a playlist
- **WHEN** se renderiza el header de sección de Mindustry
- **THEN** se muestra un enlace "▶ Lista de vídeos" que abre la playlist en una pestaña nueva

### Requirement: Build note en contenido principal
La build note de la página de sección SHALL mostrarse en `<main>`, no en el `<header>`.

#### Scenario: Posición de la build note
- **WHEN** se carga la página de sección
- **THEN** la build note aparece al inicio de `<main>`, antes del toolbar de búsqueda
