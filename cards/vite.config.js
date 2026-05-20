import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
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

  preview: {
    port: 3003,
  },

  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
  },
})
