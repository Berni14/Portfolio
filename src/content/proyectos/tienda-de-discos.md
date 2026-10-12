---
# EJEMPLO: sustituye este archivo por un proyecto real
titulo: Tienda de discos
resumen: Un catálogo de vinilos que se filtra al instante por género y década, sin recargar la página.
tipo: frontend
portada: ../../assets/proyectos/tienda.svg
portadaAlt: "Catálogo de la tienda con la barra de filtros y la cuadrícula de discos"
tecnologias: [JavaScript, CSS Grid, Fetch API, Vite]
demo: https://example.com
repo: https://github.com/Berni14
destacado: true
orden: 1
---

## Contexto

Proyecto final del módulo de Desarrollo Web en Entorno Cliente. El cliente ficticio era una tienda pequeña que vendía por Instagram y quería un catálogo propio.

## Mi papel

Lo hice yo solo: diseño, maquetación y toda la lógica de filtrado.

## Reto principal

Con 400 discos, filtrar recorriendo el DOM era lento en móviles. Pasé a filtrar sobre los datos y volver a pintar solo las tarjetas visibles.

## Una decisión técnica

No usé ningún framework: el proyecto era pequeño y quería entender bien el DOM antes de usar React.

## Resultado

El filtrado responde en menos de 50 ms en un móvil de gama media.

## Qué haría diferente

Guardaría los filtros en la URL para poder compartir una búsqueda.
