// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    react(),
    federation({
      name: 'game-platform',
      remotes: {
        colorMatchMaster: 'https://clickcolor.netlify.app/assets/colormatchmaster.js'
      },
      shared: ['react', 'react-dom']
    })
  ]
})