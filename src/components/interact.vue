<template>
<div class="interact">
  <div class="header">
    <h1 class="logo">Chomsky</h1>
  </div>
  <div class="panel">
    <div class="controls">
      <div class="connection">
        <i class="fas fa-microphone-slash"></i>
        <p><span>connection <br> strong</span></p>
      </div>
      <div class="settings">
        <i class="fas fa-cogs"></i>
      </div>
      <div class="speaker">
        <i class="fas fa-headphones"></i>
      </div>
      <div class="mic">
        <i class="fas fa-microphone-slash"></i>
      </div>
      <div class="call">
        <i class="fas fa-phone-slash"></i>
        <p><span>hang up</span></p>
      </div>
    </div>

  </div>
</div>
</template>

<style lang="scss">
h1.logo {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 70px;
  letter-spacing: -0.15rem;
  line-height: 0.64rem;
  padding-top: 0.08rem;
}

.interact {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
  color: var(--background);
  background: var(--foreground);
}

.header {
  grid-column: span 2;
  background: var(--foreground);
  height: var(--interactY);
  //border-bottom: var(--background) solid 4px;
  display: grid;
  align-items: center;
}

.panel {
  grid-row: 2;
  grid-column: 2 / span 1;
  background: var(--foreground);
  width: var(--interactX);
  display: grid;
  //border-left: var(--background) solid 4px;
}

.controls {
  align-self: end;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  height: 7rem;
  padding: 5px;

  div {
    display: flex;
    justify-content: start;
    align-items: center;
    grid-gap: 10px;
    padding: 0px var(--margin);
    background: var(--background);
    color: var(--foreground);
    cursor: pointer;
  }

  div:nth-child(1) {
    grid-column: span 3;
  }

  div:last-child {
    grid-column: span 2;
  }
}
</style>