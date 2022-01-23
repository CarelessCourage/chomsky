<script setup>
import authordot from "../elements/authordot.vue";
let img = "https://images.unsplash.com/photo-1639321911392-2ba291d62cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
</script>

<template>
  <div id="slide" class="page">
 
    <div class="description">
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

    <div class="authorFixed" v-if="false">
      <div class="authorWrapper">
        <p>By Sara Nevile</p>
        <authordot v-if="true"/>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import "../../css";

@mixin baseTile {
  background: var(--background);
  border-radius: var(--radius);
  width: 100%;
  padding: var(--marginx);
}

.post-wrapper .page {
  display: grid;
  gap: var(--margin);
  @media only screen and (min-width: $tablet) {
    grid-template-columns: auto 1fr;
    gap: var(--margin);
    .title {
      grid-column: span 2;
    }
    .authorWrapper {
      top: var(--margin);
      position: sticky;
      height: 15em;
    }
  }
}

.authorFixed {
  grid-column: span 2;
}

.authorWrapper {
  @include baseTile;
  position: relative;
  cursor: pointer;

  padding: 0px;
  height: 5rem;
  background: var(--background);

  overflow: hidden;
  display: flex;
  grid-auto-flow: dense;
  justify-content: center;
  align-items: center;

  p {transform: translateY(4.5em);}
  .dot {
    --size: 8em;
    position: absolute;
    z-index: -1;
    transform: translateY(-0.7em);
  }

  @media only screen and (max-width: $phablet) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 17em;
    position: absolute;
  }
}

.authorWrapper:hover {
  .dot {
    --size: 27em;
    transform: translateY(0.7em);
  }
}

.button button {
  height: 100%;
  width: 100%;
  border-radius: 0px;
  overflow: hidden;
  * {transition: .4s ease-in-out;}
  &:hover svg {
    transform: scale(1);
    transition: .4s ease-in-out;
  }
  &:active svg {
    transform: scale(2);
    transition: .1s ease-in-out;
  }
}


.title {
  @include baseTile;
  //margin-bottom: var(--margin);
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

.description {
  grid-column: span 2;
  .content {
    margin: auto;
  }
}

.content {
  @include baseTile;
  min-height: 50px;
  width: max-content;
  padding: var(--marginx) var(--marginx) var(--marginxx);
}
</style>
