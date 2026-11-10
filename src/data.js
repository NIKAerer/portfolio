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

export const projects = [
  {
    name: 'Discipline-Leveling',
    pitch:
      'Les habitudes transformées en RPG : quêtes quotidiennes, montée de rang, dans l’esprit de Solo Leveling.',
    features: ['Personnage et avatar', 'Quêtes et calcul de rang', 'Suivi des disciplines'],
    stack: ['Symfony', 'API REST', 'JWT', 'React 19', 'Vite'],
    status: 'En cours',
    code: null, // lien GitHub quand le dépôt sera public
    demo: null,
  },
  {
    name: 'PokeWeb',
    pitch:
      'Un jeu web d’aventure Pokémon : capturer, faire évoluer et combattre, avec tout le Pokédex en base.',
    features: ['Connexion sécurisée (JWT)', 'Capture, évolution, combat', 'Pokéball en 3D'],
    stack: ['Symfony', 'API Platform', 'React', 'Tailwind', 'Three.js'],
    status: 'En cours',
    code: null,
    demo: null,
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
