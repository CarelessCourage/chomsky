<script setup>
import authordot from "./shared/authordot.vue";
let img = "https://images.unsplash.com/photo-1639321911392-2ba291d62cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
</script>

<template>
  <div class="post">
    <div id="slide" class="page">
      <div class="abstract">
        <h1>This is a title</h1>
      </div>
      <div class="authorFixed">
        <div class="authorWrapper">
          <div class="button">
            <button><i class="fas fa-feather-alt"></i></button>
          </div>
          <div class="button">
            <button><i class="fas fa-folder-open"></i></button>
          </div>
          <div class="image">
            <i class="fas fa-signature"></i>
            <img :src="img">
          </div>
          <div class="button" v-if="false">
            <button><i class="fas fa-signature"></i></button>
          </div>
          <div class="button">
            <button>Follow</button>
          </div>
          <authordot v-if="false"/>
        </div>
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

.post .page {
  display: grid;
  @media only screen and (min-width: $tablet) {
    grid-template-columns: 1fr auto;
    gap: var(--margin);
    .abstract {
      grid-column: span 2;
    }
    .authorWrapper {
      top: var(--margin);
      position: sticky;
      grid-template-columns: 1fr 1fr 1fr;
      height: 20em;
      .image {
        grid-column: span 3;
      }
    }
  }
}

.authorWrapper {
  @include baseTile;
  position: relative;
  padding: 0px;
  height: 5rem;
  background: var(--background);
  //margin-bottom: var(--margin);
  overflow: hidden;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr auto 1fr;

  @media only screen and (max-width: $phablet) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 7em;
    .image {
      grid-column: span 3;
    }
  }

  .button {
    button {
      height: 100%;
      width: 100%;
      border-radius: 0px;
      overflow: hidden;
      * {
        transition: .4s ease-in-out;
      }
      &:hover svg {
        transform: scale(8);
        transition: .4s ease-in-out;
      }
      &:active svg {
        transform: scale(6);
        transition: .1s ease-in-out;
      }
    }
  }

  .image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    img {
      opacity: 0.2;
      filter: blur(3px);
      transform: scale(1.1);
    }
    svg {
      z-index: 1;
      position: absolute;
      color: var(--foreground);
      font-size: 50rem;
      opacity: 0.4;
    }
  }

  img {
    width: 100%;
    //width: 50em;
    object-fit: cover;
    //object-position: 0px 130px;
  }
}

.abstract {
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
