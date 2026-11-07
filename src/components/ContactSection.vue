<script setup lang="ts">
import { reactive, ref } from 'vue'
import { profile, socials, whatsapp } from '../data/portfolio'
import SectionTitle from './SectionTitle.vue'

const form = reactive({ name: '', email: '', message: '', website: '' }) // "website" = piège anti-robot
const status = ref<'idle' | 'sending' | 'ok' | 'error'>('idle')
const error = ref('')

// EmailJS (sans serveur) si les 3 clés VITE_EMAILJS_* sont remplies dans .env, sinon API Node (/api/contact)
const emailjs = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
}
const useEmailjs = !!(emailjs.service && emailjs.template && emailjs.key)

async function submit() {
  if (form.website) { status.value = 'ok'; return } // robot détecté
  status.value = 'sending'
  try {
    if (useEmailjs) {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailjs.service,
          template_id: emailjs.template,
          user_id: emailjs.key,
          template_params: {
            name: form.name,
            email: form.email,
            message: form.message,
            title: `Message de ${form.name}`, // compatibles avec le modèle EmailJS "Contact Us"
            subject: `Nouveau message de ${form.name}`,
          },
        }),
      })
      if (!res.ok) throw new Error("Envoi impossible pour le moment (" + (await res.text()) + ").")
    } else {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Impossible d'envoyer le message.")
    }
    status.value = 'ok'
    Object.assign(form, { name: '', email: '', message: '', website: '' })
  } catch (e) {
    status.value = 'error'
    error.value = e instanceof Error && e.message !== 'Failed to fetch' ? e.message : 'Le serveur est injoignable.'
  }
}

const mailto = () =>
  `mailto:${profile.email}?subject=${encodeURIComponent('Contact depuis le portfolio')}&body=${encodeURIComponent(form.message)}`
const field = 'w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30'
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl px-6 py-24">
    <SectionTitle eyebrow="07. Contact" title="Travaillons ensemble" />
    <div class="grid gap-10 lg:grid-cols-5">
      <div v-reveal class="space-y-5 lg:col-span-2">
        <p class="leading-relaxed">Un projet, une question ou besoin de support ? Écris-moi, je réponds rapidement.</p>
        <a :href="`mailto:${profile.email}`" class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-brand">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-xl">✉️</span>
          <span><span class="block text-xs">Email</span><span class="font-medium text-fg">{{ profile.email }}</span></span>
        </a>
        <a :href="`tel:${profile.phone}`" class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-brand">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-xl">📞</span>
          <span><span class="block text-xs">Téléphone</span><span class="font-medium text-fg">{{ profile.phone }}</span></span>
        </a>
        <a :href="whatsapp()" target="_blank" rel="noopener" class="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-brand">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-green-500/10 text-xl">💬</span>
          <span><span class="block text-xs">WhatsApp</span><span class="font-medium text-fg">Discuter maintenant</span></span>
        </a>
        <div class="flex flex-wrap gap-3 pt-2">
          <a v-for="x in socials" :key="x.label" :href="x.url" target="_blank" rel="noopener"
             class="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">{{ x.label }}</a>
        </div>
      </div>

      <form v-reveal="150" @submit.prevent="submit" class="space-y-4 rounded-2xl border border-line bg-surface p-6 lg:col-span-3">
        <div class="grid gap-4 sm:grid-cols-2">
          <input v-model.trim="form.name" required maxlength="100" placeholder="Votre nom" aria-label="Votre nom" :class="field" />
          <input v-model.trim="form.email" required type="email" placeholder="Votre email" aria-label="Votre email" :class="field" />
        </div>
        <input v-model="form.website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
        <textarea v-model.trim="form.message" required minlength="10" maxlength="3000" rows="6"
                  placeholder="Votre message (10 caractères minimum)" aria-label="Votre message" :class="field"></textarea>
        <button :disabled="status === 'sending'"
                class="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong disabled:opacity-60">
          {{ status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message' }}
        </button>
        <p v-if="status === 'ok'" class="rounded-xl bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400" role="status">
          ✅ Message envoyé ! Je vous réponds très vite.
        </p>
        <p v-if="status === 'error'" class="rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400" role="alert">
          ❌ {{ error }}
          <a :href="mailto()" class="font-semibold underline">Envoyer par email directement</a>
        </p>
      </form>
    </div>
  </section>
</template>
