import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'footer',

      filename: 'remoteEntry.js',

      exposes: {
        './Footer': './src/Footer.jsx',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3002,
  },

  build: {
    target: 'esnext',
  },
})
