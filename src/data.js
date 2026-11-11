// Tout le contenu du site est ici : modifier ce fichier suffit pour changer les textes.

export const profile = {
  name: 'Nikoloz Shakhnazarov',
  firstName: 'Nikoloz',
  lastName: 'Shakhnazarov',
  role: 'Développeur web junior',
  email: 'nikoloz.shakhnazarov@gmail.com',
  github: 'https://github.com/NIKAerer',
  cv: 'cv-nikoloz-shakhnazarov.pdf',
  lede:
    "Je construis des applications web de bout en bout : une API Symfony côté serveur, une interface React côté utilisateur. Je cherche mon premier poste de développeur web.",
  // section « À propos » : qui je suis, comment je travaille, ce que je fais en ce moment
  about: [
    "Je code depuis le lycée, où j'ai choisi la spécialité NSI. Après deux années de licence d'informatique à Rouen, j'ai voulu une formation plus tournée vers le concret : un BTS SIO option développement, préparé à distance avec le CNED en parallèle de mes missions en entreprise.",
    "En entreprise, j'ai appris ce qu'on attend d'un développeur dans une équipe : prendre un ticket, comprendre le besoin de la personne qui l'a ouvert, livrer une correction propre et versionnée. C'est la partie du métier que je préfère : partir d'un vrai besoin et voir le résultat servir.",
  ],
}

// Chaque projet a une page détaillée (#projet/<slug>). Les captures vont dans public/projets/ ;
// tant que `shots` est vide, la page n'affiche pas de section captures.
export const projects = [
  {
    slug: 'nixus',
    name: 'NIXUS',
    kind: 'Client League of Legends · Windows',
    status: 'En ligne',
    pitch:
      'Mon propre client League of Legends : un launcher pensé comme je voudrais l’utiliser, avec la draft, le chat d’équipe et le classement entre amis.',
    features: ['Accueil et profil', 'Draft et chat d’équipe', 'Classement entre amis'],
    stack: ['API Riot Games', 'Tauri', 'Windows', 'Claude Code'],
    about: [
      'NIXUS remplace le client habituel : l’accueil avec le classement de tes amis, ton profil et ton historique, la collection de tes champions avec tri et filtres, la draft avec les winrates contre les adversaires, et le chat d’équipe.',
      'Il se met à jour tout seul. Chaque version est un installateur signé, et un bouton « Rechercher une mise à jour » suffit : plus de vingt-cinq versions ont été publiées en une semaine, début novembre 2026.',
    ],
    code: 'https://github.com/NIKAerer/NIXUS',
    links: [{ label: 'Versions publiées', href: 'https://github.com/NIKAerer/NIXUS/releases' }],
    shots: [
      { src: 'projets/nixus-home.webp', alt: 'Accueil de NIXUS avec le classement entre amis et les dernières parties', caption: 'Accueil : classement entre amis et dernières parties' },
      { src: 'projets/nixus-draft.webp', alt: 'Écran de draft de NIXUS avec le choix du champion et le chat d’équipe', caption: 'Draft : choix du champion, statistiques et chat d’équipe' },
      { src: 'projets/nixus-grind.webp', alt: 'Page Grind de NIXUS avec la courbe de LP', caption: 'Grind : courbe de LP et série en cours' },
      { src: 'projets/nixus-match.webp', alt: 'Détail d’une partie dans NIXUS', caption: 'Détail d’une partie' },
    ],
  },
  {
    slug: 'pokesurvivor',
    name: 'PokéSurvivor',
    kind: 'Jeu web',
    status: 'En ligne',
    pitch:
      'Parcourir Kanto avec son équipe, combattre au tour par tour et suivre l’histoire de la Team Rocket jusqu’à Giovanni, dans le navigateur ou sur téléphone.',
    features: ['Carte de Kanto', 'Combats au tour par tour', 'Histoire en chapitres'],
    stack: ['JavaScript', 'PWA', 'GitHub Actions', 'Claude Code'],
    about: [
      'Le dresseur se déplace sur la carte de Kanto, ses Pokémon le suivent et les combats se jouent directement sur la carte. L’équipe a de vraies statistiques, on réapprend des attaques, on utilise des CT, on achète en boutique. Le jeu marche aussi hors ligne une fois installé sur le téléphone.',
    ],
    code: 'https://github.com/NIKAerer/pokesurvivor',
    credit: 'Inspiré du jeu PokéSurvivor de JPTER78 (PolyForm Noncommercial). Sprites : PMD SpriteCollab (CC BY-NC 4.0). Pokémon © Nintendo / Creatures / GAME FREAK.',
    links: [{ label: 'Jouer', href: 'https://nikaerer.github.io/pokesurvivor/' }],
    shots: [
      { src: 'projets/pokesurvivor-accueil.webp', alt: 'Accueil de PokéSurvivor avec la boîte de Pokémon', caption: 'Accueil et boîte de Pokémon' },
      { src: 'projets/pokesurvivor-carte.webp', alt: 'Mode Aventure : la carte de Kanto', caption: 'Mode Aventure : la carte de Kanto' },
      { src: 'projets/pokesurvivor-combat.webp', alt: 'Combat au tour par tour dans l’herbe', caption: 'Combat au tour par tour' },
      { src: 'projets/pokesurvivor-partie.webp', alt: 'Une partie survivor avec des hordes de Pokémon', caption: 'Mode survivor' },
    ],
  },
]

export const experience = [
  {
    when: '2024 – 2025',
    role: 'Développeur web',
    org: 'Unicancer',
    place: 'Paris',
    periods: 'Stage, puis deux CDD',
    text:
      "Évolutions et maintenance des sites d'Unicancer, la fédération des centres de lutte contre le cancer. Après mon stage, l'équipe m'a fait revenir deux fois en CDD.",
    points: [
      'Pages, formulaires et éléments interactifs en Symfony et React',
      'Questionnaires en ligne pour les services internes, avec SurveyJS',
      'Tickets GitLab traités en autonomie, de la demande à la mise en ligne',
    ],
    tags: ['PHP', 'Symfony', 'React', 'SurveyJS', 'Git', 'GitLab'],
  },
]

export const education = [
  { when: '2023 – 2026', title: 'BTS SIO option SLAM', where: 'CNED, à distance', note: 'Obtenu', text: 'Développement d’applications : PHP, Symfony, SQL, gestion de projet.' },
  { when: '2021 – 2023', title: 'Licence Informatique', where: 'Université de Rouen', note: '2 années suivies' },
]

export const skills = [
  { group: 'Back-end', items: ['PHP', 'Symfony', 'API Platform', 'API REST', 'JWT', 'SQL / MySQL'] },
  { group: 'Front-end', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind', 'Vite'] },
  { group: 'Outils', items: ['Git', 'GitLab', 'GitHub Actions', 'SurveyJS', 'Blender'] },
  { group: 'Langages', items: ['Python', 'C', 'C#'] },
]
