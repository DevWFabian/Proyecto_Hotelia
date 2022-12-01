import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/bootstrap.min.css'

createApp(App).use(router).mount('#app')
