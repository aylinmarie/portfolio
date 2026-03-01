import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { substackPlugin } from './src/plugins/substack'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    substackPlugin('https://aylinmarie.substack.com/feed'),
  ],
})
