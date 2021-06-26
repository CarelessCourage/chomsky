
let media = {
  state: {
    volume: 50,
    timecode: 0,
    duration: 0,

    timeui: {
      marker: 0,
      present: 0,
      future: {
        x: 0,
        y: 0
      }
    },

    enact: {
      hold: 0,
      click: false,
      clip: true
    }
  },
  mutations: {
    future(state, payload) {
      state.timeui.future[payload.time] = payload.value
    },
    timeui(state, payload) {
      state.timeui[payload.time] = payload.value
    },
    interact(state, payload) {
      state.enact[payload.time] = payload.value
    }
  },
}

export default media
