import photo from '../assets/profile.jpg'
import izzyImg from '../assets/projects/izzy.jpg'
import taskImg from '../assets/projects/taskmanager.jpg'
import loginImg from '../assets/projects/login.jpg'
import wealthyImg from '../assets/projects/wealthy.jpg'
import sneakersImg from '../assets/projects/sneakers.jpg'
import audioImg from '../assets/projects/audio.jpg'
import profilImg from '../assets/projects/profil.jpg'

// ============ MODIFIE TES INFOS ICI ============
export const profile = {
  name: 'OGOUWALE Christiano',
  roles: ['Développeur Web', 'Intégrateur Vue.js', 'Créateur de sites modernes'],
  tagline: 'Je conçois des sites et applications web rapides, accessibles et soignés, avec un support réactif après la mise en ligne.',
  about: [
    "Développeur web passionné, je transforme des idées en produits fiables. J'aime les interfaces propres, le code maintenable et les solutions qui résolvent des problèmes concrets.",
    "Je travaille avec des commerces, des indépendants et des entreprises pour créer leur présence en ligne : du site vitrine à l'application web complète. Disponible en freelance et en entreprise.",
  ],
  email: 'ogouchristoo@gmail.com',
  phone: '0169353602',
  facebook: 'https://www.facebook.com/noelas.newton',
  tiktok: 'https://www.tiktok.com/@best.g603',
  telegram: 'https://t.me/christiano45',
  github: '',   // ex : 'https://github.com/ton-pseudo' (s'affiche seulement si rempli)
  linkedin: '', // ex : 'https://linkedin.com/in/ton-profil'
  available: true,
  photo,
}

// Réseaux sociaux (seuls ceux qui sont remplis s'affichent)
export const socials = [
  { label: 'Facebook', url: profile.facebook },
  { label: 'TikTok', url: profile.tiktok },
  { label: 'Telegram', url: profile.telegram },
  { label: 'GitHub', url: profile.github },
  { label: 'LinkedIn', url: profile.linkedin },
].filter((x) => x.url)

// Chiffres clés (à ajuster avec tes vrais chiffres)
export const stats = [
  { label: 'Projets réalisés', value: 10, suffix: '+' },
  { label: "Années d'expérience", value: 3, suffix: '' },
  { label: 'Technologies maîtrisées', value: 12, suffix: '+' },
  { label: 'Clients satisfaits', value: 8, suffix: '+' },
]

export const services = [
  { icon: '🌐', title: 'Sites vitrines', text: 'Un site professionnel, rapide et adapté au mobile pour présenter votre activité.' },
  { icon: '⚙️', title: 'Applications web', text: 'Interfaces Vue.js sur mesure avec API et base de données.' },
  { icon: '🚀', title: 'Refonte & optimisation', text: 'Modernisation de votre site : performance, design et référencement (SEO).' },
  { icon: '🛠️', title: 'Maintenance & support', text: 'Mises à jour, corrections et assistance réactive après la livraison.' },
]

export const skills = [
  { group: 'Front-end', items: [
    { name: 'Vue.js', level: 85 }, { name: 'JavaScript / TypeScript', level: 80 },
    { name: 'HTML / CSS', level: 92 }, { name: 'Tailwind CSS', level: 85 },
  ] },
  { group: 'Back-end', items: [
    { name: 'Node.js / Express', level: 70 }, { name: 'PHP', level: 65 },
    { name: 'API REST', level: 75 }, { name: 'MySQL', level: 65 },
  ] },
  { group: 'Outils', items: [
    { name: 'Git / GitHub', level: 80 }, { name: 'Figma', level: 60 },
    { name: 'VS Code', level: 90 }, { name: 'Déploiement (Netlify/Vercel)', level: 70 },
  ] },
]

export const projects: {
  title: string; category: string; image?: string; description: string; tech: string[]; demo: string; code: string
}[] = [
  {
    title: 'Izzy Barbershop', category: 'Vitrine', image: izzyImg,
    description: "Site vitrine d'un barbershop à Cotonou : prestations, galerie, réservation et paiement en ligne, bouton WhatsApp. Design sombre et doré.",
    tech: ['Vue.js', 'Vite', 'CSS'], demo: '', code: '',
  },
  {
    title: 'Task Manager', category: 'Application', image: taskImg,
    description: "Gestionnaire de tâches : recherche, priorités, dates d'échéance, filtres, statistiques, export des tâches et mode sombre.",
    tech: ['JavaScript', 'HTML', 'CSS'], demo: '', code: '',
  },
  {
    title: 'Portfolio étudiant', category: 'Portfolio', image: profilImg,
    description: "Page de profil responsive : présentation, centres d'intérêt, liens utiles, emploi du temps et formulaire de contact.",
    tech: ['HTML', 'CSS', 'JavaScript'], demo: '', code: '',
  },
  {
    title: 'Boutique de sneakers', category: 'E-commerce', image: sneakersImg,
    description: "Page produit e-commerce au design sombre : mise en avant du produit, prix, navigation par catégories et précommande.",
    tech: ['HTML', 'CSS', 'JavaScript'], demo: '', code: '',
  },
  {
    title: 'Boutique audio', category: 'E-commerce', image: audioImg,
    description: "Page d'accueil de boutique en ligne : casques sans fil, articles en vedette, panier et contact WhatsApp.",
    tech: ['HTML', 'CSS', 'JavaScript'], demo: '', code: '',
  },
  {
    title: 'Landing page Wealthy', category: 'Vitrine', image: wealthyImg,
    description: "Landing page immersive pour un service financier : hero illustré, avantages clés et sections animées.",
    tech: ['HTML', 'CSS', 'JavaScript'], demo: '', code: '',
  },
  {
    title: 'Page de connexion', category: 'Interface', image: loginImg,
    description: "Interface de connexion et d'inscription avec panneau animé, connexion via réseaux sociaux et formulaire clair.",
    tech: ['HTML', 'CSS', 'JavaScript'], demo: '', code: '',
  },
]

export const experience = [
  { period: '2024 - Présent', title: 'Développeur Web Freelance', place: 'Indépendant', text: 'Création de sites vitrines et applications web pour des clients locaux.' },
  { period: '2023 - 2024', title: 'Projets personnels & formation', place: 'Auto-formation', text: 'Apprentissage approfondi de Vue.js, Node.js et des bonnes pratiques.' },
  { period: '2022 - 2023', title: 'Initiation au développement web', place: 'Formation', text: 'HTML, CSS, JavaScript et premiers projets en ligne.' },
]
