import { z, defineCollection } from "astro:content";

const storieSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

const featuresSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  stories: storieSchema,
  features: featuresSchema,
};
