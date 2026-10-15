---
titulo: Hollow Knight Enemies
resumen: "Mi propia API REST con los 77 enemigos de Hollow Knight y una web en React que la consume para explorarlos por zona."
tipo: frontend
portada: ../../assets/proyectos/hollow-knight.png
portadaAlt: "Catálogo de enemigos de Hollow Knight: la rueda para elegir zona a la izquierda, el buscador y los botones de ordenar arriba y una cuadrícula de tarjetas con la vida y el daño de cada enemigo"
tecnologias: [React, Express, PostgreSQL, Prisma]
demo: https://hollow-knight-web-gvnt.vercel.app/
repo: https://github.com/Berni14/hollow-knight-web
enlaces:
  - texto: Código de la API
    url: https://github.com/Berni14/hollow-knight-api
  - texto: Documentación de la API
    url: https://hollow-knight-api-a6p4.onrender.com/api-docs
orden: 2
---

## Contexto

Un proyecto de fan en dos partes. La primera es una API REST con los datos de los enemigos de Hollow Knight: nombre, zona, tipo (normal, mini-boss o boss), vida, daño, geo que sueltan, debilidades y descripción. La segunda es una web que consume esa API y muestra el catálogo: eliges una zona con una rueda giratoria, buscas por nombre, ordenas por categoría o por vida y abres la ficha completa de cada enemigo.

## Mi papel

Proyecto individual, de principio a fin: los datos, la API, la base de datos, la web y el despliegue de las dos partes.

## Reto principal

Era la primera vez que hacía el backend además del frontend. Hasta ahora consumía APIs de otros; aquí tuve que diseñar la mía: qué endpoints hacían falta, qué devolvía cada uno, cómo paginar los resultados y qué responder cuando los parámetros no son válidos o un enemigo no existe.

## Una decisión técnica

La API está hecha con Node.js y Express, y los datos se guardan en PostgreSQL a través de Prisma, que genera las tablas a partir de un esquema y llena la base de datos con un script de semilla. Los parámetros de las peticiones (`area`, `type`, `page`, `limit`) se validan con Zod, así que una petición mal hecha recibe un error 400 que explica qué campo está mal en lugar de romper el servidor.

Además, la API tiene CORS y un límite de peticiones por IP, documentación interactiva con Swagger en `/api-docs` donde se puede probar cada endpoint, y tests automáticos con Jest y Supertest.

En la web, la rueda de zonas imita los selectores de iOS: cada vuelta de la rueda del ratón avanza exactamente una zona, también se puede arrastrar con el dedo, y los colores de la página cambian según la zona elegida.

## Resultado

Dos proyectos publicados y conectados: la API en Render, con la base de datos en Supabase, y la web en Vercel.

Como la API usa el plan gratuito de Render, si lleva un rato sin uso la primera carga puede tardar entre 30 y 60 segundos mientras el servidor arranca.
