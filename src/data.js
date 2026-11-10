// Tout le contenu du site est ici : modifier ce fichier suffit pour changer les textes.

export const profile = {
  name: 'Nikoloz Shakhnazarov',
  firstName: 'Nikoloz',
  lastName: 'Shakhnazarov',
  role: 'Développeur web junior',
  location: 'Choisy-le-Roi (94) · télétravail possible',
  email: 'nikoloz.shakhnazarov@gmail.com',
  github: 'https://github.com/NIKAerer',
  lede:
    "Diplômé d'un BTS SIO, je développe des applications web avec Symfony côté serveur et React côté interface. Je cherche mon premier poste de développeur en Île-de-France ou en télétravail.",
  // texte de la section « À propos », un paragraphe par ligne
  about: [
    "J'ai commencé l'informatique par une licence à Rouen, puis j'ai choisi le BTS SIO pour aller vers le développement concret. Je l'ai préparé à distance avec le CNED, ce qui m'a appris à avancer seul et à m'organiser.",
    'Je parle français et russe depuis l’enfance, et anglais (B2).',
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
    org: 'Unicancer',
    place: 'Paris',
    detail: 'Fédération nationale des centres de lutte contre le cancer',
    role: 'Développeur web',
    periods: ['Stage juillet 2024', 'CDD oct. – déc. 2024', 'CDD oct. – déc. 2025'],
    intro:
      "J'ai rejoint l'équipe web d'Unicancer en stage, puis j'y suis revenu deux fois en CDD. Je traitais les tickets GitLab en autonomie et je développais de nouvelles fonctionnalités pour les sites de l'organisation.",
    points: [
      'Pages, formulaires et éléments interactifs en PHP / Symfony et React',
      'Questionnaires en ligne créés avec SurveyJS',
      'Corrections de bugs et modifications visuelles à partir des tickets GitLab',
      'Recueil des besoins auprès des services internes, jusqu’à la mise en ligne',
    ],
  },
]

export const education = [
  { years: '2023 – 2026', title: 'BTS SIO option SLAM', where: 'CNED · développement d’applications', note: 'Obtenu' },
  { years: '2021 – 2023', title: 'Licence Informatique (2 années)', where: 'UFR Sciences et Techniques, Rouen' },
  { years: '2021', title: 'Baccalauréat général', where: 'Spécialités Mathématiques et NSI · Lycée Marceau, Chartres' },
]

// chaque compétence est reliée à l'endroit où elle a servi
export const skills = [
  { group: 'Back-end', items: ['PHP', 'Symfony', 'SQL / MySQL'], where: 'Unicancer, projets perso' },
  { group: 'Front-end', items: ['React', 'JavaScript', 'HTML / CSS'], where: 'Unicancer, projets perso' },
  { group: 'Outils', items: ['Git', 'GitLab', 'SurveyJS'], where: 'Unicancer' },
  { group: 'Aussi', items: ['Python', 'C', 'C#', 'Blender'], where: 'Formation, ce site' },
]
