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
    kind: 'Application de bureau · Windows',
    status: 'En ligne',
    pitch:
      'Une application de bureau pour les joueurs de League of Legends : préparer la draft, suivre ses parties et se comparer à ses amis.',
    features: ['Draft et statistiques', 'Classement entre amis', 'Chat d’équipe'],
    stack: ['Tauri', 'Windows', 'Claude Code'],
    about: [
      'NIXUS accompagne une partie de League of Legends de la sélection des champions jusqu’au bilan : draft avec winrate contre les adversaires, historique des parties et de tes amis, classement Solo/Duo et Flex entre amis, chat d’équipe, collection de champions avec tri et filtres.',
      'L’application se met à jour toute seule : chaque version est un installateur signé, publié avec un fichier de version que l’appli lit via le bouton « Rechercher une mise à jour ». Plus de vingt-cinq versions ont été publiées entre le 4 et le 9 novembre 2026.',
    ],
    mine: [
      'Publication et mise à jour automatique : installateurs signés, fichier de version lu par l’application',
    ],
    code: null,
    codeNote: 'Le code source est privé.',
    links: [{ label: 'Versions publiées', href: 'https://github.com/NIKAerer/NIXUS' }],
    shots: [],
  },
  {
    slug: 'pokesurvivor',
    name: 'PokéSurvivor',
    kind: 'Jeu web · mode Aventure',
    status: 'En ligne',
    pitch:
      'Un jeu Pokémon jouable dans le navigateur, sur ordinateur comme sur téléphone. J’y ai développé le mode Aventure : on parcourt Kanto avec son équipe et on affronte les dresseurs au tour par tour.',
    features: ['Carte de Kanto et combats au tour par tour', 'Équipe entraînée (IV et points d’effort)', 'Histoire en chapitres'],
    stack: ['JavaScript', 'PWA', 'GitHub Actions', 'Claude Code'],
    about: [
      'PokéSurvivor est un fan game gratuit, qui marche dans le navigateur et hors ligne une fois installé sur le téléphone. Le jeu de base est celui de JPTER78 (licence non commerciale) : j’en suis reparti pour construire le mode Aventure.',
      'Dans ce mode, le dresseur se déplace sur la carte de Kanto, ses Pokémon le suivent et les combats se jouent au tour par tour directement sur la carte. L’équipe a de vraies statistiques (IV et points d’effort), on peut réapprendre une attaque, utiliser des CT, acheter en boutique, et l’histoire avance par chapitres : Team Rocket, Sylphe SARL, Giovanni…',
    ],
    mine: [
      'Le mode Aventure en entier : plus de 4 700 lignes de code et une cinquantaine de commits, de fin octobre au 3 novembre 2026',
      'Le déploiement : chaque modification poussée republie le jeu automatiquement sur GitHub Pages',
    ],
    code: 'https://github.com/NIKAerer/pokesurvivor',
    credit: 'Basé sur PokéSurvivor de JPTER78 (PolyForm Noncommercial). Sprites : PMD SpriteCollab (CC BY-NC 4.0). Pokémon © Nintendo / Creatures / GAME FREAK.',
    links: [{ label: 'Jouer', href: 'https://nikaerer.github.io/pokesurvivor/' }],
    shots: [],
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
  { group: 'Front-end', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind', 'Three.js', 'Vite'] },
  { group: 'Outils', items: ['Git', 'GitLab', 'GitHub Actions', 'SurveyJS', 'Blender'] },
  { group: 'Langages', items: ['Python', 'C', 'C#'] },
]
