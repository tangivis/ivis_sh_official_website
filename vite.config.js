import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',   // 修改这里为相对路径
  plugins: [
    vue(),
    inject({
      $: 'jquery', // 这里会自动载入 node_modules 中的 jquery
      jQuery: 'jquery',
      'windows.jQuery': 'jquery'
    }),
    createHtmlPlugin({
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          VITE_APP_VERSION: new Date().toLocaleString()
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})

