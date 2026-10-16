# Portfolio · Nikoloz Shakhnazarov

Mon portfolio de développeur web. On arrive devant mon bureau, rendu dans Blender ; en faisant défiler, la caméra plonge dans l'écran du PC et le site prend le relais.

## Lancer en local

```bash
npm install
npm run dev
```

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Les textes, projets, parcours, compétences | `src/data.js` |
| Les couleurs et la mise en page | `src/index.css` |
| La page affichée dans l'écran du PC | `src/components/ScreenPage.jsx` |
| Le lecteur d'images du bureau | `src/hero/player.js` |

## Le bureau 3D

Le bureau n'est pas de la 3D en temps réel : ce sont de vraies images rendues dans Blender (Cycles), affichées une par une au scroll. Les images sont dans `public/sequence/` :

- `frames/wide/` : la plongée vers l'écran (ordinateur), `frames/portrait/` sa version téléphone ;
- `arc/` : la caméra qui tourne de gauche à droite quand on glisse ;
- `corners.json` : la position des 4 coins de l'écran du PC dans chaque image, pour y plaquer la page.

Après un nouveau rendu Blender, recompresser les images pour le web :

```bash
python scripts/optimize_frames.py <dossier_du_rendu> public/sequence
```

Le nombre d'images est lu dans `corners.json`, donc rien d'autre à changer.

## Mise en ligne

Le site se déploie sur GitHub Pages à la main : onglet **Actions**, workflow **Déployer le site**, bouton **Run workflow**. Il faut d'abord activer Pages une fois : *Settings > Pages > Source : GitHub Actions*.

## Crédits

Textures et décors : [Poly Haven](https://polyhaven.com) (CC0). Certains objets du bureau viennent de Sketchfab sous licence CC BY, leurs auteurs sont crédités sur le site.

## Stack

React 19, Vite, canvas 2D. Modélisation et rendu : Blender.
