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
  { icon: '🌐', title: 'Sites vitrines', text: 'Un site professionnel, rapide et adapté au mobile pour présenter votre activité.' },
  { icon: '🛒', title: 'Boutiques e-commerce', text: 'Boutiques en ligne qui mettent vos produits en valeur et facilitent la vente.' },
  { icon: '⚙️', title: 'Applications web', text: 'Interfaces et applications sur mesure adaptées à vos besoins.' },
  { icon: '🎨', title: 'Graphisme & identité visuelle', text: 'Logo, supports de communication et design numérique cohérents.' },
  { icon: '📱', title: 'Création de contenu', text: 'Visuels promotionnels et contenus pour vos réseaux sociaux.' },
  { icon: '📊', title: 'Collecte & gestion de données', text: 'Collecte, organisation et traitement de vos données.' },
  { icon: '🚁', title: 'Prises de vues par drone', text: 'Images aériennes pour des contenus visuels percutants.' },
]

export const skills = [
  { group: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript (DOM, animations)', 'Responsive design', 'Vue.js', 'Tailwind CSS'] },
  { group: 'Back-end & données', items: ['PHP', 'MySQL', 'Collecte & traitement de données'] },
  { group: 'Graphisme & contenu', items: ['Identité visuelle', 'Supports de communication', 'Création de contenu', 'Prises de vues par drone'] },
  { group: 'Outils', items: ['VS Code', 'Git & GitHub', 'Live Server'] },
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
    title: 'Gestionnaire de tâches', category: 'Application', image: taskImg,
    description: "Ajout, modification et suppression de tâches, filtres, niveaux de priorité, mode sombre, sauvegarde locale (localStorage) et export.",
    tech: ['HTML', 'CSS', 'JavaScript'], demo: '', code: '',
  },
  {
    title: 'Page de profil', category: 'Portfolio', image: profilImg,
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
  { period: 'Entreprise', title: 'LINKSPACE', place: 'Développement web & numérique', text: "Création de sites web et de solutions numériques, géolocalisation des entreprises et accompagnement digital de leurs clients." },
  { period: 'Formation', title: 'Informatique appliquée', place: 'Formation', text: "Compétences en e-commerce, collecte et organisation de données, graphisme, création de contenu et pilotage de drone." },
  { period: 'Projets personnels', title: 'Gestionnaire de tâches & portfolio', place: 'HTML, CSS, JavaScript', text: "Applications web responsives avec animations, mode sombre, sauvegarde locale et formulaire de contact." },
]

// Témoignages : ajoute de VRAIS avis de clients (la section s'affiche seulement s'il y en a)
// Exemple : { name: 'Nom du client', role: 'Izzy Barbershop', text: 'Très satisfait du site...' }
export const testimonials: { name: string; role: string; text: string }[] = []

// Chiffres clés calculés à partir de tes vraies données
export const stats = [
  { label: 'Projets présentés', value: projects.length, suffix: '' },
  { label: 'Services proposés', value: services.length, suffix: '' },
  { label: 'Langues parlées', value: languages.length, suffix: '' },
  { label: "Domaines d'expertise", value: 4, suffix: '' },
]
