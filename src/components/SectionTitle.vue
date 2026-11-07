<script setup lang="ts">
defineProps<{ eyebrow: string; title: string }>()
</script>

<template>
  <div v-reveal class="mb-12">
    <p class="font-mono text-sm text-brand">{{ eyebrow }}</p>
    <h2 class="mt-2 text-3xl font-bold text-fg md:text-4xl">{{ title }}</h2>
    <div class="mt-4 h-1 w-16 rounded-full bg-brand"></div>
  </div>
</template>
