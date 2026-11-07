<script setup lang="ts">
import { skills } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="skills" class="mx-auto max-w-6xl px-6 py-24">
    <SectionTitle eyebrow="03. Compétences" title="Mes compétences" />
    <div class="grid gap-6 md:grid-cols-2">
      <div v-for="(g, i) in skills" :key="g.group" v-reveal="i * 100"
           class="rounded-2xl border border-line bg-surface p-6 transition hover:border-brand">
        <h3 class="mb-4 font-semibold text-brand">{{ g.group }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="s in g.items" :key="s"
              class="rounded-full border border-line bg-bg px-3 py-1.5 text-sm text-fg">{{ s }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
