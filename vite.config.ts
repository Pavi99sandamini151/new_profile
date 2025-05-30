import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react()
    ],
    server: {
      port: Number(env.VITE_PORT),
      host: '0.0.0.0',
      proxy: {
      }
    },
    build: {
      target: 'ESNext'
    }
  }
})
