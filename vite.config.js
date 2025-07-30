import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'logger', configResolved(config) {
      console.log(`[${config.build.ssr ? 'server' : 'client'}] config.build.cssTarget`, config.build.cssTarget)
    }
  }],
  environments: {
    ssr: {
      build: {
        target: 'es2022',
      }
    }
  },
  build: {
    ssrEmitAssets: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.endsWith('.css')) {
            return id.split('/').pop().split('.')[0]
          }
        }
      }
    }
  }
})
