<script>
  import Carousel from "./carousel.svelte";
  import Gradient from "./gradient.svelte";
  import Button from "./button.svelte";
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
    <Carousel />
  </div>
  <div class="svg-element">
    <SvgPattern />
  </div>
</div>




<style>

  .main-container{
    height: 100%;
    display: flex;
    padding-top: 5rem;
    display: flex;
    justify-content: space-evenly;
  }

  .svg-element{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

.left-container{
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