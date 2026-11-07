import type { Directive } from 'vue'

let io: IntersectionObserver | null = null
const observer = () =>
  (io ??= new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io!.unobserve(e.target)
        }
      }),
    { threshold: 0.15 },
  ))

// Usage : <div v-reveal> ou <div v-reveal="150"> (délai en ms)
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    observer().observe(el)
  },
}
