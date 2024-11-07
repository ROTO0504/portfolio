import type { MicroCMSImage } from "microcms-js-sdk";

export type Logs = {
  date?: Date;
  title?: string;
  content?: string;
  image?: MicroCMSImage;
};
