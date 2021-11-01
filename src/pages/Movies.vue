<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Movies</h1>
      <div class="row">
        <div class="col-md-3">
          <div class="years-container">
            Years
            <div class="row">
              <a
                class="link-info"
                @click="
                  this.$store.commit('getMoviesbyYear', {
                    year1: 2020,
                    year2: 2021,
                  })
                "
                >2020-2021</a
              >
            </div>
            <div class="row">
              <a
                class="link-info"
                @click="
                  this.$store.commit('getMoviesbyYear', {
                    year1: 2010,
                    year2: 2020,
                  })
                "
                >2010-2020</a
              >
            </div>
            <div class="row">
              <a
                class="link-info"
                @click="
                  this.$store.commit('getMoviesbyYear', {
                    year1: 2000,
                    year2: 2010,
                  })
                "
                >2000-2010</a
              >
            </div>
            <div class="row">
              <a
                class="link-info"
                @click="
                  this.$store.commit('getMoviesbyYear', {
                    year1: 1960,
                    year2: 2000,
                  })
                "
                >1960-2000</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-3">
            <Cards/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards";
export default {
  data() {
    return {};
  },
  methods: {},
  components:{
      Cards,
  }
};
</script>

<style>
a {
  cursor: pointer;
}
</style>
