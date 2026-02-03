<template>
  <div class="message-box">
    <h3>📬 收到消息：</h3>
    <p class="content">{{ message }}</p>
    <button @click="handleReply">💬 回复父组件</button>
  </div>
</template>

<script setup>
// 定义接收的 props（父组件传来的数据）
const props = defineProps({
  message: {
    type: String,
    required: true,
    default: '等待消息...'
  }
})

// 定义要触发的事件（子组件通知父组件）
const emit = defineEmits(['reply'])

// 点击按钮时触发事件
const handleReply = () => {
  emit('reply', '子组件已收到消息！')
}
</script>

<style scoped>
.message-box {
  margin: 20px;
  padding: 20px;
  background: #e3f2fd;
  border-radius: 10px;
  border-left: 4px solid #2196f3;
}
.content {
  font-size: 1.2rem;
  color: #1565c0;
  margin: 15px 0;
}
button {
  background: #2196f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #1976d2;
}
</style>