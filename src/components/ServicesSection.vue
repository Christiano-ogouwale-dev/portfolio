<script setup lang="ts">
import { services } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section id="services" class="mx-auto max-w-6xl px-6 py-24">
    <SectionTitle eyebrow="02. Services" title="Ce que je peux faire pour vous" />
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="(s, i) in services" :key="s.title" v-reveal="i * 100"
               class="group rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-2 hover:border-brand hover:shadow-xl hover:shadow-brand/10">
        <div class="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-2xl transition group-hover:scale-110">{{ s.icon }}</div>
        <h3 class="text-lg font-semibold text-fg">{{ s.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed">{{ s.text }}</p>
      </article>
    </div>
  </section>
</template>
