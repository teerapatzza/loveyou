import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // ถ้าคำสั่งคือ 'build' (ตอนจะเอาขึ้น GitHub) ให้เปลี่ยน base เป็นชื่อ repo
  if (command !== 'serve') {
    config.base = '/loveyou/'
  }

  return config
})