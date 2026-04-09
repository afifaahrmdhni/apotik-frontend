import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 1. Import axios
import './styles/global.css'

// 2. Set alamat Backend Ngrok kamu di sini
axios.defaults.baseURL = 'https://floppiest-cordia-pharmaceutically.ngrok-free.dev/api'

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true'

const app = createApp(App)

// 3. Pasang axios ke global properties supaya bisa dipake di semua komponen
app.config.globalProperties.$axios = axios

app.use(createPinia())
app.use(router)
app.mount('#app')