<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'

const filters = ['Tous', ...new Set(projects.map((p) => p.category))]
const current = ref('Tous')
const visible = computed(() => (current.value === 'Tous' ? projects : projects.filter((p) => p.category === current.value)))
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl px-6 py-24">
    <SectionTitle eyebrow="04. Projets" title="Mes réalisations" />
    <div v-reveal class="mb-8 flex flex-wrap gap-3">
      <button v-for="f in filters" :key="f" @click="current = f"
              :class="['rounded-full border px-5 py-2 text-sm transition',
                       current === f ? 'border-brand bg-brand text-white' : 'border-line bg-surface hover:border-brand']">
        {{ f }}
      </button>
    </div>
    <TransitionGroup name="fade" tag="div" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in visible" :key="p.title" v-bind="p" />
    </TransitionGroup>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all .4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(.95); }
.fade-leave-active { position: absolute; }
</style>
