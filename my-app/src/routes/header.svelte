<script>
    export let title = "Creatique";
    import '/src/fonts.css'
    
  </script>

  <svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </svelte:head>
  
  <header>
    <div class="left-header">
      <span class="material-symbols-outlined">
        menu
        </span>
    </div>
    
    
    <h1>{title}</h1>
    <div class="right-header"><span class="material-symbols-outlined">account_circle</span></div>
  </header>
  
  <style>
  
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: rgb(239, 239, 240);
      color: rgb(114, 134, 160);
        box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
    }
    
    h1{
        
        font-family: "Josefin Sans", sans-serif;
    }


    .left-header{
        position: absolute;
        left: 0;
        padding: 1rem;
        
    }

    .right-header{
        position: absolute;
        right: 0;
        padding: 1rem;
    }

   

   
  </style>