import { defineCollection, z } from 'astro:content'

const navigation = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    copyright: z.string(),
    buttons: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        url: z.string(),
      }),
    ),
  }),
})

export const collections = {
  navigation,
}
