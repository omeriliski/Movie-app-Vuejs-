<template>
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
</template>
