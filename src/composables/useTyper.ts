import { ref, onMounted, onUnmounted } from 'vue'

export function useTyper(words: string[], speed = 80, pause = 1600) {
  const text = ref('')
  let w = 0, i = 0, deleting = false
  let timer: ReturnType<typeof setTimeout>

  const tick = () => {
    const word = words[w]
    text.value = word.slice(0, i)
    if (!deleting && i === word.length) { deleting = true; timer = setTimeout(tick, pause); return }
    if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length }
    i += deleting ? -1 : 1
    timer = setTimeout(tick, deleting ? 40 : speed)
  }

  onMounted(tick)
  onUnmounted(() => clearTimeout(timer))
  return text
}
