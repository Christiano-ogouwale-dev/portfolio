import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, '..', 'dist')

app.set('trust proxy', 1)
app.use(express.json({ limit: '20kb' }))

// Anti-spam : 5 messages max par IP toutes les 10 minutes
const hits = new Map()
const limited = (ip) => {
  const now = Date.now()
  const list = (hits.get(ip) || []).filter((t) => now - t < 600000)
  list.push(now)
  hits.set(ip, list)
  return list.length > 5
}
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/contact', async (req, res) => {
  const { name, email, message, website } = req.body || {}
  if (website) return res.json({ ok: true }) // honeypot : les robots remplissent ce champ
  if (limited(req.ip)) return res.status(429).json({ error: 'Trop de messages, réessaie plus tard.' })
  if (!name || name.length > 100 || !emailRe.test(email || '') || !message || message.length < 10 || message.length > 3000) {
    return res.status(400).json({ error: 'Vérifie les champs du formulaire.' })
  }
  const { SMTP_USER, SMTP_PASS, TO_EMAIL } = process.env
  if (!SMTP_USER || !SMTP_PASS) return res.status(503).json({ error: "L'envoi d'emails n'est pas encore configuré." })

  try {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: SMTP_USER, pass: SMTP_PASS } })
    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: TO_EMAIL || SMTP_USER,
      replyTo: email,
      subject: `Nouveau message de ${String(name).replace(/[\r\n]/g, ' ')}`,
      text: `De : ${name} <${email}>\n\n${message}`,
      html: `<p><b>De :</b> ${esc(name)} &lt;${esc(email)}&gt;</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`,
    })
    res.json({ ok: true })
  } catch (e) {
    console.error('Erreur envoi email :', e.message)
    res.status(500).json({ error: "Envoi impossible pour le moment." })
  }
})

// En production : sert le site compilé
if (fs.existsSync(dist)) {
  app.use(express.static(dist))
  app.use((_req, res) => res.sendFile(path.join(dist, 'index.html')))
}

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`API prête sur http://localhost:${port}`))
