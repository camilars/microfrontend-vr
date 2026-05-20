import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  base: "/",
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

  preview: {
    port: 3002,
  },

  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
  },
})
