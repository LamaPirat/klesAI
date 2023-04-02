<script>
    export let title = "Creatique";
    import '/src/fonts.css'
    
  </script>

  <svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </svelte:head>
  
  <header>
    <div class="left-header">
      <img src="/images/mascot.png" alt="">
    </div>
    <div class="center-header">
    <h1>{title}</h1>
    
    </div>
    <div class="right-header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <span class="material-symbols-outlined">account_circle</span>
    </div>
  </header>
  
  <style>
  
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      color: #ffffff;
      
    }
    
    h1{
        
        font-family: "Josefin Sans", sans-serif;
        text-shadow: black 0.1em 0.1em 0.2em;
        /* text align center */
        text-align: center;
    }
    nav, ul, li{
        list-style: none;
        padding: 0;
        margin: 0;
        /* remove all list styles from li and ul*/
        text-decoration: none;
    }

    nav{
        display: flex;
        justify-content: center;
        align-items: center;
       
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #ffffff;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 800;
        padding: 0;
        margin: 0;
        
    }

    .left-header{
        position: absolute;
        left: 0;
        padding: 1rem;
    }
    .left-header img{
        width: 100px;
        height: 100px;
    }

    .right-header{
        position: absolute;
        right: 0;
        padding: 1rem;
        display: flex;
        gap: 20px;
    }

    .right-header span{
        font-size: 2rem;
        text-shadow: rgb(107, 107, 107) 0.1em 0.1em 0.2em;
    }

   

   
  </style>