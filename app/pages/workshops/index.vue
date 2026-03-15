<script setup lang="ts">
const title = 'Workshops'
const description = 'Want to upgrade your team\'s skills? I offer various workshops on Vue.js, Nuxt.js, TypeScript, JavaScript, Web Development, Performance, Clean Code and more. Take a look at the list below or contact me for a custom workshop!'

useSeoMeta({
  title,
  description,
})

defineOgImageComponent('Workshop')

const { data: workshops } = useAsyncData('all-workshops', () => queryCollection('workshops').select('id', 'path', 'title', 'description', 'time', 'topics').all())
</script>

<template>
  <AppSection>
    <ParagraphDecoration class="mt-16" />
    <AppParagraph class="mt-4" tag="h1" look="heading">Workshops</AppParagraph>
    <AppParagraph class="max-w-3xl mt-8" look="subParagraph">
      Here I've listed various workshops I am offering. It is no problem to tailor them to your needs or create a
      completely custom workshop for you and your team.
      Just <AppLink to="/contact/" class="underline hover:no-underline">contact me</AppLink> and we'll figure it out!
    </AppParagraph>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 mt-8">
      <WorkshopPreview v-for="entry in workshops" :key="entry.path" :workshop="entry" />
    </div>
  </AppSection>
</template>
