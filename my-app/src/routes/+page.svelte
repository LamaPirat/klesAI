<script>
    import Header from '$lib/header/header.svelte';
    import Main from '$lib/main/main.svelte';
    import Sidebar from '$lib/sidebar/sidebar.svelte';
    import '/src/global.css';
</script>
    
<div class="container">
    <header><Header title="Creatique" /></header>
    <main><Main /></main>
</div>





<style>
    .container{
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: min-content 1fr;
        grid-template-areas: "header header" "main main";
        height: 100vh;
    }
    header {
  grid-column: 1 / span 2;
}

    main {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
    }

  
</style>
