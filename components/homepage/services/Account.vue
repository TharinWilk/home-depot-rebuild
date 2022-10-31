<template>
  <div class="p-4 text-center mb-4">
    <div class="card border-0 bg-white">
      <div class="card-body d-flex flex-column justify-center">
        <!-- Title -->
        <h3 class="h3 fw-bolder">{{ title }}</h3>
        <!-- Image -->
        <div class="d-flex justify-content-center img-container">
          <img
            src="https://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Test_and_Target/UX_Assets/Welcome-to-Home-Depot.jpg"
            alt=""
            class="img"
            loading="lazy"
          />
        </div>
        <!-- Text -->
        <div class="mt-2">
          <p v-for="item in text" :key="item" class="fs-7">{{ item }}</p>
        </div>
        <!-- Button -->
        <div class="mb-3">
          <button
            class="btn btn-outline-primary card-btn w-75 fw-bolder transition-4"
          >
            Create an Account
          </button>
        </div>
        <div>
          <a :href="link.ref" class="card-link">{{ link.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Benefits Down Every Aisle";
const text = [
  "Save more with exclusive offers",
  "Track orders, save receipts",
  "Get 5% off subscription orders",
];

const link = {
  text: "Sign In",
  ref: "#",
};
</script>

<style scoped>
.card {
  min-height: 530px;
}
.img-container {
  height: 200px;
}
.img {
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
