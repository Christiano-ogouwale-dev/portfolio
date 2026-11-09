import photo from '../assets/profile.webp'
import izzyImg from '../assets/projects/izzy.webp'
import taskImg from '../assets/projects/taskmanager.webp'
import loginImg from '../assets/projects/login.webp'
import wealthyImg from '../assets/projects/wealthy.webp'
import sneakersImg from '../assets/projects/sneakers.webp'
import audioImg from '../assets/projects/audio.webp'
import profilImg from '../assets/projects/profil.webp'

// ============ MODIFIE TES INFOS ICI ============
const phone = '0169353602'
const whatsappNumber = '229' + phone // indicatif Bénin (+229) : change-le si besoin
export const whatsapp = (msg = 'Bonjour Christiano, je vous contacte depuis votre portfolio.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`

export const profile = {
  name: 'OGOUWALE Christiano',
  roles: ['Développeur Web', 'Créateur de sites & applications', 'Graphiste', 'Créateur de contenu'],
  tagline: 'Je conçois des sites vitrines, boutiques e-commerce et applications web modernes, responsives et accessibles.',
  about: [
    "Développeur web passionné par la conception de solutions numériques modernes, responsives et accessibles. Je réalise des sites vitrines, des boutiques e-commerce, des interfaces web et des applications sur mesure, et j'accompagne les entreprises dans leur présence digitale.",
    "Mon profil polyvalent associe développement, graphisme et création de contenu. Chez LINKSPACE, je crée des sites web et des solutions numériques, et j'accompagne les clients dans leur visibilité en ligne.",
  ],
  company: 'LINKSPACE',
  email: 'ogouchristoo@gmail.com',
  phone,
  cv: '/cv-christiano-ogouwale.pdf',
  facebook: 'https://www.facebook.com/noelas.newton',
  tiktok: 'https://www.tiktok.com/@best.g603',
  telegram: 'https://t.me/christiano45',
  github: 'https://github.com/christiano-ogouwale-dev',
  linkedin: '', // ex : 'https://linkedin.com/in/ton-profil'
  available: true,
  photo,
}

export const languages = ['Français', 'Anglais']
export const qualities = ['Autonomie', 'Créativité', "Capacité d'apprentissage", 'Résolution de problèmes']

export const socials = [
  { label: 'Facebook', url: profile.facebook },
  { label: 'TikTok', url: profile.tiktok },
  { label: 'Telegram', url: profile.telegram },
  { label: 'GitHub', url: profile.github },
  { label: 'LinkedIn', url: profile.linkedin },
].filter((x) => x.url)

export const services = [
  { icon: 'globe', title: 'Sites vitrines', text: 'Un site professionnel, rapide et adapté au mobile pour présenter votre activité.' },
  { icon: 'cart', title: 'Boutiques e-commerce', text: 'Boutiques en ligne qui mettent vos produits en valeur et facilitent la vente.' },
  { icon: 'code', title: 'Applications web', text: 'Interfaces et applications sur mesure adaptées à vos besoins.' },
  { icon: 'palette', title: 'Graphisme & identité visuelle', text: 'Logo, supports de communication et design numérique cohérents.' },
  { icon: 'smartphone', title: 'Création de contenu', text: 'Visuels promotionnels et contenus pour vos réseaux sociaux.' },
  { icon: 'database', title: 'Collecte & gestion de données', text: 'Collecte, organisation et traitement de vos données.' },
  { icon: 'camera', title: 'Prises de vues par drone', text: 'Images aériennes pour des contenus visuels percutants.' },
]

export const skills = [
  { group: 'Front-end', items: [
    { name: 'HTML5', level: 90 }, { name: 'CSS3', level: 85 },
    { name: 'JavaScript (DOM, animations)', level: 75 }, { name: 'Responsive design', level: 85 },
    { name: 'Vue.js', level: 65 }, { name: 'Tailwind CSS', level: 75 },
  ] },
  { group: 'Back-end & données', items: [
    { name: 'PHP', level: 60 }, { name: 'MySQL', level: 60 },
    { name: 'Collecte & traitement de données', level: 70 },
  ] },
  { group: 'Graphisme & contenu', items: [
    { name: 'Identité visuelle', level: 70 }, { name: 'Supports de communication', level: 70 },
    { name: 'Création de contenu', level: 80 }, { name: 'Prises de vues par drone', level: 65 },
  ] },
  { group: 'Outils', items: [
    { name: 'VS Code', level: 90 }, { name: 'Git & GitHub', level: 70 }, { name: 'Live Server', level: 85 },
  ] },
]

export const experience = [
  { period: 'Entreprise', title: 'LINKSPACE', place: 'Développement web & numérique', text: "Création de sites web et de solutions numériques, géolocalisation des entreprises et accompagnement digital de leurs clients." },
  { period: 'Formation', title: 'Informatique appliquée', place: 'Formation', text: "Compétences en e-commerce, collecte et organisation de données, graphisme, création de contenu et pilotage de drone." },
  { period: 'Projets personnels', title: 'Gestionnaire de tâches & portfolio', place: 'HTML, CSS, JavaScript', text: "Applications web responsives avec animations, mode sombre, sauvegarde locale et formulaire de contact." },
]

// Témoignages : ajoute de VRAIS avis de clients (la section s'affiche seulement s'il y en a)
// Exemple : { name: 'Nom du client', role: 'Izzy Barbershop', text: 'Très satisfait du site...' }
export const testimonials: { name: string; role: string; text: string }[] = []

export const projects = [
  {
    title: 'IZZY',
    category: 'Beauté & grooming',
    description: 'Site vitrine premium pour une marque de soins capillaires et de beauté.',
    image: izzyImg,
    technologies: ['Vue.js', 'Tailwind CSS', 'Responsive Design'],
    link: '#',
  },
  {
    title: 'Task Manager',
    category: 'Productivité',
    description: 'Application de gestion de tâches avec interface moderne et sauvegarde locale.',
    image: taskImg,
    technologies: ['JavaScript', 'CSS3', 'Local Storage'],
    link: '#',
  },
  {
    title: 'Login UI',
    category: 'Interface utilisateur',
    description: 'Maquette de connexion élégante et fonctionnelle pour une expérience utilisateur fluide.',
    image: loginImg,
    technologies: ['HTML5', 'CSS3', 'UX Design'],
    link: '#',
  },
  {
    title: 'Wealthy',
    category: 'Finance & gestion',
    description: 'Dashboard de suivi financier pensé pour une lecture rapide des performances.',
    image: wealthyImg,
    technologies: ['JavaScript', 'Responsive Design', 'UI/UX'],
    link: '#',
  },
  {
    title: 'Sneakers',
    category: 'E-commerce',
    description: 'Boutique digitale centrée sur les produits et la conversion mobile.',
    image: sneakersImg,
    technologies: ['E-commerce', 'Design', 'Performance'],
    link: '#',
  },
  {
    title: 'Audio Studio',
    category: 'Média & branding',
    description: 'Landing page dédiée à une expérience audio premium et immersive.',
    image: audioImg,
    technologies: ['Branding', 'Motion', 'Web Design'],
    link: '#',
  },
  {
    title: 'Profil / Portfolio',
    category: 'Portfolio personnel',
    description: 'Portfolio personnel pensé pour mettre en valeur le profil, les services et les réalisations.',
    image: profilImg,
    technologies: ['Portfolio', 'Responsive', 'SEO'],
    link: '#',
  },
]

// Chiffres clés calculés à partir de tes vraies données
export const stats = [
  { label: 'Projets présentés', value: projects.length, suffix: '' },
  { label: 'Services proposés', value: services.length, suffix: '' },
  { label: 'Langues parlées', value: languages.length, suffix: '' },
  { label: "Domaines d'expertise", value: 4, suffix: '' },
]
