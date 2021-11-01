<template>
  <div class="row mt-5">
    <div class="col-md-4"></div>
    <div class="form-container col-md-4 mt-5">
      <div class="mb-3">
        <input
          class="mb-3 form-control"
          type="text"
          id="name"
          placeholder="Your name"
        />

        <input
          class="mb-3 form-control"
          type="email"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <input type="submit" class="btn btn-success" />
    </div>
    <div class="col-md-4"></div>
  </div>

</template>

<style>
    .form-container{
        padding: 50px;
        border: 1px solid rgb(212, 210, 210);
    }
</style>
