// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom', // 👈 关键：启用 DOM 模拟
    globals: true,            // 👈 全局暴露 expect/it 等
    setupFiles: './tests/setup.ts' // 可选：全局测试设置
  }
})