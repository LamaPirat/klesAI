<script>
    export let text = 'Gradient';
    let letters = text.split('');
    let colors = [
      ['#ff9a9e', '#fecfef'],
      ['#f6d365', '#fda085'],
      ['#fbc2eb', '#a6c1ee'],
      ['#fdcbf1', '#e6dee9'],
      ['#e0c3fc', '#8ec5fc'],
    ];
  </script>

  <style>
    h1{
        letter-spacing: -4px;
    }
  </style>
  
  <h1>
    {#each letters as letter, i}
      <span
        style="background: linear-gradient(to right, {colors[i % colors.length]}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2em; font-family: 'Josefin Sans', sans-serif;"
      >
        {letter}
      </span>
    {/each}
  </h1>