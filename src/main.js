import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './styles/global.css'

// Link Ngrok kamu
axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.defaults.headers.common['Accept'] = 'application/json'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(createPinia())
app.use(router)
app.mount('#app')