import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//bootstrap假如使用typeScript
// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue3 from 'bootstrap-vue-3';

import App from './App.vue'
import router from './router'

const app = createApp(App)

//app當中要創建實例bootstrap
app.use(BootstrapVue3);

app.use(createPinia())
app.use(router)

app.mount('#app')
