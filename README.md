# cordova-code-website

Sitio web público de **Cordova Code Solutions**. Presenta las dos líneas de servicio de la
empresa (Cloud & Data Architecture y Software Solutions), un proyecto propio en desarrollo
(PuntoTV, dentro de Software Solutions), y el perfil de su fundador, Diego Córdova Opazo.

## Propósito

Mientras la empresa está en fase de fundación (sin clientes activos todavía), este sitio cumple
tres funciones:

1. **Catálogo de servicios** — qué resuelve Cordova Code Solutions, en sus dos líneas priorizadas,
   para que un prospecto entienda la oferta sin necesitar una llamada previa.
2. **Vitrina de proyecto propio** — evidencia de trabajo real (PuntoTV, dentro de `software.html`)
   mientras no existen casos de éxito de clientes que mostrar.
3. **Perfil del fundador** — experiencia (Airnguru, Copec) y stack técnico, como respaldo de
   credibilidad técnica detrás de la oferta.

Nota de estrategia: la documentación interna de la empresa (`plan-marketing`, en Google Drive)
prioriza construir primero portafolio en GitHub y presencia en LinkedIn, dejando la landing page
para cuando existan casos de éxito sólidos. Este sitio se construye antes de ese punto, como base
técnica lista para publicarse — la decisión de cuándo promocionarlo activamente queda pendiente de
que haya más proyectos o clientes que mostrar.

## Estructura

Sitio estático multi-página, sin build step ni framework — HTML/CSS/JS planos, para poder
publicarse directamente en GitHub Pages o cualquier hosting estático.

```
cordova-code-website/
├── index.html          Inicio genérico — luego bifurca a las dos líneas de servicio
├── cloud.html           Cloud & Data Architecture (especialización principal)
├── software.html        Software Solutions + proyecto propio (PuntoTV)
├── perfil.html           Resumen del fundador, stack técnico, link a LinkedIn y al dev portfolio
├── dev/                  Portfolio personal de Diego (proyectos propios, no de la empresa)
│   ├── index.html       Landing personal — foto informal, novedades, links a redes
│   └── proyectos.html   Bloques de proyectos personales, enlazan a sus repos en GitHub
├── assets/
│   ├── styles.css       Hoja de estilos compartida por todas las páginas (incluye dev/)
│   ├── script.js        Toggle del menú móvil + init de Mermaid (compartido)
│   ├── favicon.svg      Ícono de marca (mark abstracto, paleta navy/amber/teal)
│   ├── og-image.svg     Diseño fuente para preview en redes — ver nota abajo
│   └── img/             Fotos (ej. diego_formal.jpg, usada en dev/index.html)
└── README.md
```

Cada página repite el mismo `<header>`/`<nav>`/`<footer>` (no hay motor de plantillas): al agregar
una página nueva, hay que actualizar la barra de navegación en los demás archivos `.html` para que
apunten a ella, y marcar `aria-current="page"` en el enlace correspondiente a la página activa.

### Contenido por página

- **index.html**: hook genérico a nivel de empresa (no nombra Cloud & Data Architecture como primer
  elemento) y una sección "Dos líneas de trabajo" que bifurca, resume y enlaza a `cloud.html` y
  `software.html` — no duplica su contenido completo.
- **cloud.html**: especialización principal. Auditoría técnica, arquitectura serverless,
  automatización de procesos, datos/ETL, IA aplicada y mantenimiento mensual — con la auditoría
  marcada como servicio de entrada, y una sección de "por qué arquitectura serverless" con el
  razonamiento técnico detrás de las decisiones de arquitectura.
- **software.html**: línea complementaria, breve — sitios y funcionalidades a medida, para cuando
  el problema no requiere arquitectura cloud. Incluye la ficha del proyecto propio PuntoTV (control
  remoto trackpad para TV, en fase de prototipado) como evidencia de trabajo real.
- **perfil.html**: resumen breve del fundador (educación, experiencia, especialización) con link a
  LinkedIn, y el stack técnico agrupado por categoría. Reemplaza el timeline detallado que tenía
  antes `sobre-mi.html` — el historial completo vive en LinkedIn, no en el sitio. Enlaza al dev
  portfolio personal (`dev/`) para quien busque proyectos fuera de lo profesional.
- **dev/**: portfolio personal de Diego, deliberadamente separado del sitio de negocio en contenido
  y tono (más informal), aunque reutiliza el mismo sistema visual (`assets/styles.css`) por
  consistencia y para no mantener dos hojas de estilo. `index.html` es la landing (foto, intro,
  novedades); `proyectos.html` son bloques de proyectos personales que enlazan directo a sus repos
  en GitHub — no hay páginas de detalle propias todavía.

## Proceso de creación

1. **Borrador inicial de una sola página** (aportado por Diego): un solo `index.html` con
   `<style>` inline y navegación por JavaScript (mostrar/ocultar secciones `<section class="page">`
   sin recargar, vía `showPage()`).
2. **Revisión del contexto del proyecto**: antes de construir, se leyó la documentación de la
   empresa en Google Drive (carpeta "Cordova Code Solutions") — `README` de la empresa,
   `contexto-empresa`, `catalogo-servicios`, `plan-marketing`, `stack-tecnologico` y
   `proyectos-activos` — para alinear el sitio con la estrategia y el catálogo real de servicios en
   vez de inventar contenido genérico.
3. **Decisiones de alcance** (confirmadas con Diego):
   - Agregar una página de Servicios alineada al catálogo real de 6 servicios.
   - Reemplazar los proyectos placeholder por el proyecto real documentado, PuntoTV.
   - Pasar de una sola página con navegación por JS a un sitio multi-página real (un `.html` por
     sección), por SEO y simplicidad de mantenimiento.
4. **Extracción de la hoja de estilos** compartida (`assets/styles.css`) desde el `<style>` inline
   del borrador original, quitando las reglas específicas del modo single-page
   (`section.page.active`, animación de cambio de página) que ya no aplican.
5. **Extracción del script de navegación** (`assets/script.js`): se mantiene solo el toggle del
   menú móvil; se elimina `showPage()` porque la navegación ahora es real (enlaces `<a href>` entre
   archivos).
6. **Construcción de las 4 páginas** (`index.html`, `servicios.html`, `proyectos.html`,
   `sobre-mi.html`), cada una enlazando la hoja de estilos y el script compartidos, con navegación
   real entre archivos y `aria-current="page"` fijado en el enlace activo de cada una.
7. **Este README**, documentando el propósito, la estructura y el proceso.
8. **Verificación en navegador** (siguiente paso): servir el sitio localmente y recorrer todas las
   páginas y el menú móvil antes de dar por cerrada la estructura base.
9. **Reestructuración Servicios → Cloud & Data / Software** (decisión de negocio): Cloud & Data
   Architecture es la especialización real y necesitaba su propia página con más profundidad
   técnica; Software Solutions pasó a ser secundaria. Se retiró `servicios.html` y su contenido se
   repartió en `cloud.html` y `software.html`, con `index.html` como página que unifica y enlaza
   ambas líneas en vez de listarlas juntas.
10. **Voz de marca**: se retiró el lenguaje en primera persona singular y las referencias a
    "empresa unipersonal" del copy público — el sitio ahora habla en voz de empresa. La estructura
    interna del equipo no se expone por decisión de negocio.
11. **Index genérico y proyectos dentro de Software** (decisión de negocio): el hero de
    `index.html` abría nombrando "Cloud & Data Architecture" como primer contacto, lo cual
    presuponía el interés del visitante antes de mostrarle que hay dos líneas. Se cambió a un hero
    genérico a nivel de empresa que bifurca inmediatamente en las dos líneas. Además, `proyectos.html`
    se retiró (PuntoTV no es evidencia de trabajo de Cloud & Data Architecture) y su contenido se
    movió a `software.html`, la línea a la que sí corresponde.
12. **`sobre-mi.html` → `perfil.html`**: se renombró para dejar de sonar como la página de una sola
    persona operando en solitario, y se reemplazó el timeline detallado de educación/experiencia por
    un resumen breve con link a LinkedIn — el historial completo vive ahí, no se duplica en el
    sitio.
13. **Profundidad y credibilidad en `cloud.html`**: diagrama de arquitectura (Mermaid, vía CDN —
    única dependencia externa del sitio, cargada solo en esta página) mostrando el flujo
    evento → Lambda → Step Functions/persistencia → EventBridge/SQS; sección "Cómo trabajamos"
    (Diagnóstico → Propuesta → Desarrollo → Soporte, sin plazos ni precios no confirmados); FAQ con
    `<details>/<summary>` nativo (sin JS adicional); e íconos Lucide (ISC License) en cada servicio
    de `cloud.html` y `software.html`. Se agregaron `assets/favicon.svg` y `assets/og-image.svg` y
    se enlazaron en el `<head>` de las 4 páginas.
14. **`dev/`, portfolio personal**: se agregó `perfil.html` con un placeholder de foto (`.avatar`,
    iniciales "DC") a la espera de una foto formal, y un link al nuevo portfolio personal. `dev/`
    reutiliza `assets/styles.css` (decisión confirmada con Diego) pero con marca propia ("Diego
    Córdova" en vez de "Cordova Code Solutions") y tono informal. Los 3 proyectos mostrados en
    `dev/proyectos.html` (Super-Pong, Game of Life, programación competitiva) se eligieron
    filtrando los repos reales de `github.com/dcordovao` — se excluyeron tareas académicas de la U.
    Estas decisiones (lista de proyectos) fueron un criterio propio a falta de confirmación
    explícita — ver "Próximos pasos" para lo pendiente de validar.
15. **`dev/` separado del sitio de negocio, no enlazado de vuelta** (confirmado con Diego): se quitó
    el link "Perfil profesional" que volvía de `dev/` a `perfil.html` — el portfolio personal no
    debe sentirse "atado" al sitio de la empresa. El link inverso (`perfil.html` → `dev/`) ahora abre
    en pestaña nueva (`target="_blank"`), reforzando que son dos experiencias separadas aunque vivan
    en el mismo dominio. Se agregó `cordova-code-website` mismo como proyecto en
    `dev/proyectos.html` — es código real que vale la pena mostrar. La foto se actualizó a
    `assets/img/diego_formal.jpg` (reemplaza a `diego_informal.png`, que Diego eliminó) para
    `dev/index.html`; se le agregaron atributos `width`/`height` en el HTML además de la clase CSS
    para evitar que se renderice a tamaño completo antes de que cargue el CSS.

## Próximos pasos sugeridos

- Agregar un enlace a GitHub una vez publicado (según `plan-marketing`, GitHub es el canal
  prioritario de portafolio).
- Sumar un formulario o enlace de contacto más visible cuando exista un canal definido (hoy es solo
  `mailto:`).
- Documentar nuevos proyectos en `software.html` a medida que avancen (ver
  `02-proyectos/proyectos-activos` en Drive para la ficha completa de cada uno).
- Revisar si conviene mover este repositorio a GitHub público antes o después de tener el primer
  caso de éxito, según lo que defina `plan-marketing`.
- **Convertir `assets/og-image.svg` a PNG (1200x630)**: Facebook, LinkedIn y X no renderizan SVG
  para `og:image`, solo PNG/JPEG. No había ninguna herramienta de rasterizado disponible en el
  entorno donde se creó el diseño — exportarlo a PNG (Figma, Inkscape, o un conversor online) y
  actualizar `og:image`/`og:image:type` en las 4 páginas antes de publicar el sitio.
- Confirmar con Diego la duración típica de una auditoría / diagnóstico técnico para reemplazar el
  placeholder en la FAQ de `cloud.html` (marcado con comentario `TODO(Diego)`).
- **Pendiente de confirmar sobre `dev/`**: si la lista de proyectos en `dev/proyectos.html`
  (Super-Pong, Game of Life, programación competitiva) es la correcta o si Diego quiere otra
  selección; qué redes sociales además de LinkedIn/GitHub agregar (Instagram, X, etc., con su URL);
  si "otra página" en el pedido original era el link a `cordovacodes.com` (así quedó implementado)
  o algo distinto; y reemplazar los `.project-thumb` (ícono placeholder) por capturas reales cuando
  Diego las pase.
- **Foto formal para `perfil.html`**: hoy tiene un placeholder (`.avatar`, iniciales "DC") — falta
  la foto real, marcada con comentario `TODO(Diego)` en el HTML.
- **Optimizar `assets/img/diego_formal.jpg`**: es una foto de celular a resolución completa
  (3456×4608px, ~2.9MB) mostrada en un círculo de 160px — el navegador la descarga entera igual.
  No hay herramienta de compresión/resize disponible en este entorno — comprimirla y/o redimensionarla
  (TinyPNG, Squoosh, o similar) a algo cercano a 320×320px antes de publicar.
