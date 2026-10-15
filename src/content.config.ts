import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
	schema: ({ image }) =>
		z.object({
			titulo: z.string(),
			resumen: z.string(),
			tipo: z.enum(['frontend', 'bases-de-datos']),
			portada: image(),
			portadaAlt: z.string(),
			// Qué parte de la captura se ve en la tarjeta (object-position de CSS)
			portadaEncuadre: z.string().default('center top'),
			tecnologias: z.array(z.string()).max(4),
			demo: z.url().optional(),
			repo: z.url().optional(),
			// Enlaces secundarios, p. ej. el repo de la API cuando el proyecto tiene dos
			enlaces: z.array(z.object({ texto: z.string(), url: z.url() })).default([]),
			destacado: z.boolean().default(false),
			orden: z.number(),
			// Solo para proyectos de bases de datos
			motor: z.enum(['PostgreSQL', 'SQLite', 'MySQL']).optional(),
			tablas: z.number().optional(),
			relaciones: z.number().optional(),
			consulta: z
				.object({
					pregunta: z.string(),
					sql: z.string(),
				})
				.optional(),
		}),
});

export const collections = { proyectos };
