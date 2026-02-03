<script setup lang="ts">
// 必须导入 ref
import { ref } from 'vue'

// 正确的 Props 定义方式
const props = defineProps<{
  msg?: string
}>()

// 正确的 Emits 定义方式
const emit = defineEmits<{
  (e: 'update-message', value: string): void
}>()

// 现在可以安全使用 ref
const message = ref<string>('Hello TypeScript!')
</script>

<template>
  <div>{{ message }}</div>
  <button @click="emit('update-message', 'New Message')">
    Update Message
  </button>
</template>

<style>
/* 你的样式保持不变 */
.reply-box {
  margin: 15px;
  padding: 12px;
  background: #e8f5e9;
  border-radius: 8px;
  color: #2e7d32;
}
/* ...其他样式... */
</style>console.log(notExist);
