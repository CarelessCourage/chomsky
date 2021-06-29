<template>
  <vue-plyr
    ref="player" 
    id="player"
    :options="playerOptions"
  >
    <video
      crossorigin
      playsinline
      data-poster="poster.jpg"
    >
    <source 
      src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" 
      type="video/mp4"
    />
    </video>
  </vue-plyr>
</template>

<script>
import { percentToNumber, numberToPercent } from '@/utils/utils.js'

import { 
  defineComponent, 
  ref,
  watch,
  onUnmounted, 
  computed, 
  onMounted,
} from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  name: "mediaPlayer",
  setup() {
    const store = useStore()
    const player = ref(null)

    const playerWait = ref(false)
    watch(playerWait, (newValue) => {
      if(newValue) setTimeout(() => {playerWait.value = false}, 1000)
    })

    const playerOptions = {
      seekTime: 5,
      controls: [],
    } 

    function playerTime(perc) {
      const duration = player.value.player.duration
      let time = percentToNumber(perc, duration)
      player.value.player.currentTime = time
    }

    //Controls -> Player
    let enactClick = computed(() => {return store.state.media.enact.click})
    watch(enactClick, (newValue) => {
      playerWait.value = true
      if(!newValue) {
        const perc = store.state.media.timeui.present
        playerTime(perc)
      }
    })

    //Player -> Controls
    onMounted(() => {
      player.value.player.on('timeupdate', event => {

        const time = event.detail.plyr.currentTime
        const duration = player.value.player.duration
        let perc = numberToPercent(time, duration)

        if(!playerWait.value) store.commit('timeui', { time: "present", value: perc })
      })
    })

    //Live update on drag
    let hold = computed(() => {return store.state.media.enact.hold})
    watch(hold, (newValue) => {
      //Update player when present changes
      //newValue > 0 ? 
      //  playerTime(store.state.media.timeui.future.y) : 
      //  playerTime(store.state.media.timeui.present)
      console.log(newValue)
    })

    onUnmounted(() => {
      player.value.player.destroy()
    })
    
    return {player, playerOptions}
  }
});
</script>

<style scoped lang="scss">
@use "@/css" as *;
</style>
