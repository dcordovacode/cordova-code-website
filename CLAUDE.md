# CLAUDE.md — cordova-code-website

Reglas de desarrollo para este repo, traducidas desde las instrucciones generales de Cordova Code
Solutions (negocio, stack, documentación, código) filtradas a lo que aplica a un sitio estático.
La fuente de verdad de negocio sigue viviendo en Google Drive ("Cordova Code Solutions") y en las
instrucciones generales que Diego mantiene fuera de este repo — este archivo es la traducción a
reglas de código, no la fuente original.

## Contexto de negocio

Cordova Code Solutions resuelve problemas de desarrollo de software, creación de sitios/sistemas a
medida, y manejo y análisis de datos en la nube, para personas o empresas que necesitan administrar
su información de forma eficiente. Empresa unipersonal en fase de fundación (sin clientes activos
todavía). Este repo **es** uno de esos productos: el sitio propio de la empresa, construido con los
mismos estándares que se le exigirían a un cliente.

## Alcance técnico de este repo

El stack general de la empresa (Python, APIs REST, AWS Lambda/Step Functions/DynamoDB/Aurora/
EventBridge/SQS, BigQuery) es para proyectos de backend/datos de clientes — **no aplica a este
repo**. `cordova-code-website` es un sitio estático (HTML/CSS/JS plano, sin build step ni
framework) y así debe mantenerse salvo decisión explícita en contrario. No traer dependencias de
ese stack (por ejemplo, no montar esto sobre Lambda o un backend Python) sin que se pida.

## Reglas de contenido

- `servicios.html` debe reflejar exactamente el catálogo de servicios real de la empresa. Si el
  catálogo cambia, esta página se actualiza — no debe divergir.
- Sitios a medida sí son un servicio real de la empresa; lo que no se ofrece es desarrollo de
  páginas genéricas/plantilla sin valor agregado. El copy debe siempre enmarcar el trabajo como
  solución a un problema de negocio, no como "hacemos páginas web".
- No inventar casos de éxito, testimonios ni métricas de clientes que no existan.
- Los proyectos en `proyectos.html` deben reflejar su estado real (Planificado / En desarrollo /
  En producción / Archivado) — no adelantar ni inflar alcance.
- CTAs claros pero sin prometer disponibilidad o servicios fuera de lo que realmente se ofrece.

## Reglas de documentación (README, CLAUDE.md, cualquier doc del repo)

- Todo documento abre con objetivo y contexto de negocio, nunca con tono de tutorial paso a paso.
- Explicar primero el **por qué** de una decisión, después el cómo.
- Documentación profesional y orientada tanto a clientes como a quien mantenga el código después.
- Estructura clara con encabezados; Markdown limpio y consistente.
- Toda decisión técnica relevante se justifica (propósito y beneficio), no se lista sin más.
- Evitar documentación redundante o excesivamente extensa — si algo ya es evidente en el código, no
  repetirlo en prosa.
- Usar diagramas Mermaid solo cuando aporten claridad real sobre arquitectura o flujos (para un
  sitio de 4 páginas planas, normalmente no hace falta).
- Tono profesional, técnico y conciso en todo momento.

> Nota: el README actual tiene una sección ("Proceso de creación") redactada como bitácora numerada
> paso a paso, lo cual choca con esta regla. Pendiente de reescribir en formato de decisiones de
> diseño (qué se decidió y por qué) en vez de lista de pasos — avisar antes de aplicar el cambio.

## Convenciones de código (HTML/CSS/JS)

- Nombres descriptivos para clases, ids y variables — sin abreviaturas ambiguas.
- Separación estricta de responsabilidades: contenido en HTML, estilo en `assets/styles.css`,
  comportamiento en `assets/script.js`. Nunca `<style>` o `<script>` inline nuevos.
- DRY: no duplicar reglas de CSS ni lógica de JS entre páginas.
- Legibilidad sobre micro-optimización (no minificar ni ofuscar manualmente).
- Comentarios solo cuando el HTML/CSS/JS no sea autoexplicativo por sí mismo.
- Consistencia total entre las 4 páginas (misma estructura de `<header>`/`<nav>`/`<footer>`).

## Checklist al agregar una página nueva

1. Crear el `.html` reutilizando el mismo `<header>`/`<nav>`/`<footer>` de las páginas existentes.
2. Enlazar `assets/styles.css` y `assets/script.js` — no estilos ni scripts inline.
3. Actualizar el `<nav>` en **todas** las páginas existentes para incluir el link nuevo.
4. Marcar `aria-current="page"` solo en el link de la página activa de cada archivo.
5. Reflejar el cambio estructural en `README.md`.

## Qué NO hacer

- No cambiar el stack de este repo (HTML/CSS/JS plano) salvo solicitud explícita.
- No introducir frameworks, librerías o build tools innecesarios.
- No sobreingenierizar: es un sitio estático simple, no necesita CMS, bundlers ni backend.
- No escribir documentación con tono de tutorial para principiantes.
- No asumir requisitos de negocio o servicios no especificados en el catálogo real.
- No eliminar páginas, secciones o funcionalidades existentes sin indicación explícita.
- No sacrificar legibilidad del código por reducir líneas.
- No usar patrones o abstracciones que agreguen complejidad sin beneficio claro.
- No escribir comentarios que solo repitan lo que el código ya dice.
- No inventar tecnologías, experiencia o funcionalidades que no existan en el proyecto real.

## Publicación y prioridad de canales

El orden de prioridad de la empresa es GitHub (portafolio) → LinkedIn → landing page, construida
recién cuando existan 1-2 casos de éxito o proyectos sólidos que mostrar. Este repo es esa landing
page: puede existir y desarrollarse ahora, pero la decisión de promocionarla activamente como canal
principal queda supeditada a tener más portafolio o clientes reales.
