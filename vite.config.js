import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relative : le site marche aussi bien sur un domaine perso que sur GitHub Pages (/portfolio/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
