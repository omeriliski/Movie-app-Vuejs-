<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/film1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/film2.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/film3.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  <div class="container-fluid mt-5">
    <h3>Coming Soon</h3>
    <Cards/>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue';
export default {
components: {Cards},
  created: function(){this.$store.commit('getMoviesbyYear', {year1: 2022,year2: 2022})},
};
</script>
