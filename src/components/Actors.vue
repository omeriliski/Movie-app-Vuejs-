<template>
  <h6 class="mt-5">Popular Actors</h6>
  <div class="d-flex flex-wrap">
    <div
      v-for="popularActor in this.$store.state.popularActorsData"
      :key="popularActor"
    >
      <a @click="this.$store.commit('getMoviesbyPerson', popularActor.id)">
        <div class="chip">
          <img
            :src="`${this.$store.state.baseImageUrl}${popularActor.profile_path}`"
            class="card-img-top"
            alt="..."
          />
          <p class="card-title">{{ popularActor.name }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style>
.actors-cards-container p {
  /* font-size: 12px; */
}
</style>
<script>
export default {
  methods: {
    getActor(name) {
      console.log(name);
    },
  },
};
</script>
<style>
.chip {
  margin: 15px;
  width: 180px;
  display: inline-block;
  padding: 0 5px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
}

.chip img {
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
