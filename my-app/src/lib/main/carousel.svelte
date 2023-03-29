<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    let images = [
      'images/modell1.png',
      'images/modell2.png'
    ];
    
    let currentImageIndex = 0;
    let interval;
    
    onMount(() => {
      interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
      }, 3000);
      
      return () => {
        clearInterval(interval);
      }
    });
  </script>
  
  <style>
    .carousel {
      width: 200px;
      height: 300px;
      overflow: hidden;
      position: relative;
    }
    
    .carousel-image {
      width: auto;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 1s ease-in-out;
      justify-self: center;
    }
  </style>
  
  <div class="carousel">
    {#each images as image, index}
      <img
        class="carousel-image"
        src={image}
        alt=""
        style={`opacity: ${index === currentImageIndex ? 1 : 0}`}
      />
    {/each}
  </div>