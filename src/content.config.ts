import { defineCollection, z } from "astro:content"

const works = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    eyecatch: z.string(),
    category: z.string().nullable().default(null),
    year: z.number(),
    soft: z.array(z.string()).default([]),
    backgroundMovie: z.string().optional(),
    youtube: z.string().optional(),
  }),
})

export const collections = { works }
