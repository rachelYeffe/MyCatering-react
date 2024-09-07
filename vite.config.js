import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // שימוש במשתנה הסביבה PORT
    host: '0.0.0.0',                 // הקשבה לכל הכתובות (ולא רק ל-localhost)
  },
})
