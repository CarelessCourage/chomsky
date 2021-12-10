<template>
<div class="interact">
  <div class="header">
    <h1 class="logo">Chomsky</h1>
  </div>
  <div class="panel">
    <div class="controls">
      <div class="connection"></div>
      <div class="settings"></div>
      <div class="speaker"></div>
      <div class="mic"></div>
      <div class="call"></div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
h1.logo {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 70px;
  letter-spacing: -0.15em;
  line-height: 0.64em;
  padding-top: 0.08em;
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
  height: 10em;
  padding: 5px;

  div {
    background: var(--background);
  }

  div:nth-child(1) {
    grid-column: span 3;
  }

  div:last-child {
    grid-column: span 2;
  }
}
</style>