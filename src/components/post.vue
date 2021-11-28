<script setup>
</script>

<template>
  <div class="post">
    <div class="slide page">
      <div class="abstract">
        <div class="author"></div>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  //transform: translateX(-5em);
}

@mixin baseTile {
  background: var(--background);
  border-radius: var(--radius);
  width: 100%;
}

.abstract {
  @include baseTile;
  margin-bottom: var(--margin);
  min-height: 5em;
  position: relative;
  display: flex;
  justify-content: center;
  .author {--size: 5em;}
}

.content {
  @include baseTile;
  min-height: 10em;
}

.post {background: var(--foreground);}
.slide {
  padding-bottom: var(--marginxx);
}
</style>
