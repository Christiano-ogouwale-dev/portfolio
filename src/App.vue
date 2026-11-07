<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import BackToTop from './components/BackToTop.vue'
import { profile, socials } from './data/portfolio'
</script>

<template>
  <NavBar />
  <RouterView />
  <BackToTop />
  <WhatsAppButton />
  <footer class="border-t border-line py-8 text-center text-sm">
    <div class="mb-4 flex justify-center gap-5">
      <a v-for="x in socials" :key="x.label" :href="x.url" target="_blank" rel="noopener" class="transition hover:text-brand">{{ x.label }}</a>
    </div>
    © {{ new Date().getFullYear() }} {{ profile.name }} · Développé avec Vue.js &amp; Tailwind CSS
  </footer>
</template>
