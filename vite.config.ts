import { defineConfig } from 'vite'
export default defineConfig({
  define: {
    __VITEPRESS_CONFIG__: JSON.stringify({
      title: 'Clover 精选',
      description: '发现下一个让你惊艳的工具'
    })
  }
})
