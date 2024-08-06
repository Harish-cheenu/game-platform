// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    federation({
      name: 'game-platform',
      remotes: {
        colorMatchMaster: (mode === 'dev' ?  "http://localhost:5001/dist/assets/colormatchmaster.js" : 'https://colormatchmaster.netlify.app/assets/colormatchmaster.js')
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  }
}))