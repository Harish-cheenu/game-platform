// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const COLOR_MATCH_MASTER_LOCAL =  "http://localhost:5001/dist/assets/colormatchmaster.js";
const COLOR_MATCH_MASTER_LIVE =  "https://colormatchmaster.netlify.app/assets/colormatchmaster.js";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    federation({
      name: 'game-platform',
      remotes: {
        colorMatchMaster: (mode === 'dev' ? COLOR_MATCH_MASTER_LOCAL : COLOR_MATCH_MASTER_LIVE)
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  }
}))