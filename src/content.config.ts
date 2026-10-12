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
			tecnologias: z.array(z.string()).max(4),
			demo: z.url().optional(),
			repo: z.url(),
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
