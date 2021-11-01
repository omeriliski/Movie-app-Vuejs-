<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Movies</h1>
      <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"><Search/></div>
          <div class="col-md-4"></div>
      </div>
      <div class="row m-auto">
        <div class="col-md-3">
          <div class="row">
            <Years/>
          </div>
          <div class="row">
            <Actors/>
          </div>
        </div>
        <div class="col-md-9">
            <Cards/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards";
import Years from "@/components/Years";
import Search from "@/components/Search";
import Actors from "@/components/Actors"
export default {
  data() {
    return {};
  },
  methods: {},
  components:{
      Cards,
      Years,
      Search,
      Actors
  },
  created:
    function() {
      this.$store.commit("getPopularActors");
      this.$store.commit('searchMoviebyText')
    },
};
</script>

<style>
a {
  cursor: pointer;
}
</style>
