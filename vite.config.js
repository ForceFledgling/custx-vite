import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.match(/^center$/),  // exclude center tag from warnings
      }
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules'),
    },
  },
  define: {
    'process.env': {}
  }
})
