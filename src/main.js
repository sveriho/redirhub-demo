import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'

import router from './router'
import App from './App.vue'

import 'primeicons/primeicons.css'
import './css/base.css'

const app = createApp(App)

app.use(PrimeVue, { unstyled: true, pt: Tailwind })
app.use(router)

app.mount('#app')
