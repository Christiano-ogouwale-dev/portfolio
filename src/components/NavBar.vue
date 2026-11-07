<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/portfolio'
import { useTheme } from '../composables/useTheme'

const { isDark, toggle } = useTheme()
const open = ref(false)
const active = ref('home')
const progress = ref(0)

const links = [
  { label: 'À propos', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Projets', id: 'projects' },
  { label: 'Parcours', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const onScroll = () => {
  const h = document.documentElement
  progress.value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
  let current = 'home'
  for (const l of links) {
    const el = document.getElementById(l.id)
    if (el && el.getBoundingClientRect().top < 140) current = l.id
  }
  active.value = current
}
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
    <div class="h-0.5 bg-brand transition-[width]" :style="{ width: progress + '%' }"></div>
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <a href="#home" class="text-lg font-bold text-fg">
        {{ profile.name.split(' ')[0] }}<span class="text-brand">.</span>
      </a>

      <div class="hidden items-center gap-7 lg:flex">
        <a v-for="l in links" :key="l.id" :href="`#${l.id}`"
           :class="['text-sm transition hover:text-brand', active === l.id ? 'font-semibold text-brand' : '']">
          {{ l.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button @click="toggle" :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
                class="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-lg transition hover:border-brand">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
        <a href="#contact" class="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-strong sm:block">
          Me contacter
        </a>
        <button class="grid h-10 w-10 place-items-center text-2xl lg:hidden" @click="open = !open" aria-label="Menu">
          {{ open ? '✕' : '☰' }}
        </button>
      </div>
    </nav>

    <div v-if="open" class="flex flex-col gap-4 border-t border-line bg-bg px-6 py-4 lg:hidden">
      <a v-for="l in links" :key="l.id" :href="`#${l.id}`" @click="open = false" class="hover:text-brand">{{ l.label }}</a>
    </div>
  </header>
</template>
