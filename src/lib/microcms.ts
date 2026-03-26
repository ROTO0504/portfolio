import { createClient } from "microcms-js-sdk"
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"

const getClient = () =>
  createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
  })

export type Category = {
  name: string
} & MicroCMSListContent

export type Blog = {
  title: string
  description: string
  content: string
  eyecatch: MicroCMSImage
  category: Category | null
  year: number
  soft: string[]
  backgroundMovie?: string
  YouTube?: string
} & MicroCMSListContent

export type Logs = {
  date: string
  title: string
  content: string
  image: MicroCMSImage
} & MicroCMSListContent

export const getWorks = async () => {
  const res = await getClient().getList<Blog>({
    endpoint: "blogs",
    queries: { orders: "-year", limit: 100 },
  })
  return res.contents
}

export const getWorkDetail = async (id: string) => {
  return await getClient().getListDetail<Blog>({
    endpoint: "blogs",
    contentId: id,
  })
}

export const getLogs = async () => {
  const res = await getClient().getList<Logs>({
    endpoint: "logs",
    queries: { orders: "-date", limit: 100 },
  })
  return res.contents
}
