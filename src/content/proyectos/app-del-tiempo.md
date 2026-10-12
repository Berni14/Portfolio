---
# EJEMPLO: sustituye este archivo por un proyecto real
titulo: App del tiempo
resumen: La previsión de tu ciudad en un vistazo, pensada para mirarla en diez segundos antes de salir.
tipo: frontend
portada: ../../assets/proyectos/tiempo.svg
portadaAlt: "Pantalla principal con la temperatura actual y la previsión por horas"
tecnologias: [React, TypeScript, Tailwind]
demo: https://example.com
repo: https://github.com/Berni14
orden: 2
---

## Contexto

Práctica para aprender a consumir una API pública y manejar estados de carga y error.

## Mi papel

Proyecto individual.

## Reto principal

La API devuelve las horas en UTC; tuve que convertirlas a la zona horaria de cada ciudad.

## Una decisión técnica

Guardé en caché la última respuesta para que la app se abra al instante aunque no haya conexión.

## Resultado

Funciona sin conexión con los últimos datos descargados.

## Qué haría diferente

Escribiría tests para la conversión de horas, que fue donde más fallos tuve.
