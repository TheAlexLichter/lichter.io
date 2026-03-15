import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        title: z.string(),
        dateModified: z.string(),
        datePublished: z.string(),
        imageSrc: z.string().optional(),
        imageAlt: z.string().optional(),
        topics: z.array(z.string()).default([]),
        readingTime: z.record(z.any()).optional(),
      }),
    }),
    speaking: defineCollection({
      type: 'page',
      source: 'speaking/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        eventName: z.string().optional(),
        location: z.string().optional(),
        eventUrl: z.string().optional(),
        slidesUrl: z.string().optional(),
        videoUrl: z.string().optional(),
        podcastUrl: z.string().optional(),
        type: z.enum(['talk', 'podcast']).default('talk'),
        language: z.string().optional(),
        topics: z.array(z.string()).default([]),
      }),
    }),
    workshops: defineCollection({
      type: 'page',
      source: 'workshops/*.md',
      schema: z.object({
        title: z.string(),
        time: z.string().optional(),
        attendees: z.number().optional(),
        languages: z.array(z.string()).optional(),
        topics: z.array(z.string()).default([]),
        onStartPage: z.boolean().optional(),
      }),
    }),
    topics: defineCollection({
      type: 'page',
      source: 'topics/*.md',
      schema: z.object({
        title: z.string(),
        icon: z.string().optional(),
      }),
    }),
  },
})
