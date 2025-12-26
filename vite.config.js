import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Important: For Render deployment
  base: '/',
  
  // Development server settings (local only)
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Build settings (for production)
  build: {
    outDir: 'dist',
    sourcemap: false, // Render pe sourcemap disable for faster build
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'charts': ['recharts'],
          'icons': ['lucide-react']
        }
      }
    }
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'recharts', 'lucide-react']
  }
})