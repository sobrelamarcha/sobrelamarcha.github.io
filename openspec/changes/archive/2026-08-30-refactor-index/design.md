## Context

Sitio estático alojado en un repositorio de GitHub Pages. `index.html` concentra la maquetación, el CSS embebido (~260 líneas), el JavaScript de aplicación (~100 líneas) y los datos (array `schematics` con 2 esquemas). No existe build, bundler ni dependencias de terceros. Los códigos de esquema se copian desde el juego y se editan a mano al añadir un esquema nuevo.

## Goals / Non-Goals

**Goals:**
- Separar CSS (`styles.css`), JavaScript de aplicación (`app.js`) y datos (`data.js`) en archivos externos.
- Comportamiento y apariencia idénticos a la versión actual: sin cambios visuales ni funcionales.
- No añadir dependencias ni tooling de ningún tipo.

**Non-Goals:**
- No introducir módulos ES, build steps ni bundlers.
- No cambiar el esquema de datos del array `schematics` ni su contenido.
- No añadir funcionalidades nuevas.

## Decisions

1. **Archivos planos en la raíz del proyecto** (`styles.css`, `data.js`, `app.js`) en lugar de subcarpetas. Coherente con la estructura actual (`img/` en raíz) y con GitHub Pages, que sirve la raíz tal cual.
2. **`data.js` expone un global y se carga con `defer` antes que `app.js`.** `data.js` declara `const schematics = [...]` a nivel global; `app.js` lo consume directamente.
   - *Alternativa descartada:* módulos ES (`type="module"` + `import/export`). Requieren un servidor HTTP (CORS bloquea `file://`) y complican abrir el sitio localmente sin tooling.
3. **Atributo `defer` en ambos `<script>`.** Preserva el orden de ejecución (datos antes que aplicación) y no bloquea el renderizado del HTML.
4. **El CSS se copia íntegro y sin cambios** (mismo selector, variables y media queries). El comportamiento del botón "Copiar" y la búsqueda tampoco se altera.

## Risks / Trade-offs

- [Error de enlazado: olvidar `data.js` antes que `app.js`, o romper el orden con `defer`] → Mitigation: los dos scripts se enlazan consecutivos con `defer`; `app.js` consulta `schematics` al renderizar, validando que el global exista.
- [Mínima divergencia visual al trasladar el CSS] → Mitigation: mover el bloque `<style>` íntegro sin modificar ninguna regla; verificación visual en el navegador durante la implementación.
- [Prueba en `file://` vs servidor] → Mitigation: funciona igual en ambos por usar scripts clásicos; verificar con la página abierta directamente.