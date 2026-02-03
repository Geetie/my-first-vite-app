<template>
  <div>
    <h1>✨ Vite 自动部署已激活！</h1>
    
    <!-- 父组件向子组件传递 message -->
    <MessageDisplay 
      :message="parentMessage" 
      @reply="handleChildReply"
    />
    
    <!-- 显示子组件回复 -->
    <div v-if="childReply" class="reply-box">
      <strong>⽗组件收到回复：</strong> {{ childReply }}
    </div>
    
    <!-- 修改父组件消息的输入框 -->
    <div class="input-area">
      <input 
        v-model="parentMessage" 
        placeholder="输入新消息..."
      />
      <button @click="reset">🔄 重置</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MessageDisplay from './components/MessageDisplay.vue'

// 父组件数据（会传给子组件）
const parentMessage = ref('Hello from Parent!')

// 接收子组件的回复
const childReply = ref('')

// 处理子组件触发的 reply 事件
const handleChildReply = (msg) => {
  childReply.value = msg
  alert(`✅ 父组件收到：${msg}`)
}

// 重置消息
const reset = () => {
  parentMessage.value = 'Hello from Parent!'
  childReply.value = ''
}
</script>

<style>
.reply-box {
  margin: 15px;
  padding: 12px;
  background: #e8f5e9;
  border-radius: 8px;
  color: #2e7d32;
}
.input-area {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
}
button {
  background: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #45a049;
}
</style>