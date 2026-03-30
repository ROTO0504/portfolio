import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    eyecatch: z.string(),
    type: z.enum(["web", "video"]).default("video"),
    category: z.string().nullable().default(null),
    year: z.number(),
    soft: z.array(z.string()).default([]),
    backgroundMovie: z.string().optional(),
    youtube: z.string().optional(),
  }),
})

export const collections = { works }
