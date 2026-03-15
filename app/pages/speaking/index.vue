<script setup lang="ts">
const title = 'Talks and Podcast'
const description = `Take a look at my talks, podcast appearances and panels I have given or participated in. Topics are among others Vue.js, Nuxt.js, TypeScript, JavaScript, Web Development, Performance, Clean Code as well as my personal story and experiences.`

useSeoMeta({
  title,
  description,
})

defineOgImageComponent('Speaking', {
  title: 'Talks and Podcasts'
})

const { data: talks } = useAsyncData('all-speaking', () => queryCollection('speaking').order('date', 'DESC').select('id', 'path', 'title', 'description', 'date', 'eventName', 'eventUrl', 'location', 'slidesUrl', 'videoUrl', 'podcastUrl', 'type', 'topics').all())
</script>

<template>
  <AppSection>
    <ParagraphDecoration class="mt-16" />
    <AppParagraph class="mt-4" tag="h1" look="heading">Speaking</AppParagraph>
    <AppParagraph class="max-w-3xl mt-8" look="subParagraph">
      Below you can find a list of my talks, podcast appearances, given workshops and panels.
      If you are interested in more than just the excerpt, title and brief topics, click on the entry to get to the
      slides, videos or recording link!
    </AppParagraph>
    <div class="space-y-8 mt-8">
      <SpeakingPreview v-for="entry in talks" :key="entry.path" :talk="entry" />
    </div>
  </AppSection>
</template>
