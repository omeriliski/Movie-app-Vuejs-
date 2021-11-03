<template>
  <div>
    <div class="cards-container d-flex flex-wrap m-auto">
      <div v-for="filmData in this.$store.state.filmsData" :key="filmData">
        <div class="card m-3" style="width: 18rem">
          <img
            v-if="filmData.poster_path != null"
            :src="`${this.$store.state.baseImageUrl}${filmData.poster_path}`"
            class="card-img-top"
            alt="..."
          />
          <img
            v-else
            src="../assets/no_image_available.png"
            class="no-img card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{{ filmData.title }}</h5>
            <p class="card-text">{{ filmData.overview }}</p>
            <h6>{{ filmData.vote_average }}</h6>
            <a
              @click="this.$store.commit('watch', filmData)"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >Go to Details</a
            >
          </div>
        </div>
      </div>
      <!-- <Modal/> -->
      <div>
        <!-- Button trigger modal -->
        <!-- <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        > 
          Launch demo modal
        </button>-->

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-4">
                    <img
                      v-if="
                        this.$store.state.currentFilmData.poster_path != null
                      "
                      :src="`${this.$store.state.baseImageUrl}${this.$store.state.currentFilmData.poster_path}`"
                      class="modal-image card-img-top"
                      alt="..."
                    />
                    <img
                      v-else
                      src="../assets/no_image_available.png"
                      class="modal-image no-img card-img-top"
                      alt=""
                    />
                  </div>
                  <div class="col-8">
                    <p>{{this.$store.state.currentFilmData.overview}}</p>
                  </div>
                </div>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from "../components/Modal.vue";
export default {
  components: {
    // Modal,
  },
};
</script>

<style>
.cards-container {
  width: 70vw;
}
.card-title {
  height: 50px;
}
.no-img,
.card-img-top {
  height: 430px;
}
.card-text {
  height: 100px;
  overflow: hidden;
}
.modal-image {
  width: 300px;
}
</style>
