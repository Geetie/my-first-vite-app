<script setup>
import { ref } from 'vue'

  const count = ref(10)

  // 定义增减方法
  const increment = () => { count.value++ }
  const decrement = () => { count.value-- }

</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <p>count is {{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Give me your Answer
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style>
/* 修改全局样式 */
p { background: #2c3e50; padding: 1rem; }

/* 或新增局部样式 */
.count-box { 
  display: inline-block;
  padding: 1rem;
  background: #42b983;
}
</style>
