## 1. Extraer el CSS

- [x] 1.1 Crear `styles.css` en la raíz con el contenido íntegro del bloque `<style>` de `index.html` (variables, header, build-note, toolbar, tarjetas, media queries y footer), sin modificar ninguna regla

## 2. Extraer los datos

- [x] 2.1 Crear `data.js` en la raíz con el array `schematics` completo (los 2 esquemas actuales) expuesto como `const schematics` a nivel global, sin cambiar ningún campo ni código de esquema

## 3. Extraer el JavaScript de aplicación

- [x] 3.1 Crear `app.js` en la raíz con la lógica de render del listado (`render`), el filtro de búsqueda y el manejo del botón "Copiar" al portapapeles, consumiendo el global `schematics` de `data.js`

## 4. Actualizar index.html

- [x] 4.1 Sustituir el bloque `<style>` por `<link rel="stylesheet" href="styles.css">` en el `<head>`
- [x] 4.2 Sustituir el `<script>` embebido por `<script src="data.js" defer></script>` seguido de `<script src="app.js" defer></script>` antes de `</body>`

## 5. Verificación

- [x] 5.1 Abrir `index.html` en el navegador y comprobar que las tarjetas se renderizan con imagen, nombre, etiqueta, descripción, enlace de vídeo o estado pendiente, y el bloque de código
- [x] 5.2 Probar la búsqueda por nombre (resultados filtrados, mensaje de "sin resultados" y restauración al vaciar el campo) y el contador de esquemas
- [x] 5.3 Probar el botón "Copiar" de una tarjeta y confirmar el feedback "Copiado" de 1,5 s
- [x] 5.4 Comprobar el diseño responsive (contraer ventana a <700 px) y que `index.html` queda sin CSS ni JS embebidos