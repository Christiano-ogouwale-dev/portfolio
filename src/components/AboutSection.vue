<script setup lang="ts">
import { profile, stats, languages, qualities } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'
import CountUp from './CountUp.vue'
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl px-6 py-24">
    <SectionTitle eyebrow="01. À propos" title="Qui suis-je ?" />
    <div class="grid gap-12 lg:grid-cols-2">
      <div class="space-y-4 leading-relaxed">
        <p v-for="(p, i) in profile.about" :key="i" v-reveal="i * 100">{{ p }}</p>
        <div v-reveal="200" class="grid gap-4 pt-2 sm:grid-cols-2">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-fg">Langues</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="l in languages" :key="l" class="rounded-full border border-line bg-surface px-3 py-1 text-sm">{{ l }}</li>
            </ul>
          </div>
          <div>
            <h3 class="mb-2 text-sm font-semibold text-fg">Qualités</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="q in qualities" :key="q" class="rounded-full border border-line bg-surface px-3 py-1 text-sm">{{ q }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(s, i) in stats" :key="s.label" v-reveal="i * 100"
             class="rounded-2xl border border-line bg-surface p-6 text-center transition hover:-translate-y-1 hover:border-brand">
          <p class="text-4xl font-extrabold text-brand"><CountUp :to="s.value" />{{ s.suffix }}</p>
          <p class="mt-2 text-sm">{{ s.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
