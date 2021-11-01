<template>
  <div>
    <div class="input-group input-group-sm mb-3">
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        v-model="this.$store.state.searchText"
        @keydown="this.$store.commit('searchMoviebyText',{})"
      />
    </div>
  </div>
</template>
