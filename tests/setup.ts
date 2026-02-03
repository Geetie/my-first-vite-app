// tests/setup.ts
import { config } from '@vue/test-utils'

// 全局配置
config.global.stubs = {
  transition: false,
  'router-link': true
}