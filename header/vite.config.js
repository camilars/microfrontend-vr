import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
   base: "/",
  plugins: [
    react(),
    federation({
      name: 'header',

      filename: 'remoteEntry.js',

      exposes: {
        './Header': './src/Header.jsx',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  server: {
    port: 3001,
  },

  preview: {
    port: 3001,
  },

  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
  },
})
