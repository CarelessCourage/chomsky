import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

let app = createApp(App).use(store).use(router)

app.use(VuePlyr)

app.directive('longpress', {
  mounted(el, binding, vNode) {

    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) { warn += `Found in component '${compName}' ` }
      console.warn(warn)
    }

    let pressTimer = null

    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) return
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler()
        }, 1000)
      }
    }

    let cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    const handler = (e) => {
      binding.value(e)
    }

    // Add Event listeners
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    // Cancel timeouts if this events happen
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  }
})

app.mount('#app')
