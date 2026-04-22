<script setup lang="ts">
const title = 'Topics'
const description = 'Being it talks, workshops, panels, podcasts or blog posts, here you can find all my content sorted by topic.'

useSeoMeta({
  title,
  description,
})

defineOgImageComponent('Speaking')

const { data: topics } = await useAsyncData('all-topics', async () => {
  const [articles, speaking, workshops] = await Promise.all([
    queryCollection('articles').select('topics').all(),
    queryCollection('speaking').select('topics').all(),
    queryCollection('workshops').select('topics').all(),
  ])

  const counts = new Map<string, number>()
  for (const entry of [...articles, ...speaking, ...workshops]) {
    for (const slug of entry.topics ?? []) {
      counts.set(slug, (counts.get(slug) ?? 0) + 1)
    }
  }

  const maxCount = Math.max(...counts.values(), 1)

  return [...counts.entries()]
    .map(([slug, count]) => ({
      path: `/topics/${slug}`,
      title: topicTitle(slug),
      count,
      size: maxCount > 1
        ? Math.min(3, Math.floor((Math.log(count) / Math.log(maxCount)) * 4))
        : 1,
    }))
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
})
</script>

<template>
  <AppSection>
    <ParagraphDecoration class="mt-16" />
    <AppParagraph class="mt-4" tag="h1" look="heading">{{ title }}</AppParagraph>
    <AppParagraph class="max-w-3xl mt-8" look="subParagraph">
      Below you can find a list of my talks, podcast appearances, given workshops and panels. All, sorted by topics that
      might interest you.
    </AppParagraph>
    <div class="flex flex-wrap items-center gap-8 mt-8">
      <TopicPreview v-for="topic in topics" :key="topic.path" :topic="topic" />
    </div>
  </AppSection>
</template>
