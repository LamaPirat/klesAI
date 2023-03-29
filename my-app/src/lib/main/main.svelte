<script>
  //import Carousel from "./carousel.svelte";
  import Gradient from "./gradient.svelte";
  import Button from "./button.svelte";
</script>



<div class="left-container">
  <h2>Vær din egen</h2>
  <Gradient text="Designer" />
  <p>Bruk din egen fantasi <br> kombinert med kunstlig intelegens <br> og lag nøyaktig hva du vil ha</p>
  <Button text="Ingen tid å miste!" />
</div>



<style>


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

</style>