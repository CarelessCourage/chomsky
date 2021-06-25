
exports = module.exports = {
  mounted: function (el, { value }) {
    if (typeof value !== 'function') {
      console.warn(`Expect a function, got ${value}`)
      return
    }

    let holdInterval = null

    const start = e => {
      holdInterval = setInterval(() => value(e), 100)
    }

    const cancel = () => {
      clearInterval(holdInterval)
      holdInterval = null
    }

    ;['mousedown', 'touchstart'].forEach(e => el.addEventListener(e, start))
    ;['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.addEventListener(e, cancel))
  }
}
  