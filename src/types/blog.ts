import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Category } from "./category";

export type Blog = {
  title?: string;
  description?: string;
  id?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
  year: number;
  soft: string[];
};
