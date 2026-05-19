import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cards',

      filename: 'remoteEntry.js',

      exposes: {
        './Cards': './src/Cards.jsx',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3003,
  },

  build: {
    target: 'esnext',
  },
})
