<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const show = ref(false)
const onScroll = () => (show.value = window.scrollY > 600)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="up">
    <a v-if="show" href="#home" aria-label="Retour en haut"
       class="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-xl text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-strong">↑</a>
  </Transition>
</template>

<style scoped>
.up-enter-active, .up-leave-active { transition: all .3s; }
.up-enter-from, .up-leave-to { opacity: 0; transform: translateY(16px); }
</style>
