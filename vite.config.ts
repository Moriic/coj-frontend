import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  ArcoResolver,
} from 'unplugin-vue-components/resolvers'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginVueDevTools(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    visualizer({ open: true }),
    AutoImport({
      resolvers: [ElementPlusResolver(), ArcoResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
  //scss全局变量一个配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
})
