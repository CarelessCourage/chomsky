<template>
  <div class="page-container">
    <router-view />
  </div>
</template>

<style lang="scss">
@use "@/css/" as *;

html {
  color: $fg;
  background-color: $bg;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page-container {
  width: $page;
  max-width: calc(100vw - #{$margin});
  padding-top: 10em;
  margin: auto;
}
</style>
