<script>
  import Carousel from "./carousel.svelte";
  import Gradient from "./gradient.svelte";
  import Button from "./button.svelte";
  import ModelContain from "./modelContain.svelte";
  import SvgPattern from "$lib/other/svgPattern.svelte";
</script>


<div class="main-container">
  <div class="left-container">
    <h2>Vær din egen</h2>
    <Gradient text="Designer" />
    <p>Bruk din egen fantasi <br> kombinert med kunstlig intelegens <br> til å lage nøyaktig hva du vil ha</p>
    <Button text="Ingen tid å miste!" />
  </div>
  <div class="right-container">
    <ModelContain />
  </div>
</div>




<style>

  .main-container{
    height: 100%;
    display: flex;
    
    display: flex;
    justify-content: space-evenly;
  }


  .right-container{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  

.left-container{
  padding-top: 5rem;
  width: auto;
  height: fit-content;
  display: inline-block
}

.left-container *{
  padding: 0;
  margin: 0;
}

.left-container h2{
  margin-bottom: -1rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
}
p{
  margin-top: 1rem;
  margin-bottom: -1rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #ffffff;
}
</style>