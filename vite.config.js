import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sample-portfolio01-hybrid/',
  plugins: [react()]
})
