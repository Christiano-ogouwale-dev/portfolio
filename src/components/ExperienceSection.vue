<script setup lang="ts">
import { experience } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="experience" class="mx-auto max-w-4xl px-6 py-24">
    <SectionTitle eyebrow="05. Parcours" title="Mon expérience" />
    <ol class="relative ml-3 border-l-2 border-line">
      <li v-for="(e, i) in experience" :key="e.title" v-reveal="i * 120" class="mb-10 ml-8 last:mb-0">
        <span class="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-bg bg-brand"></span>
        <p class="font-mono text-sm text-brand">{{ e.period }}</p>
        <h3 class="mt-1 text-lg font-semibold text-fg">{{ e.title }} <span class="font-normal text-muted">· {{ e.place }}</span></h3>
        <p class="mt-2 text-sm leading-relaxed">{{ e.text }}</p>
      </li>
    </ol>
  </section>
</template>
