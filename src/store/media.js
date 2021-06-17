
let media = {
  state: {
    future: 50,
    present: 0,
    marker: 0,
    volume: 50
  },
  mutations: {
    change(state, payload) {
      state[payload.time] = payload.value
    }
  },
}

export default media
