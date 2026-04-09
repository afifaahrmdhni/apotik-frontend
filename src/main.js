import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './styles/global.css'

// Link Ngrok kamu
axios.defaults.baseURL = 'https://floppiest-cordia-pharmaceutically.ngrok-free.dev/api'

// Ini header wajib biar Ngrok gak rewel
axios.defaults.headers.common['ngrok-skip-browser-warning'] = '69420' 
axios.defaults.headers.common['Accept'] = 'application/json'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(createPinia())
app.use(router)
app.mount('#app')