import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import ViteImages from 'vite-plugin-vue-images';
import WindiCSS from 'vite-plugin-windicss';

module.exports = defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,
  resolve: {
    alias: {
      '@assets/': `${path.resolve(__dirname, './src/assets')}/`,
      '@lib/': `${path.resolve(__dirname, './src/lib')}/`,
    },
  },
  plugins: [
    Vue(),
    Components({
      dirs: ['src/lib'],
    }),
    ViteImages(),
    WindiCSS({
      configFiles: ['../theme-chalk/windi.config.ts'],
      scan: {
        dirs: ['./src'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'components',
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        // globals to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
