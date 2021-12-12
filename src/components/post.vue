<script setup>
import authordot from "./shared/authordot.vue";
</script>

<template>
  <div class="post">
    <div id="slide" class="page">
      <div class="abstract">
        <h1>This is a title</h1>
         <authordot/>
      </div>
      <div class="content paragraphs">
        <p><span>In contemporary use,</span> the practice and study of 
          typography include a broad range, covering all aspects of letter 
          design and application, both mechanical (typesetting, type design, 
          and typefaces) and manual (handwriting and calligraphy).
        </p>
         <p>
          Typography is the work of typesetters (also known as compositors), 
          typographers, graphic designers, art directors, manga artists, 
          comic book artists, and, now, anyone who arranges words, letters, 
          numbers, and symbols for publication, display, or distribution, 
          from clerical workers and newsletter writers to anyone self-publishing 
          materials. 
        </p>
        <h2>This is a sub title</h2>
        <p>
          Typography is the work of typesetters (also known as compositors), 
          typographers, graphic designers, art directors, manga artists, 
          comic book artists, and, now, anyone who arranges words, letters, 
          numbers, and symbols for publication, display, or distribution, 
          from clerical workers and newsletter writers to anyone self-publishing 
          materials. 
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../css";

@mixin baseTile {
  background: var(--background);
  border-radius: var(--radius);
  width: 100%;
  padding: var(--marginx);
}

.abstract {
  @include baseTile;
  margin-bottom: var(--margin);
  min-height: 100px;
  position: relative;
  display: flex;
  .author {
    --size: 70px;
    @media only screen and (max-width: $tablet) {
      --size: 40px;
    }
  }
}

.content {
  @include baseTile;
  min-height: 50px;
  padding: var(--marginx) var(--marginx) var(--marginxx);
}

.post {
  background: var(--foreground);
}

#slide {
  padding-bottom: var(--marginxx);
}
</style>
