---
titulo: HoopTrack
resumen: "Todo lo que un entrenador de baloncesto necesita en un sitio: plantilla, calendario, asistencia, entrenamientos y una pizarra de jugadas."
tipo: frontend
portada: ../../assets/proyectos/hooptrack.png
portadaEncuadre: left top
portadaAlt: "Pizarra táctica de HoopTrack a cancha completa, con las herramientas para mover jugadores, dibujar flechas y animar la jugada por pasos"
tecnologias: [React, Supabase, Tailwind, Konva]
demo: https://hooptracking.netlify.app/
repo: https://github.com/Berni14
destacado: true
orden: 1
---

## Contexto

Una aplicación web para entrenadores de baloncesto de base. Cada entrenador crea sus equipos y desde ahí gestiona la plantilla (con posiciones y dorsales), el calendario de partidos y entrenamientos, la asistencia de cada jugador, una biblioteca de ejercicios para planificar las sesiones y una pizarra para dibujar jugadas paso a paso, a pista completa o media pista.

## Mi papel

Proyecto individual, de principio a fin: idea, diseño de la base de datos, interfaz y despliegue.

## Reto principal

Construirlo todo desde cero sin una base de la que partir. El primer paso fue diseñar la base de datos: decidir qué tablas hacían falta y cómo se relacionaban equipos, jugadores, eventos y asistencia antes de escribir una sola pantalla.

## Una decisión técnica

Usé Supabase como backend: me da autenticación y una base de datos PostgreSQL sin tener que montar un servidor propio. Los datos se reparten en tablas como `teams`, `players`, `events`, `attendance`, `practices`, `drills` y `plays`, y cada entrenador solo ve los equipos que ha creado.

Para la pizarra de jugadas usé Konva, una librería de dibujo sobre `<canvas>`, porque mover jugadores y flechas con el ratón o el dedo con HTML y CSS habría sido mucho más difícil.

## Resultado

Una aplicación completa con inicio de sesión, varias pantallas conectadas con React Router y los datos guardados en la nube, publicada en Netlify.
