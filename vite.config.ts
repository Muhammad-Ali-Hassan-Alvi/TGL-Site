import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: [
      { find: 'react', replacement: path.resolve(__dirname, './node_modules/react') },
      { find: 'react-dom', replacement: path.resolve(__dirname, './node_modules/react-dom') },
      { find: 'react/jsx-runtime', replacement: path.resolve(__dirname, './node_modules/react/jsx-runtime.js') },
      { find: 'react/jsx-dev-runtime', replacement: path.resolve(__dirname, './node_modules/react/jsx-dev-runtime.js') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
      // next/* subpaths must come BEFORE bare 'next'
      { find: 'next/font/google', replacement: path.resolve(__dirname, './src/shims/next-font-google.ts') },
      { find: 'next/dynamic', replacement: path.resolve(__dirname, './src/shims/next-dynamic.tsx') },
      { find: 'next/navigation', replacement: path.resolve(__dirname, './src/shims/next-navigation.ts') },
      { find: 'next/image', replacement: path.resolve(__dirname, './src/shims/next-image.tsx') },
      { find: 'next/link', replacement: path.resolve(__dirname, './src/shims/next-link.tsx') },
      { find: 'next/script', replacement: path.resolve(__dirname, './src/shims/next-script.tsx') },
      { find: 'next', replacement: path.resolve(__dirname, './src/shims/next.ts') },
    ],
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname)],
    },
  },
})
