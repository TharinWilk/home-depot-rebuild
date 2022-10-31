<template>
  <section class="hero bg-primary">
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          class="active bg-primary"
          aria-current="true"
          aria-label="Up to 45% off select tools plus free two day shipping."
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          class="bg-primary"
          aria-label="Special buy savings for select washers and dryers."
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          class="bg-primary"
          aria-label="Shiplap boards. Stylishly upgrade any space."
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="3"
          class="bg-primary"
          aria-label="Foundation. Helping to rebuild hope."
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="#">
            <img
              src="~/assets/images/SelectTools.jpg"
              class="d-block w-100"
              alt="Up to 45% off select tools plus free two day shipping."
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="#">
            <img
              src="~/assets/images/SelectWashersDryers.jpg"
              class="d-block w-100"
              alt="Special buy savings for select washers and dryers."
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="#">
            <img
              src="~/assets/images/ShipLapBoards.jpg"
              class="d-block w-100"
              alt="Shiplap boards. Stylishly upgrade any space."
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="#">
            <img
              src="~/assets/images/Foundation.jpg"
              class="d-block w-100"
              alt="Foundation. Helping to rebuild hope."
            />
          </a>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const slides = [1, 2, 3, 4];
</script>

<style>
/* .hero {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-image: url(~/assets/images/61affe36dfc7a.jpg);
  isolation: isolate;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-47deg, #0c0c0c 0%, #000000cf 100%);
  opacity: 0.96;
  z-index: -1;
} */
</style>
