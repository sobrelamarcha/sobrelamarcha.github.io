## MODIFIED Requirements

### Requirement: Catálogo impulsado por datos
La página SHALL generar el listado de esquemas a partir de un archivo de datos externo (`data.js`) que define el array global `schematics`, en lugar de maquetar cada esquema de forma estática en el HTML.

#### Scenario: Carga de datos externa
- **WHEN** la página carga con `data.js` enlazado antes que `app.js`
- **THEN** el listado se construye íntegramente a partir de los elementos del array `schematics`

#### Scenario: Incremento del catálogo sin tocar el HTML
- **WHEN** se añade un nuevo objeto al array `schematics` en `data.js`
- **THEN** la página muestra el nuevo esquema sin modificar la maquetación de `mindustry.html`

### Requirement: Renderizado del listado de esquemas
La página SHALL mostrar cada esquema del catálogo como una tarjeta con su imagen de vista previa, nombre, etiqueta de categoría, descripción, enlace de vídeo (o estado de vídeo pendiente) y el código del esquema con su control de copiado.

#### Scenario: Listado completo
- **WHEN** la página carga con N esquemas en el catálogo
- **THEN** se muestran N tarjetas, cada una con imagen, nombre, etiqueta, descripción, vídeo o estado pendiente, y el campo de código con su botón

#### Scenario: Esquema con vídeo publicado
- **WHEN** un esquema tiene una URL de vídeo definida
- **THEN** su tarjeta muestra un enlace "Ver el vídeo" que abre el vídeo en una pestaña nueva

#### Scenario: Esquema sin vídeo
- **WHEN** un esquema no tiene URL de vídeo (`video: null`)
- **THEN** su tarjeta muestra el estado "Vídeo todavía sin grabar" en lugar de un enlace

### Requirement: Búsqueda por nombre
La página SHALL filtrar el listado por el nombre del esquema de forma insensible a mayúsculas mientras el usuario escribe en el campo de búsqueda, actualizando el contador de resultados.

#### Scenario: Filtrado en tiempo real
- **WHEN** el usuario escribe un texto en el campo de búsqueda
- **THEN** solo se muestran los esquemas cuyo nombre contiene ese texto (sin distinguir mayúsculas) y el contador refleja el número de resultados

#### Scenario: Sin resultados
- **WHEN** ningún nombre de esquema contiene el texto buscado
- **THEN** el listado queda vacío, el contador muestra 0 y aparece el mensaje "No se ha encontrado ningún esquema con ese nombre"

#### Scenario: Borrado de la búsqueda
- **WHEN** el usuario vacía el campo de búsqueda
- **THEN** se vuelven a mostrar todos los esquemas del catálogo

### Requirement: Copiado del código
La página SHALL copiar el código de un esquema al portapapeles al pulsar su botón "Copiar" y mostrar una confirmación visual temporal.

#### Scenario: Copiado con confirmación
- **WHEN** el usuario pulsa el botón "Copiar" de una tarjeta
- **THEN** el código del esquema se copia al portapapeles, el botón muestra "Copiado" durante 1,5 segundos y luego vuelve a su estado original
