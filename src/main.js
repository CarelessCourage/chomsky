import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import clickout from './utils/directives/clickout'
import holdpress from './utils/directives/holdpress'
import longpress from './utils/directives/longpress'

let app = createApp(App).use(store).use(router)

app.use(VuePlyr)

app.directive('clickout', clickout)
app.directive('holdpress', holdpress)
app.directive('longpress', longpress)

app.mount('#app')
