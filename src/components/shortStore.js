import { useStore } from 'vuex'
export default function useQickStore() {
  const store = useStore()

  function click(e) {
    store.commit('interact', { time: "click", value: e })
  }

  function hold(e) {
    store.commit('interact', { time: "hold", value: e })
  }

  function marker(e) {
    store.commit('interact', { time: "marker", value: e })
  }

  function clip(e) {
    store.commit('interact', { time: "clip", value: e })
  }

  function futureX(e) {
    store.commit('future', { time: "x", value: e })
  }

  function futureY(e) {
    store.commit('future', { time: "y", value: e })
  }

  function present(e) {
    store.commit('timeui', { time: "present", value: e })
  }

  return {
    click,
    hold,
    marker,
    clip,
    futureX,
    futureY,
    present
  }
}