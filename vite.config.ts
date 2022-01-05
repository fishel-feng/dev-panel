import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  // build: {
  //   target: 'esnext',
  //   polyfillDynamicImport: false,
  // },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'dev-panel',
      fileName: (format) => `dev-panel.${format}.js`
    },
  }
});
