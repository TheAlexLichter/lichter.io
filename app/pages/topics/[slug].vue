<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: page } = await useAsyncData(`topic-${slug}`, () => queryCollection('topics').path(`/topics/${slug}`).first())

if (!page.value) {
  throw createError({ statusCode: 404, fatal: true })
}

const { data: workshops } = useAsyncData(`topic-workshops-${slug}`, () => queryCollection('workshops').where('topics', 'LIKE', `%${slug}%`).all())

const { data: articles } = useAsyncData(`topic-articles-${slug}`, () => queryCollection('articles').where('topics', 'LIKE', `%${slug}%`).order('dateModified', 'DESC').order('datePublished', 'DESC').all())

const { data: talks } = useAsyncData(`topic-speaking-${slug}`, () => queryCollection('speaking').where('topics', 'LIKE', `%${slug}%`).order('date', 'DESC').all())

const title = `Topic: ${page.value.title}`
const description = `Being it talks, workshops, panels, podcasts or blog posts, here you can find all my content sorted by topic.`

useSeoMeta({
  title,
  description,
})

defineOgImageComponent('Speaking')
</script>
<template>
  <div>
    <AppSection class="bg-gradient-to-b !pb-4">
      <AppLinkBack to="/topics/">To topic selection</AppLinkBack>
      <ParagraphDecoration class="mt-4" />
      <AppParagraph class="mt-4" look="heading" tag="h1">
        Topic: {{ page!.title }}
      </AppParagraph>
    </AppSection>
    <AppSection class="justify-center pb-8">
      <template v-if="workshops?.length">
        <AppParagraph class="pt-16 !text-4xl" look="heading" tag="h2">
          Workshops
        </AppParagraph>
        <div class="space-y-8 md:space-y-0 md:grid grid-cols-2 gap-12 justify-around my-8">
          <WorkshopPreview v-for="entry in workshops" :key="entry.path" :workshop="entry" />
        </div>
      </template>

      <template v-if="articles?.length">
        <AppParagraph class="pt-16 !text-4xl" look="heading" tag="h2">
          Articles
        </AppParagraph>
        <div class="grid md:grid-cols-2 gap-y-16 md:gap-8 my-8">
          <ArticlePreview v-for="entry in articles" :key="entry.path" :article="entry" />
        </div>
      </template>

      <template v-if="talks?.length">
        <AppParagraph class="pt-16 !text-4xl" look="heading" tag="h2">
          Talks & Podcasts
        </AppParagraph>
        <div class="space-y-8 my-8">
          <SpeakingPreview v-for="entry in talks" :key="entry.path" :talk="entry" />
        </div>
      </template>
    </AppSection>
  </div>
</template>
