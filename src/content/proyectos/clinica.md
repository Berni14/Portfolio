---
# EJEMPLO: sustituye este archivo por un proyecto real
titulo: Citas de una clínica
resumen: Agenda de citas que evita solapamientos entre médicos y saca la facturación mensual con una consulta.
tipo: bases-de-datos
portada: ../../assets/proyectos/clinica.svg
portadaAlt: "Diagrama entidad-relación con las tablas pacientes, citas y facturas"
tecnologias: [SQLite, SQL]
repo: https://github.com/Berni14
orden: 2
motor: SQLite
tablas: 5
relaciones: 5
consulta:
  pregunta: ¿Cuánto facturó cada médico el mes pasado?
  sql: |
    SELECT m.nombre, SUM(f.importe) AS total
    FROM facturas f
    JOIN citas c ON c.id = f.cita_id
    JOIN medicos m ON m.id = c.medico_id
    WHERE strftime('%Y-%m', c.fecha) = strftime('%Y-%m', 'now', '-1 month')
    GROUP BY m.nombre
    ORDER BY total DESC;
---

## Contexto

Ejercicio de diseño y normalización para una clínica pequeña con tres médicos.

## Mi papel

Proyecto en pareja: yo hice el modelo y las consultas de informes.

## Reto principal

Evitar que un médico tenga dos citas a la vez. Lo resolví con una restricción comprobada por un trigger.

## Una decisión técnica

Elegimos SQLite porque la clínica no tenía servidor y la base de datos cabía en un solo archivo.

## Resultado

Las consultas de facturación tardan menos de 10 ms con un año de datos de prueba.

## Qué haría diferente

Pasaría a PostgreSQL para tener restricciones de exclusión en lugar de triggers.
