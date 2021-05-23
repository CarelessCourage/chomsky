<template>
  <div class="casset" @click="togglePlay">
    <svg ref="svg" viewBox="0 0 220.88 220.88">
      <filter id="neoAngle" height="130%" width="130%">
        <feFlood
          flood-opacity="var(--hOpacity)"
          flood-color="var(--highlight)"
          result="outer-highlight-flood"
        />
        <feComposite
          operator="in"
          result="outer-highlight-filter1"
          in="outer-highlight-flood"
          in2="SourceAlpha"
        />
        <feOffset
          :dx="-orbit[0].px"
          :dy="-orbit[0].py"
          result="outer-highlight-offset"
          in="outer-highlight-filter1"
        />
        <feGaussianBlur
          :stdDeviation="blur"
          edgeMode="none"
          result="outer-highlight-blur"
          in="outer-highlight-offset"
        />
        <feComposite
          operator="out"
          result="outer-highlight-filter2"
          in="outer-highlight-blur"
          in2="SourceAlpha"
        />
        <feFlood
          flood-opacity="var(--sOpacity)"
          flood-color="var(--highlight)"
          result="inner-highlight-flood"
        />
        <feComposite
          operator="out"
          result="inner-highlight-filter1"
          in="inner-highlight-flood"
          in2="SourceAlpha"
        />
        <feOffset
          :dx="orbit[0].px"
          :dy="orbit[0].py"
          result="inner-highlight-offset"
          in="inner-highlight-filter1"
        />
        <feGaussianBlur
          :stdDeviation="blur"
          edgeMode="none"
          result="inner-highlight-blur"
          in="inner-highlight-offset"
        />
        <feComposite
          operator="in"
          result="inner-highlight-filter2"
          in="inner-highlight-blur"
          in2="SourceAlpha"
        />
        <feFlood
          flood-opacity="var(--hOpacity)"
          flood-color="var(--shadow)"
          result="inner-shadow-flood"
        />
        <feComposite
          operator="out"
          result="inner-shadow-filter1"
          in="inner-shadow-flood"
          in2="SourceAlpha"
        />
        <feOffset
          :dx="-orbit[0].px"
          :dy="-orbit[0].py"
          result="inner-shadow-offset"
          in="inner-shadow-filter1"
        />
        <feGaussianBlur
          :stdDeviation="blur"
          edgeMode="none"
          result="inner-shadow-blur"
          in="inner-shadow-offset"
        />
        <feComposite
          operator="in"
          result="inner-shadow-filter2"
          in="inner-shadow-blur"
          in2="SourceAlpha"
        />
        <feFlood
          flood-opacity="var(--sOpacity)"
          flood-color="var(--shadow)"
          result="outer-shadow-flood"
        />
        <feComposite
          operator="in"
          result="outer-shadow-filter1"
          in="outer-shadow-flood"
          in2="SourceAlpha"
        />
        <feOffset
          :dx="orbit[0].px"
          :dy="orbit[0].py"
          result="outer-shadow-offset"
          in="outer-shadow-filter1"
        />
        <feGaussianBlur
          :stdDeviation="blur"
          edgeMode="none"
          result="outer-shadow-blur"
          in="outer-shadow-offset"
        />
        <feComposite
          operator="out"
          result="outer-shadow-filter2"
          in="outer-shadow-blur"
          in2="SourceAlpha"
        />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="outer-highlight-filter2" />
          <feMergeNode in="inner-highlight-filter2" />
          <feMergeNode in="inner-shadow-filter2" />
          <feMergeNode in="outer-shadow-filter2" />
        </feMerge>
      </filter>
      <title>audioCasset</title>
      <path
        style="filter: url(#neoAngle)"
        class="cls-2 path1"
        d="M140.85,199.38a6.39,6.39,0,0,1-4.68,7,103.88,103.88,0,0,1-25.72,3.67,104.06,104.06,0,0,1-25.74-3.67,6.39,6.39,0,0,1-4.67-7l7-54.14a6.4,6.4,0,0,1,8.16-5.31,51.84,51.84,0,0,0,30.41,0,6.4,6.4,0,0,1,8.16,5.31Z"
      />
      <path
        style="filter: url(#neoAngle)"
        class="cls-2"
        d="M175.84,42.89a6.39,6.39,0,0,1,8.38.83,103.84,103.84,0,0,1,15.34,21,103.51,103.51,0,0,1,8.87,24.43,6.38,6.38,0,0,1-4,7.42L153.37,115.8a6.39,6.39,0,0,1-8.52-4.7,51.94,51.94,0,0,0-14.31-26.83,6.39,6.39,0,0,1,.84-9.69Z"
      />
      <path
        style="filter: url(#neoAngle)"
        class="cls-2"
        d="M45,42.89a6.38,6.38,0,0,0-8.37.83,103.83,103.83,0,0,0-15.35,21,104.42,104.42,0,0,0-8.87,24.43,6.39,6.39,0,0,0,4,7.42L67.52,115.8A6.38,6.38,0,0,0,76,111.1,51.94,51.94,0,0,1,90.34,84.27a6.39,6.39,0,0,0-.84-9.69Z"
      />
      <g class="plugs">
        <circle class="cls-4" cx="110.44" cy="66.52" r="4.06" />
        <rect
          class="cls-4"
          x="79.94"
          y="120.58"
          width="8.79"
          height="12.19"
          rx="1.51"
          transform="translate(21.33 265.2) rotate(-121.89)"
        />
        <circle class="cls-4" cx="73.15" cy="133.64" r="4.06" />
        <rect
          class="cls-4"
          x="132.13"
          y="120.62"
          width="8.79"
          height="12.19"
          rx="1.51"
          transform="translate(316.29 77.93) rotate(121.95)"
        />
        <circle class="cls-4" cx="147.71" cy="133.69" r="4.06" />
        <rect
          class="cls-4"
          x="106.05"
          y="73.61"
          width="8.79"
          height="12.19"
          rx="1.51"
        />
      </g>
      <g class="core">
        <circle class="cls-3" cx="110.44" cy="110.44" r="13.43" />
        <circle class="cls-5" cx="110.44" cy="110.44" r="27.35" />
        <circle class="cls-6" cx="110.44" cy="110.44" r="21.21" />
        <circle class="cls-3" cx="110.45" cy="110.44" r="13.43" />
      </g>
    </svg>

    <div class="debug" v-if="false">
      <p>rSeconds: {{ rSeconds }}</p>
      <p>angle: {{ orbit[0].angle }}</p>
      <p>PY: {{ orbit[0].py }}</p>
      <p>PX: {{ orbit[0].px }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cazzetRoll",
  props: {
    play: {
      type: Boolean,
      default: true,
    },
    radius: {
      type: Number,
      default: 8,
    },
    duration: {
      type: Number,
      default: 3.6,
    },
    blur: {
      type: Number,
      default: 5,
    },
    angle: {
      type: Number,
      default: 1.1,
    },
  },
  data() {
    return {
      rotInterval: 0,
      play2: true,
      fullRotationInSeconds: 3.6,
      orbit: [
        {
          angle: 0,
          px: 0,
          py: 0,
        },
      ],
    };
  },
  computed: {
    rSeconds() {
      return String(this.fullRotationInSeconds) + "s";
    },
  },
  methods: {
    togglePlay() {
      this.play2 = !this.play2;
      //let svgRef = this.$refs.svg;

      console.log(this.$refs.svg);

      //bool
      //  ? (svgRef.style.animationPlayState = "running")
      //  : (svgRef.style.animationPlayState = "paused");
    },
    rotate(radius, dur) {
      var angle = this.orbit[0].angle;

      if (this.play2) {
        angle = (angle + Math.PI / dur) % (Math.PI * 2);
      }

      return {
        angle: angle,
        px: radius * Math.cos(angle),
        py: radius * Math.sin(angle),
      };
    },
  },
  mounted() {
    //Setup
    let rot = this.rotate;
    let orbit = this.orbit;
    let radius = this.radius;
    let dur = this.duration * 100;

    //Offset angle so the light comes from the top right
    orbit[0].angle = this.angle;

    //Get the time of one rotation in seconds
    var refresh = 5;
    var circleStep = Math.PI / dur;
    var fullCircle = (Math.PI * 2) / circleStep;
    this.fullRotationInSeconds = (fullCircle * refresh) / 1000;

    orbit[0] = rot(radius, dur);

    //Execute rotation
    this.rotInterval = setInterval(function () {
      orbit[0] = rot(radius, dur);
    }, refresh);
  },
});
</script>

<style scoped lang="scss">
@use "@/css" as *;

#neoAngle {
  --shadow: $fg;
  --highlight: #{scale-color($bg, $lightness: 90%)};
  --hOpacity: 0.4;
  --sOpacity: 0.4;
}

.casset {
  --rollTime: 3.6s;
  @include neomorphism($spread: 4px, $blur: 4px);
  border: solid 1px $fg;
  border-radius: 100%;
  height: 100%;
  width: 100%;
  padding: 9px;
  svg {
    height: 100%;
    width: 100%;
    animation: rotation v-bind(rSeconds) infinite linear reverse;
    animation-play-state: paused;
  }
  path,
  rect,
  circle {
    fill: none;
    stroke: red;
  }

  path {
    stroke: $fg;
    fill: $bg;
    opacity: 1;
  }

  .plugs circle,
  .plugs rect {
    fill: $fg;
    stroke: none;
  }

  .core {
    circle {
      fill: $bg;
      stroke: none;
    }
    circle:nth-of-type(2),
    circle:nth-of-type(4) {
      fill: $fg;
      stroke: none;
    }
  }

  .plugs,
  .core {
    transform-origin: center;
    transform: scale(0.8);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
