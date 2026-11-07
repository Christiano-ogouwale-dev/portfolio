<script setup lang="ts">
import { whatsapp } from '../data/portfolio'
</script>

<template>
  <a :href="whatsapp()" target="_blank" rel="noopener" aria-label="Me contacter sur WhatsApp"
     class="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-1 hover:bg-green-600">
    <span class="text-xl">💬</span><span class="hidden sm:inline">WhatsApp</span>
  </a>
</template>
