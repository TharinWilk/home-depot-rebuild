<template>
  <div class="p-4 text-center mb-4">
    <div class="card border-0 bg-white">
      <div class="card-body">
        <!-- Title -->
        <h3 class="h3 fw-bolder">{{ title }}</h3>
        <!-- Image -->
        <div class="d-flex justify-content-center">
          <img
            src="https://assets.thdstatic.com/images/v1/home-services/personalized-home-services/php_professionalInstallation_services.jpg"
            alt=""
            class="img-fluid"
            loading="lazy"
          />
        </div>
        <!-- Subtitle -->
        <div class="mt-2">
          <p class="fs-6 fw-bolder">{{ subtitle }}</p>
        </div>
        <!-- Text -->
        <div class="mb-3">
          <p class="fs-7">{{ text }}</p>
          <ul class="fs-7 text-start">
            <li v-for="item in list" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- Button -->
        <div class="mb-3">
          <button
            class="btn btn-outline-primary card-btn w-75 fw-bolder transition-4"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Leave Your Next Project to Us";
const subtitle = "Professional Installation & Services";
const text =
  "Get the job done right—The Home Depot adds peace of mind to all your projects";

const list = [
  "Trusted pros at your fingertips",
  "Support every step of the way",
];
</script>

<style scoped>
.card {
  min-height: 530px;
  box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.4);
}
</style>
