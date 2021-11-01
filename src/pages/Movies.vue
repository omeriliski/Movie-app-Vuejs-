<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Movies</h1>
      <div class="row">
        <div class="col-md-3">
            <Years/>
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
import Years from "@/components/Years"
export default {
  data() {
    return {};
  },
  methods: {},
  components:{
      Cards,
      Years
  }
};
</script>

<style>
a {
  cursor: pointer;
}
</style>
