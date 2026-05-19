import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',

      remotes: {
        header: 'http://localhost:3001/assets/remoteEntry.js',
        footer: 'http://localhost:3002/assets/remoteEntry.js',
        cards: 'http://localhost:3003/assets/remoteEntry.js',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3000,
  },

  build: {
    target: 'esnext',
  },
})
