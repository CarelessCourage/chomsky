
let media = {
  state: {
    volume: 50,
    timecode: 0,
    duration: 0,
    timeui: {
      future: 0,
      present: 0,
      marker: 100,
    },
    enact: {
      hold: 0,
      click: false,
      marker: true
    }
  },
  mutations: {
    timeui(state, payload) {
      state.timeui[payload.time] = payload.value
    },
    interact(state, payload) {
      state.enact[payload.time] = payload.value
    }
  },
}

export default media
