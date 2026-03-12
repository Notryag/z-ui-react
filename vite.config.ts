import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const isLibraryBuild = mode === 'library';

  return {
    plugins: [
      react(),
      tsconfigPaths(),
    ],
    build: isLibraryBuild
      ? {
          emptyOutDir: false,
          outDir: 'dist/lib',
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ZUIReact',
            fileName: 'index',
            formats: ['es', 'cjs'],
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
          },
        }
      : {
          outDir: 'dist/demo',
        },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
    },
  };
});
