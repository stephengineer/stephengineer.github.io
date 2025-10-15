// 测试配置文件是否正确
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log('Vite config test:')
console.log('- defineConfig:', typeof defineConfig)
console.log('- vue plugin:', typeof vue)

const config = defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  }
})

console.log('Config created successfully:', !!config)
console.log('Config plugins:', config.plugins?.length || 0)
