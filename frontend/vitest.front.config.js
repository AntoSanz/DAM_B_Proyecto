import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const configDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(configDir, '..')

export default defineConfig({
  root: repoRoot,
  plugins: [react()],
  resolve: {
    alias: {
      '@testing-library/react': path.resolve(configDir, 'node_modules/@testing-library/react'),
      '@testing-library/jest-dom': path.resolve(configDir, 'node_modules/@testing-library/jest-dom'),
    },
  },
  test: {
    include: ['tests/front/**/*.{test,spec}.{js,jsx}'],
    environment: 'jsdom',
    setupFiles: './frontend/vitest.setup.js',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
      ],
    },
  },
})
