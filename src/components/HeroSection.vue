<script setup lang="ts">
import { profile } from '../data/portfolio'
import { useTyper } from '../composables/useTyper'
const role = useTyper(profile.roles)
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div class="blob -left-20 top-20 h-72 w-72 bg-brand"></div>
    <div class="blob -right-10 bottom-10 h-80 w-80 bg-purple-500" style="animation-delay: -4s"></div>

    <div class="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 py-12 md:flex-row md:justify-between">
      <div class="max-w-xl text-center md:text-left">
        <p v-if="profile.available" v-reveal
           class="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm">
          <span class="dot-live h-2.5 w-2.5 rounded-full bg-green-500"></span> Disponible pour de nouvelles missions
        </p>
        <p v-reveal="100" class="font-mono text-sm text-brand">Bonjour, je suis</p>
        <h1 v-reveal="200" class="mt-2 text-4xl font-extrabold text-fg md:text-6xl">{{ profile.name }}</h1>
        <h2 v-reveal="300" class="mt-3 h-10 text-2xl font-semibold text-brand md:text-3xl">
          {{ role }}<span class="caret">|</span>
        </h2>
        <p v-reveal="400" class="mt-5 text-lg leading-relaxed">{{ profile.tagline }}</p>
        <div v-reveal="500" class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#projects" class="rounded-full bg-brand px-7 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong">Voir mes projets</a>
          <a href="#contact" class="rounded-full border border-line bg-surface px-7 py-3 font-semibold text-fg transition hover:-translate-y-0.5 hover:border-brand">Me contacter</a>
        </div>
      </div>

      <div v-reveal="300" class="relative">
        <div class="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand to-purple-500 opacity-60 blur-xl"></div>
        <img :src="profile.photo" :alt="`Photo de ${profile.name}`"
             class="relative h-64 w-64 rounded-full border-4 border-surface object-cover shadow-2xl md:h-96 md:w-96" />
      </div>
    </div>

    <a href="#about" class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-2xl md:block" aria-label="Défiler">↓</a>
  </section>
</template>
