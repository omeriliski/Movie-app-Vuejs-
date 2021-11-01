<template>
  <div>
    <div>Movies</div>
    <a class="link-info" @click="getMoviesbyYear()">2010-2020</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    getMoviesbyYear() {
      axios
        .get(
          `${this.discoverUrl}?api_key=${this.apiKey}&primary_release_date.gte=${this.year1}-01-01&primary_release_date.lte=${this.year2}-12-31&page=${this.pageNo}`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
a{
    cursor: pointer;
}
</style>
