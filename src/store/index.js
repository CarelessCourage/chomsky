import { createStore } from 'vuex'
import media from "./media.js"

export default createStore({
  modules: {
    media: media
  }
})
