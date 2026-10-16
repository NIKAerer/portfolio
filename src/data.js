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
      'Une application qui transforme les habitudes en RPG : on crée son personnage, on valide des quêtes quotidiennes et on monte de rang, dans l’esprit de Solo Leveling.',
    features: [
      'Création de personnage et avatar',
      'Quêtes quotidiennes et calcul de rang',
      'Suivi de disciplines avec historique',
      'Tracker de parties League of Legends',
    ],
    stack: ['Symfony', 'API REST', 'JWT', 'React 19', 'Vite'],
    status: 'En cours',
    code: null, // lien GitHub quand le dépôt sera public
    demo: null,
  },
  {
    name: 'PokeWeb',
    pitch:
      'Un jeu web d’aventure Pokémon : le dresseur capture, fait évoluer et combat ses créatures, avec un Pokédex complet importé en base.',
    features: [
      'Inscription et connexion sécurisées (JWT)',
      'Import du Pokédex par commande Symfony',
      'Sections capture, évolution et combat',
      'Pokéball en 3D avec Three.js',
    ],
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
    periods: ['Oct. – déc. 2025 · CDD', 'Oct. – déc. 2024 · CDD', 'Juillet 2024 · Stage'],
    points: [
      'Résolution de tickets en autonomie : évolutions et corrections sur les sites de l’organisation',
      'Mise à jour des pages et des contenus',
      'Création, mise en ligne et paramétrage de questionnaires',
      'Recueil des besoins des services non techniques, suivi jusqu’à la mise en ligne',
    ],
  },
  {
    org: 'Novo Nordisk',
    place: 'Chartres',
    role: 'Opérateur de production',
    periods: ['Juin – août 2022 · Emploi d’été'],
    points: ['Travail en milieu pharmaceutique, avec un respect strict des procédures qualité et d’hygiène'],
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
