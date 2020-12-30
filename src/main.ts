import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import { Lazyload } from 'vant'
const app = createApp(App)

app.use(Lazyload)

app.mount('#app')
