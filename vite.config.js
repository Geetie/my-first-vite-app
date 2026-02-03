import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,        // 修改端口号
    open: true         // 启动时自动打开浏览器
  },
  base: './'  
})
