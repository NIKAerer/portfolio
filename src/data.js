// Tout le contenu du site est ici : modifier ce fichier suffit pour changer les textes.

export const profile = {
  name: 'Nikoloz Shakhnazarov',
  firstName: 'Nikoloz',
  lastName: 'Shakhnazarov',
  role: 'Développeur web junior',
  location: 'Île-de-France · télétravail possible',
  email: 'nikoloz.shakhnazarov@gmail.com',
  github: 'https://github.com/NIKAerer',
  lede:
    "Diplômé d'un BTS SIO option SLAM, je construis des applications web de bout en bout : API Symfony, interface React, mise en ligne. Je cherche un premier poste de développeur web.",
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
    role: 'Développeur web',
    periods: ['2024 – 2025 · stage puis deux CDD'],
    points: [
      'Évolutions et corrections sur les sites de l’organisation, en autonomie',
      'Questionnaires en ligne et pages créés avec les services métier',
    ],
  },
]

export const education = [
  { years: '2023 – 2026', title: 'BTS SIO option SLAM', where: 'CNED · développement d’applications', note: 'Obtenu' },
  { years: '2021 – 2023', title: 'Licence Informatique (2 années)', where: 'UFR Sciences et Techniques, Rouen' },
  { years: '2021', title: 'Baccalauréat général', where: 'Spécialités Mathématiques et NSI · Lycée Marceau, Chartres' },
]

export const skills = [
  { group: 'Back-end', items: ['PHP', 'Symfony', 'SQL / MySQL', 'API Platform', 'JWT'] },
  { group: 'Front-end', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind', 'Three.js'] },
  { group: 'Autres', items: ['Python', 'C', 'Git', 'Blender', 'Photoshop'] },
  { group: 'Langues', items: ['Français (natif)', 'Russe (natif)', 'Anglais (B2)'] },
]
