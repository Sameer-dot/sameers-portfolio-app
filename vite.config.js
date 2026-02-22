import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'force-exit',
      closeBundle() {
        setTimeout(() => process.exit(0), 2000);
      },
    },
  ],
})
