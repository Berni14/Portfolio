---
titulo: Pokémon Clicker
resumen: "Un juego clicker con los Pokémon de la primera generación que sigue produciendo monedas aunque cierres la pestaña."
tipo: frontend
portada: ../../assets/proyectos/pokemon-clicker.png
portadaAlt: "Pantalla de juego con la Poké Ball para hacer clic, el aviso de las monedas ganadas mientras no estabas y la granja de bayas"
tecnologias: [React, PokeAPI, CSS, localStorage]
demo: https://pokeclickers.netlify.app/
repo: https://github.com/Berni14
orden: 3
---

## Contexto

Un juego incremental: haces clic para ganar monedas, consigues Pokémon de la primera generación (con rarezas como legendario o singular), mejoras tu equipo, compras objetos que multiplican la producción durante un tiempo y te enfrentas a los líderes de gimnasio.

## Mi papel

Proyecto individual.

## Reto principal

Era la primera vez que consumía una API. Tuve que aprender a hacer peticiones asíncronas, a esperar los datos antes de pintar la pantalla y a qué hacer cuando la petición falla.

## Una decisión técnica

La partida se guarda en `localStorage` junto con la hora a la que se guardó. Al volver, el juego calcula cuánto tiempo has estado fuera y te da las monedas que habrías ganado («Mientras no estabas…»).

Los datos de los Pokémon vienen de la PokeAPI, y también guardo sus respuestas en `localStorage` para no repetir las mismas peticiones en cada visita. Si la API falla, el juego muestra un aviso en lugar de quedarse en blanco.

## Resultado

Un juego completo que funciona en el navegador sin servidor propio, publicado en Netlify.
