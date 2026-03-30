import { getCollection, getEntry, render } from "astro:content"

export type Work = {
  slug: string
  title: string
  description: string
  eyecatch: string
  category: string | null
  year: number
  soft: string[]
  backgroundMovie?: string
  youtube?: string
}

export async function getWorks(): Promise<Work[]> {
  const entries = await getCollection("works")
  return entries
    .map((entry) => ({
      slug: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      eyecatch: entry.data.eyecatch,
      category: entry.data.category,
      year: entry.data.year,
      soft: entry.data.soft,
      backgroundMovie: entry.data.backgroundMovie,
      youtube: entry.data.youtube,
    }))
    .sort((a, b) => b.year - a.year)
}

export async function getWorkDetail(slug: string) {
  const entry = await getEntry("works", slug)
  if (!entry) throw new Error(`Work not found: ${slug}`)
  const { Content } = await render(entry)
  return {
    slug: entry.id,
    ...entry.data,
    Content,
  }
}
