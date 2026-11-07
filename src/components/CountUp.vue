<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{ to: number }>()
const n = ref(0)
const el = ref<HTMLElement>()

onMounted(() => {
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    io.disconnect()
    const t0 = performance.now()
    const step = (t: number) => {
      const p = Math.min((t - t0) / 1400, 1)
      n.value = Math.round(props.to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
  io.observe(el.value!)
})
</script>

<template><span ref="el">{{ n }}</span></template>
