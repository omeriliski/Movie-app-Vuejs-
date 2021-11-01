<template>

  <div class="container-fluid wrapper row">
    <div class="col-md-4"></div>
    <div class="form-container col-md-4 mt-5">
    <h2 class="mb-5">Contact with us!</h2>
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
.wrapper{
    background-image: url("../assets/film4.jpg");
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
}
h2{
    color: white;
}
.form-container {
  padding: 50px;
  border: 1px solid rgb(212, 210, 210);
}
</style>
