import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev
export default defineConfig({
  plugins: [
    react({
      // IMPORTANTE: Isso desativa o travamento do Fast Refresh nas rotas!
      fastRefresh: false 
    }),
    tailwindcss(), 
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
