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
        <h3 class="mb-5 font-semibold text-brand">{{ g.group }}</h3>
        <div v-for="s in g.items" :key="s.name" class="mb-4 last:mb-0">
          <div class="mb-1 flex justify-between text-sm">
            <span class="text-fg">{{ s.name }}</span><span>{{ s.level }}%</span>
          </div>
          <div class="bar h-2 rounded-full bg-line" :style="{ '--w': s.level + '%' }"><span></span></div>
        </div>
      </div>
    </div>
  </section>
</template>