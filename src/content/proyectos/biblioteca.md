---
# EJEMPLO: sustituye este archivo por un proyecto real
titulo: Base de datos de una biblioteca
resumen: Modelo de datos para controlar préstamos y multas sin que un libro pueda prestarse dos veces.
tipo: bases-de-datos
portada: ../../assets/proyectos/biblioteca.svg
portadaAlt: "Diagrama entidad-relación con las tablas socios, préstamos y multas"
tecnologias: [PostgreSQL, SQL]
repo: https://github.com/Berni14
orden: 1
motor: PostgreSQL
tablas: 6
relaciones: 7
consulta:
  pregunta: ¿Qué socios tienen libros con más de 15 días de retraso?
  sql: |
    SELECT s.nombre, l.titulo,
           CURRENT_DATE - p.fecha_devolucion AS dias_retraso
    FROM prestamos p
    JOIN socios s ON s.id = p.socio_id
    JOIN libros l ON l.id = p.libro_id
    WHERE p.devuelto_en IS NULL
      AND CURRENT_DATE - p.fecha_devolucion > 15
    ORDER BY dias_retraso DESC;
---

## Contexto

Práctica del módulo de Bases de Datos: diseñar desde cero el sistema de una biblioteca municipal.

## Mi papel

Proyecto individual: modelo, script de creación y datos de ejemplo.

## Reto principal

Impedir que un ejemplar se preste dos veces a la vez. Lo resolví con un índice único parcial sobre los préstamos sin devolver.

## Una decisión técnica

Separé `libros` (la obra) de `ejemplares` (cada copia física), porque la biblioteca tiene varias copias de los títulos populares.

## Resultado

```sql
CREATE UNIQUE INDEX un_prestamo_activo
  ON prestamos (ejemplar_id)
  WHERE devuelto_en IS NULL;
```

## Qué haría diferente

Añadiría un historial de cambios con triggers para saber quién modificó cada préstamo.
