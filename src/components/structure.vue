<template>
<div class="wrapper paragraphs">
  <h1>This is a title</h1>
  <h3>The type which, through any arbitrary warping of design or excess of 
    ‘colour’
  </h3>
  <p><span>In contemporary use,</span> the practice and study of 
    typography include a broad range, covering all aspects of letter 
    design and application, both mechanical (typesetting, type design, 
    and typefaces) and manual (handwriting and calligraphy).
  </p>
  <p class="details">Typography is the art and technique of arranging type to make 
    written language legible, readable and appealing when displayed. The arrangement 
    of type involves selecting typefaces, point sizes, line lengths, line-spacing 
    (leading), and letter-spacing (tracking), as well as adjusting the space between 
    pairs of letters (kerning[1]).
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
  <p class="web">
    Typography is the work of typesetters (also known as compositors), 
    typographers, graphic designers, art directors, manga artists
  </p>
</div>
</template>

<style lang="scss">

  .paragraphs {
    h1, h2, h3, p {
      margin: 0 0 calc(var(--base) * 2);
    }
  }

  .wrapper {
    max-width: 40em;
    margin: auto;
    padding: 10rem 0em;
  }

  :root {
    --base: 9px;
  }

  h1 {
    text-transform: lowercase;
    //margin: 0 0 calc(var(--base) * 2);
    font-size: calc(var(--base) * 10);
    font-variation-settings: "wght" 900, "wdth" 100;
    max-width: 500px;
    line-height: calc(var(--base) * 8);
  }

  h2 {
    text-transform: lowercase;
    //margin: 0 0 calc(var(--base) * 2);
    font-size: calc(var(--base) * 5);
    font-variation-settings: "wght" 500, "wdth" 100;
    max-width: 500px;
  }

  h3 {
    text-transform: lowercase;
    //margin: 0 0 calc(var(--base) * 2);
    font-size: calc(var(--base) * 3);
    letter-spacing: -0.5px;
    line-height: calc(var(--base) * 3);
    font-variation-settings: "wght" 900, "wdth" 100;
    max-width: 500px;
  }

  p {
    //margin: 0 0 calc(var(--base) * 2);
    font-size: calc(var(--base) * 1.5);
    letter-spacing: 0px;
    line-height: calc(var(--base) * 2);
    font-variation-settings: "wght" 200, "wdth" 100;
    max-width: 500px;
    span {
      font-size: calc(var(--base) * 1.7);
      font-variation-settings: "wght" 900, "wdth" 100;
    }
  }

  p.details {
    text-transform: lowercase;
    font-size: var(--base);
    line-height: calc(var(--base) * 1.3);
    max-width: 300px;
    opacity: .3;
    font-variation-settings: "wght" 800, "wdth" 100;
  }

  p.web span {
    font-size: calc(var(--base) * 3);
  }
</style>