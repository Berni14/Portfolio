# Hoja de ruta del portfolio

Oct 12, 2026 · @Berni

## Punto de partida

El portfolio se construye con Astro como base, Tailwind para estilos y React solo donde haga falta interactividad real. Cada fase termina con algo que funciona y que puedes subir a GitHub.

| Decisión | Valor |
| --- | --- |
| Herramienta principal | Astro (páginas, rutas, contenido) |
| Estilos | Tailwind, con las variables de color y tipografía como tokens |
| React | Solo para islas interactivas, si alguna lo necesita |
| Idiomas | Español por defecto, inglés como segunda opción |
| Temas | Claro y oscuro; el oscuro es la cara principal |
| Acento | Lima #a3e635 en oscuro, verde #365314 en claro |
| Tipografía | Bricolage Grotesque (titulares) y Geist (texto) |
| Maquetación | Una sola columna centrada |
| Secciones | Hero, Proyectos, Bases de datos, Experiencia, Sobre mí, Contacto |
| Repositorio | [github.com/Berni14/Portfolio](https://github.com/Berni14/Portfolio) |

Regla de oro: no pases a la siguiente fase hasta que la actual se vea bien en móvil y en escritorio.

## Fase 0 · Cerrar el diseño en Figma

Antes de abrir el editor, el diseño tiene que estar decidido; programar sin él te hace rediseñar a mitad del código.

> Saltada (12 oct 2026): la cuenta de Figma es Starter con asiento de solo lectura, así que el diseño se hace directamente en código.

- [ ] Crear una colección de variables de color con dos modos: claro y oscuro
- [ ] Crear variables de texto con modos ES / EN para probar los dos idiomas
- [ ] Definir los estilos de texto con la escala de la hoja de cálculo
- [ ] Diseñar la home completa en escritorio (1280 px) y móvil (375 px)
- [ ] Diseñar una tarjeta de proyecto de frontend y una de bases de datos
- [ ] Diseñar la página de detalle de un proyecto
- [ ] Diseñar el header con el selector de idioma y el de tema
- [ ] Revisar todo en modo claro y en inglés

Listo cuando: puedes cambiar de modo y de idioma en Figma y nada se rompe.

## Fase 1 · Base del proyecto en Astro

El objetivo es tener el esqueleto de la web navegable, sin estilos finales todavía.

- [ ] Crear el proyecto con el asistente oficial de Astro y subirlo al repositorio
- [x] Añadir Tailwind con la integración oficial
- [x] Crear un layout base con el `<head>`, el header y el footer
- [x] Crear un componente `.astro` por sección: Hero, Proyectos, BasesDeDatos, Experiencia, SobreMi, Contacto
- [x] Montar la home colocando esos componentes en orden
- [x] Probar que el build funciona sin errores

Qué aprender en esta fase:

- Estructura de carpetas de Astro: `src/pages`, `src/layouts`, `src/components`
- Cómo funcionan los componentes `.astro`: el frontmatter (entre `---`), las props y los slots
- Diferencia entre lo que se ejecuta en el build y lo que llega al navegador

Listo cuando: la home muestra las seis secciones con contenido de prueba.

## Fase 2 · Sistema visual y modo oscuro

Aquí traduces las variables de Figma a código para que el cambio de tema funcione solo.

- [x] Declarar los colores como variables CSS en `:root` y redefinirlas para el tema oscuro
- [x] Conectar esas variables con Tailwind para usarlas como clases (`bg-bg`, `text-accent`…)
- [x] Instalar Bricolage Grotesque y Geist en local (sin depender de Google en cada visita)
- [x] Aplicar la escala tipográfica como estilos base
- [x] Hacer el botón de tema con tres estados: sistema, claro y oscuro
- [x] Guardar la preferencia del usuario en `localStorage`
- [x] Evitar el parpadeo blanco al cargar en oscuro

Qué aprender en esta fase:

- `prefers-color-scheme` y cómo leerlo desde CSS y desde JavaScript
- Cómo configurar en Tailwind un modo oscuro controlado por una clase o un atributo en `<html>`
- Por qué el script del tema debe ir en línea dentro del `<head>` y ejecutarse antes de pintar la página (`is:inline` en Astro)

El botón de tema no necesita React: un poco de JavaScript dentro de un componente `.astro` basta.

Listo cuando: recargas en oscuro y no hay ni un destello claro.

## Fase 3 · Contenido y proyectos

Cada proyecto vive en su propio archivo Markdown dentro de una Content Collection; así añadir uno nuevo es crear un archivo, no tocar componentes.

- [x] Crear una colección `proyectos` con un esquema que valide los campos (ver tabla)
- [x] Escribir un archivo `.md` por proyecto: 3 de frontend y 2 de bases de datos (de ejemplo: falta sustituirlos por los reales)
- [x] Crear el componente de tarjeta y listar los proyectos ordenados por `orden`
- [x] Separar en la home los de `tipo: frontend` y los de `tipo: bases-de-datos`
- [x] Crear una página dinámica de detalle por proyecto
- [x] Optimizar las capturas con el componente `<Image />` de Astro
- [ ] Rellenar Experiencia y Sobre mí con contenido real

Campos que propongo para cada proyecto:

| Campo | Tipo | Para qué |
| --- | --- | --- |
| titulo | texto | Nombre del proyecto |
| resumen | texto | Una frase: qué problema resuelve |
| tipo | frontend o bases-de-datos | En qué sección aparece |
| portada | imagen | Captura principal, en modo oscuro |
| tecnologias | lista de texto | Etiquetas de la tarjeta |
| demo | enlace (opcional) | Web en vivo |
| repo | enlace | Código en GitHub |
| destacado | sí / no | Si ocupa la tarjeta grande |
| orden | número | Posición en la lista |

Qué aprender en esta fase:

- Content Collections: el archivo de configuración de colecciones, los esquemas con Zod y `getCollection()`
- Rutas dinámicas con `[slug].astro` y `getStaticPaths()`
- El componente `<Image />` y por qué genera formatos y tamaños optimizados

Listo cuando: añades un proyecto creando solo un archivo y aparece en la home y con su página.

## Fase 4 · Traducción ES / EN

La traducción va después del contenido para no traducir dos veces textos que aún cambian.

- [ ] Activar el enrutado por idioma de Astro con `es` por defecto y `en` como segundo
- [ ] Decidir las URLs: español en `/` e inglés en `/en/` (lo más habitual)
- [ ] Sacar los textos de la interfaz a un archivo por idioma (menú, botones, títulos de sección)
- [ ] Crear una función pequeña que devuelva el texto según el idioma de la página
- [ ] Escribir tú la versión en inglés de cada proyecto (un archivo por idioma o un campo por idioma)
- [ ] Hacer el selector "ES / EN" que lleve a la misma página en el otro idioma
- [ ] Añadir `lang` correcto en `<html>` y las etiquetas `hreflang`

Qué aprender en esta fase:

- La configuración `i18n` de Astro y la opción de prefijar o no el idioma por defecto
- Los helpers de Astro para construir URLs en otro idioma

Listo cuando: desde cualquier página, el selector te lleva a su equivalente en el otro idioma.

## Fase 5 · Pulido: accesibilidad, rendimiento y SEO

Esta fase es la que separa un portfolio de estudiante de uno profesional, y Astro te lo pone fácil.

- [ ] Pasar Lighthouse en móvil y apuntar a 95 o más en las cuatro categorías
- [ ] Comprobar el contraste de texto en los dos temas (mínimo 4.5:1)
- [ ] Navegar toda la web solo con teclado y revisar el foco visible
- [ ] Escribir textos alternativos útiles en todas las capturas
- [ ] Respetar `prefers-reduced-motion` en las animaciones
- [ ] Título y descripción únicos por página y por idioma
- [ ] Imagen para compartir (Open Graph) en oscuro, 1200 × 630 px
- [ ] Generar el sitemap con la integración oficial
- [ ] Añadir favicon con tus iniciales
- [ ] Opcional: transiciones entre páginas con las View Transitions de Astro

Listo cuando: Lighthouse está en verde y al compartir el enlace en LinkedIn se ve tu imagen.

## Fase 6 · Publicación y difusión

Publica en cuanto la Fase 3 funcione, aunque falte pulido: una web en vivo que mejora vale más que una perfecta en local.

- [ ] Desplegar en Netlify, Vercel o Cloudflare Pages conectando el repositorio (cada push publica solo)
- [ ] Opcional: comprar un dominio propio con tu nombre
- [ ] Escribir un README del repositorio con captura, stack y cómo ejecutarlo
- [ ] Añadir el enlace en LinkedIn (destacados y sección de contacto) y en tu perfil de GitHub
- [ ] Pedir a dos o tres personas que lo revisen en su móvil

Listo cuando: alguien ajeno abre el enlace en su móvil y entiende en 5 segundos quién eres y qué haces.

## Cómo mostrar los proyectos

Cada proyecto se muestra en dos niveles: una tarjeta en la home que engancha en 3 segundos y una página de detalle que demuestra cómo piensas.

### Proyectos de frontend

En la home, el proyecto `destacado` ocupa una tarjeta grande y los otros dos van en tarjetas más pequeñas debajo.

- **Captura en oscuro**, recortada a la parte más vistosa, no la página entera
- **Título y una frase** que diga qué problema resuelve, no qué tecnología usa
- **Etiquetas de tecnologías** (máximo 4) con borde lima
- **Dos enlaces**: "Ver demo" y "Código"
- Detalle de firma: al pasar el ratón, la captura puede reproducir un vídeo corto en bucle de la web funcionando

### Proyectos de bases de datos

No tienen interfaz bonita que capturar, así que se muestran como lo que son: datos bien pensados. Una tarjeta con aspecto de terminal o editor, distinta a las de frontend, los distingue de un vistazo.

- **Diagrama del modelo de datos** (entidad-relación) como imagen principal
- **Una consulta SQL destacada** en un bloque de código con resaltado (Astro lo trae de serie en Markdown), con una línea que explique qué responde
- **Cifras rápidas**: número de tablas, relaciones, motor (PostgreSQL o SQLite)
- **Enlace al repositorio** con el script de creación y datos de ejemplo

### Página de detalle (para los dos tipos)

1. Contexto: qué era y para quién
2. Mi papel: qué hiciste tú, sobre todo si fue en grupo
3. Reto principal y cómo lo resolviste
4. Una decisión técnica que tomaste y por qué
5. Resultado: capturas, enlaces y alguna cifra si la hay
6. Qué haría diferente ahora

El punto 6 es el que más valoran los reclutadores en perfiles junior: demuestra que aprendes.

### Errores a evitar

- Galerías de 10 capturas sin explicación
- Descripciones del tipo "Proyecto hecho con HTML, CSS y JS"
- Enlaces a demos caídas: revísalas antes de enviar el portfolio
- Proyectos de tutorial copiados tal cual; si lo son, cuenta qué añadiste tú
