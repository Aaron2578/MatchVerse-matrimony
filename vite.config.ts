import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: [
      '859f-2409-40f4-4116-4d6e-392f-7d49-53b5-bc09.ngrok-free.app'
    ]
  }
})
