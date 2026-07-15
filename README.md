# cordova-code-website

Sitio web público de **Cordova Code Solutions**, la empresa unipersonal de Diego Córdova Opazo.
Funciona como portafolio de desarrollador: presenta a Diego, los servicios que ofrece y los
proyectos propios en desarrollo.

## Propósito

Mientras la empresa está en fase de fundación (sin clientes activos todavía), este sitio cumple
tres funciones:

1. **Carta de presentación** — quién es Diego, su experiencia (Airnguru, Copec) y su stack técnico.
2. **Catálogo de servicios** — qué resuelve Cordova Code Solutions, para que un prospecto entienda
   la oferta sin necesitar una llamada previa.
3. **Vitrina de proyectos propios** — evidencia de trabajo real (ej. PuntoTV) mientras no existen
   casos de éxito de clientes que mostrar.

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
├── index.html          Inicio — presentación de Diego y de la empresa
├── servicios.html       Catálogo de servicios (6 líneas de servicio)
├── proyectos.html       Proyectos propios (hoy: PuntoTV)
├── sobre-mi.html         Educación, experiencia, stack técnico, hobbies
├── assets/
│   ├── styles.css       Hoja de estilos compartida por todas las páginas
│   └── script.js        Toggle del menú móvil (compartido)
└── README.md
```

Cada página repite el mismo `<header>`/`<nav>`/`<footer>` (no hay motor de plantillas): al agregar
una página nueva, hay que actualizar la barra de navegación en los demás archivos `.html` para que
apunten a ella, y marcar `aria-current="page"` en el enlace correspondiente a la página activa.

### Contenido por página

- **index.html**: hook de una línea, chips de stack técnico, y una introducción corta a Cordova
  Code Solutions con link a Servicios.
- **servicios.html**: las 6 líneas de servicio del catálogo interno (auditoría técnica, backend a
  medida, automatización de procesos, datos/ETL, IA aplicada, mantenimiento mensual), con la
  auditoría marcada como servicio de entrada.
- **proyectos.html**: ficha del proyecto PuntoTV (control remoto trackpad para TV) — el primer
  proyecto propio documentado, en fase de prototipado.
- **sobre-mi.html**: timeline de educación y experiencia, stack técnico agrupado, y una sección de
  hobbies.

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

## Próximos pasos sugeridos

- Agregar un enlace a GitHub una vez publicado (según `plan-marketing`, GitHub es el canal
  prioritario de portafolio).
- Sumar un formulario o enlace de contacto más visible cuando exista un canal definido (hoy es solo
  `mailto:`).
- Documentar nuevos proyectos en `proyectos.html` a medida que avancen (ver
  `02-proyectos/proyectos-activos` en Drive para la ficha completa de cada uno).
- Revisar si conviene mover este repositorio a GitHub público antes o después de tener el primer
  caso de éxito, según lo que defina `plan-marketing`.
