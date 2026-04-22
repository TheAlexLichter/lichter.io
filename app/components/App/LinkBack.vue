<script setup lang="ts">
  defineProps<{
    to: string
  }>()
</script>

<template>
  <AppLink :to="to" class="mt-16 flex items-center w-fit text-zinc-400 group">
    <Icon name="heroicons:chevron-double-left" class="mr-1 -ml-0.5" />
    <span class="group-hover:underline"><slot/></span>
  </AppLink>
</template>