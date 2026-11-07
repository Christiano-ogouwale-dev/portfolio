<script setup lang="ts">
defineProps<{
  title: string
  category: string
  image?: string
  description: string
  tech: string[]
  demo: string
  code: string
}>()
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-2 hover:border-brand hover:shadow-xl hover:shadow-brand/10">
    <div class="relative aspect-video overflow-hidden bg-brand/10">
      <img v-if="image" :src="image" :alt="`Aperçu du projet ${title}`" loading="lazy"
           class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
      <div v-else class="grid h-full place-items-center text-5xl">📁</div>
      <span class="absolute left-3 top-3 rounded-full bg-bg/90 px-3 py-1 text-xs text-brand backdrop-blur">{{ category }}</span>
    </div>
    <div class="flex flex-1 flex-col p-6">
    <h3 class="text-xl font-semibold text-fg">{{ title }}</h3>
    <p class="mt-3 flex-1 text-sm leading-relaxed">{{ description }}</p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li v-for="t in tech" :key="t" class="rounded-full border border-line px-3 py-1 text-xs">{{ t }}</li>
    </ul>
    <div v-if="demo || code" class="mt-5 flex gap-4 text-sm font-medium">
      <a v-if="demo" :href="demo" target="_blank" rel="noopener" class="text-brand hover:underline">Démo →</a>
      <a v-if="code" :href="code" target="_blank" rel="noopener" class="hover:text-fg">Code</a>
    </div>
    </div>
  </article>
</template>
