
exports = module.exports = {
  mounted: function (el, { value }) {
    if (typeof value !== 'function') {
      console.warn(`Expect a function, got ${value}`)
      return
    }

    let pressTimer = null

    const start = e => {
      pressTimer = setTimeout(() => value(e), 1000)
    }

    const cancel = () => {
      clearTimeout(pressTimer)
      pressTimer = null
    }

    ;['mousedown', 'touchstart'].forEach(e => el.addEventListener(e, start))
    ;['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.addEventListener(e, cancel))
  }
}
