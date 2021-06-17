<template>
    <vue-plyr 
        ref="plyr" 
        id="player">
        <video
            crossorigin
            playsinline
            data-poster="poster.jpg"
        >
            <source 
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" 
                type="video/mp4" />
        </video>
    </vue-plyr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "mediaPlayer",
  setup() {
    const playerOptions = {
        seekTime: 5,
        controls: ['progress'],
    }
    return {playerOptions}
  }
});
</script>

<style scoped lang="scss">
@use "@/css" as *;

</style>
