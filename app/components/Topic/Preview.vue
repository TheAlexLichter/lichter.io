<script setup lang="ts">
const props = defineProps<{
  topic: {
    path: string,
    title: string,
    count?: number,
    size?: number,
  }
}>()

const SIZE_CLASSES: Record<number, { title: string, padding: string }> = {
  0: { title: 'text-lg', padding: 'p-4' },
  1: { title: 'text-xl', padding: 'p-6' },
  2: { title: 'text-2xl', padding: 'p-8' },
  3: { title: 'text-3xl', padding: 'p-10' },
}

const sizeClasses = computed(() => SIZE_CLASSES[props.topic.size ?? 2] ?? SIZE_CLASSES[2])
</script>

<template>
  <AppLink :to="topic.path"
    :class="sizeClasses.padding"
    class="inline group border-l-4 border-red-500 relative flex flex-col justify-center text-center hover:bg-gradient-to-r hover:-translate-y-2 hover:border-zinc-300 transition-all duration-500 from-red-500/60 to-pink-600/60 bg-zinc-800">
    <AppParagraph tag="h3" class="font-semibold" :class="sizeClasses.title">
      {{ topic.title }}<span v-if="topic.count" class="ml-2 text-zinc-400 font-normal">· {{ topic.count }}</span>
    </AppParagraph>
  </AppLink>
</template>
