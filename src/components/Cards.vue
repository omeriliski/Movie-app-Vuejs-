<template>
  <div class="cards-container d-flex flex-wrap m-auto">
    <div v-for="filmData in this.$store.state.filmsData" :key="filmData">
      <div class="card m-3" style="width: 18rem">
        <img v-if="filmData.poster_path!=null"
          :src="`${this.$store.state.baseImageUrl}${filmData.poster_path}`"
          class="card-img-top"
          alt="..."
        />
        <img v-else src="../assets/no_image_available.png" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{ filmData.title }}</h5>
          <p class="card-text">{{ filmData.overview }}</p>
          <h6>{{ filmData.vote_average }}</h6>
          <a href="#" class="btn btn-primary">Go to Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cards-container {
  width: 70vw;
}
.card-title {
  height: 50px;
}
.card-text {
  height: 100px;
  overflow: hidden;
}
</style>
