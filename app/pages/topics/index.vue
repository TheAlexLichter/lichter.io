<script setup lang="ts">
const title = 'Topics'
const description = 'Being it talks, workshops, panels, podcasts or blog posts, here you can find all my content sorted by topic.'

useSeoMeta({
  title,
  description,
})

defineOgImageComponent('Speaking')

const { data: topics } = useAsyncData('all-topics', () => queryCollection('topics').select('title', 'path').all())
</script>

<template>
  <AppSection>
    <ParagraphDecoration class="mt-16" />
    <AppParagraph class="mt-4" tag="h1" look="heading">{{ title }}</AppParagraph>
    <AppParagraph class="max-w-3xl mt-8" look="subParagraph">
      Below you can find a list of my talks, podcast appearances, given workshops and panels. All, sorted by topics that
      might interest you.
    </AppParagraph>
    <div class="flex flex-wrap gap-8 mt-8">
      <TopicPreview v-for="topic in topics" :key="topic.path" :topic="{ path: topic.path, title: topic.title }" />
    </div>
  </AppSection>
</template>
