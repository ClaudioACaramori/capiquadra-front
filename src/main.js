import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './routes';

import 'element-plus/dist/index.css';
import "@/assets/scss/main.scss";

const pinia = createPinia()
const app = createApp(App)

app.use(router);
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')