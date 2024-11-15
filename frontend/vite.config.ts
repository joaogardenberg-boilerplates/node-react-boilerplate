import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: parseInt(process.env.PORT!) },
  resolve: {
    alias: {
      components: '/src/components',
      config: '/src/config'
    }
  }
})
