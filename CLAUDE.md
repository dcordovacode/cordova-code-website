# CLAUDE.md — cordova-code-website

Reglas de desarrollo para este repo, traducidas desde las instrucciones generales de Cordova Code
Solutions (negocio, stack, documentación, código) filtradas a lo que aplica a un sitio estático.
La fuente de verdad de negocio sigue viviendo en Google Drive ("Cordova Code Solutions") y en las
instrucciones generales que Diego mantiene fuera de este repo — este archivo es la traducción a
reglas de código, no la fuente original.

## Contexto de negocio

Cordova Code Solutions resuelve problemas de desarrollo de software, creación de sitios/sistemas a
medida, y manejo y análisis de datos en la nube, para personas o empresas que necesitan administrar
su información de forma eficiente. Empresa en fase de fundación. La estructura interna del equipo
no se expone públicamente por decisión de negocio — ver regla de voz de marca en "Reglas de
contenido". Este repo **es** uno de esos productos: el sitio propio de la empresa, construido con
los mismos estándares que se le exigirían a un cliente.

## Alcance técnico de este repo

El stack general de la empresa (Python, APIs REST, AWS Lambda/Step Functions/DynamoDB/Aurora/
EventBridge/SQS, BigQuery) es para proyectos de backend/datos de clientes — **no aplica a este
repo**. `cordova-code-website` es un sitio estático (HTML/CSS/JS plano, sin build step ni
framework) y así debe mantenerse salvo decisión explícita en contrario. No traer dependencias de
ese stack (por ejemplo, no montar esto sobre Lambda o un backend Python) sin que se pida.

Excepción explícita y ya aplicada: `cloud.html` carga la librería Mermaid vía CDN
(`cdn.jsdelivr.net/npm/mermaid`) para un diagrama de arquitectura. Es la única dependencia externa
del sitio — no agregar más sin que se pida explícitamente. La inicialización vive en
`assets/script.js` (guardada tras `typeof mermaid !== 'undefined'`), nunca en un `<script>` inline
nuevo dentro del HTML.

## Reglas de contenido

- La empresa tiene dos líneas de servicio, en orden de prioridad: **1. Cloud & Data Architecture**
  (especialización real del negocio — arquitectura serverless orientada a eventos en AWS, IA
  aplicada; es lo que se promociona activamente en LinkedIn/Instagram) y **2. Software Solutions**
  (línea genérica de desarrollo de software y sitios web). En cualquier sección de
  proyectos/servicios del sitio, Cloud & Data Architecture va primero, con mayor peso visual
  (tamaño, orden, cantidad de contenido) y mayor detalle técnico; Software Solutions va después,
  breve y con menor protagonismo. No mezclar ambas líneas en un mismo bloque de contenido. Cada
  línea tiene su propia página (`cloud.html`, `software.html`); `index.html` no duplica su
  contenido completo, solo lo resume y enlaza a ambas.
- El hero de `index.html` es genérico a nivel de empresa — no nombra "Cloud & Data Architecture"
  como primer contacto, aunque sea la línea prioritaria. Primero se presenta el problema/la empresa
  en términos neutros, y recién después la página bifurca visiblemente en las dos líneas.
- Los proyectos propios que se muestren en el sitio deben ubicarse en la línea de servicio a la que
  realmente pertenecen (hoy: PuntoTV, un proyecto de software, vive en `software.html`, no en una
  sección de "Cloud"), y reflejar su estado real (Planificado / En desarrollo / En producción /
  Archivado) — no adelantar ni inflar alcance.
- Voz de marca: el copy público nunca se escribe en primera persona singular (yo/mí) ni enfatiza
  que la empresa es una operación de una sola persona. Se usa voz de empresa (nosotros/la empresa)
  o formulaciones neutras — por ejemplo "Escríbenos", no "Escríbeme". Excepción: `perfil.html` es
  el perfil del fundador y puede usar primera persona si el contenido biográfico lo pide, pero el
  header/nav/footer compartidos siguen la misma regla que el resto del sitio. El detalle extenso de
  educación/experiencia vive en LinkedIn, no en el sitio — `perfil.html` es un resumen con link, no
  un CV completo.
- `cloud.html` y `software.html` deben reflejar exactamente el catálogo de servicios real de la
  empresa. Si el catálogo cambia, estas páginas se actualizan — no deben divergir.
- Sitios a medida sí son un servicio real de la empresa; lo que no se ofrece es desarrollo de
  páginas genéricas/plantilla sin valor agregado. El copy debe siempre enmarcar el trabajo como
  solución a un problema de negocio, no como "hacemos páginas web".
- No inventar casos de éxito, testimonios ni métricas de clientes que no existan.
- CTAs claros pero sin prometer disponibilidad o servicios fuera de lo que realmente se ofrece.

## `dev/` — portfolio personal de Diego

`dev/` es el portfolio personal de Diego (proyectos propios, experimentos, "cosas locas"), alojado
en el mismo dominio pero en ruta separada del sitio de negocio. Reutiliza `assets/styles.css` por
decisión explícita (consistencia, sin mantener dos sistemas de diseño), pero **no** sigue las
reglas de voz de marca ni de catálogo de servicios del resto del repo — es contenido personal, no
de Cordova Code Solutions:

- Puede usar primera persona y tono informal libremente — no aplica la regla de "voz de empresa".
- Los proyectos que se muestren ahí no necesitan encajar en Cloud & Data Architecture ni Software
  Solutions — son proyectos personales, no parte del catálogo de servicios de la empresa.
- El header/nav de `dev/` usa marca propia ("Diego Córdova" / "Dev Portfolio"), no la de la
  empresa, y enlaza de vuelta a `cordovacodes.com` y a `perfil.html` para quien busque lo
  profesional.
- Igual aplica: no inventar proyectos, capturas o descripciones que no existan — los proyectos
  listados deben corresponder a repos reales de `github.com/dcordovao`.

## Reglas de documentación (README, CLAUDE.md, cualquier doc del repo)

- Todo documento abre con objetivo y contexto de negocio, nunca con tono de tutorial paso a paso.
- Explicar primero el **por qué** de una decisión, después el cómo.
- Documentación profesional y orientada tanto a clientes como a quien mantenga el código después.
- Estructura clara con encabezados; Markdown limpio y consistente.
- Toda decisión técnica relevante se justifica (propósito y beneficio), no se lista sin más.
- Evitar documentación redundante o excesivamente extensa — si algo ya es evidente en el código, no
  repetirlo en prosa.
- Usar diagramas Mermaid solo cuando aporten claridad real sobre arquitectura o flujos (para un
  sitio de páginas planas como este, normalmente no hace falta).
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
- Consistencia total entre todas las páginas del sitio (misma estructura de
  `<header>`/`<nav>`/`<footer>`).

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
