<script>
    import Header from '$lib/header/header.svelte';
    import Main from '$lib/main/main.svelte';
    import Sidebar from '$lib/sidebar/sidebar.svelte';
    import SvgPattern from '$lib/other/svgPattern.svelte';
    import '/src/global.css';
</script>


<div class="container">
    <main><Main /></main>
    <!-- <div class="svg-element">
        <SvgPattern />
      </div> -->
</div>





<style>


    .svg-element{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .svg-element svg{
        width: 500px;
        height: 500px;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
        grid-template-areas: "header header" "main main";
        height: 100vh;
    }
    header {
  grid-column: 1 / span 2;
}

  

  
</style>
