<script setup lang="ts">
import { testimonials } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <section v-if="testimonials.length" id="testimonials" class="mx-auto max-w-6xl px-6 py-24">
    <SectionTitle eyebrow="06. Témoignages" title="Ils m'ont fait confiance" />
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <figure v-for="(t, i) in testimonials" :key="t.name" v-reveal="i * 100"
              class="rounded-2xl border border-line bg-surface p-6">
        <blockquote class="leading-relaxed">« {{ t.text }} »</blockquote>
        <figcaption class="mt-4 text-sm"><span class="font-semibold text-fg">{{ t.name }}</span> · {{ t.role }}</figcaption>
      </figure>
    </div>
  </section>
</template>
