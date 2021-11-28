import { ref, onMounted } from "vue"

const defaultC = [
  { name: "small", value: 800 },
  { name: "medium", value: 850 },
  { name: "large", value: 950 },
]

export function useContainerQuery(breakpoints = defaultC) {
  let width = ref(10);
  let breakpoint = ref("loading...");
  let container = ref(null);

  function isBreakpoint(br) {
    const queryWidth = width.value;
    const aboveQueryWidth = br.filter((b) => b.value >= queryWidth);
    let closest = breakpoints[breakpoints.length - 1];
    if(aboveQueryWidth.length) {
      closest = aboveQueryWidth[0];
    }
    return closest;
  }

  onMounted(() => {    
    width.value = container.value.getBoundingClientRect().width
    breakpoint.value = isBreakpoint(breakpoints).name;
    window.addEventListener('resize', () => {
      width.value = container.value.getBoundingClientRect().width
      breakpoint.value = isBreakpoint(breakpoints).name;
    })
  });

  return { container, breakpoint, width };
}

export default useContainerQuery