<template>
  <div class="p-4 text-center mb-4">
    <div class="card border-0 bg-white">
      <div class="card-body">
        <!-- Title -->
        <h3 class="h3 fw-bolder">{{ title }}</h3>
        <!-- Image -->
        <div class="d-flex justify-content-center">
          <img
            src="https://assets.thdstatic.com/images/v1/plcc-credit-card.png"
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
        <div>
          <p class="fs-7">{{ text }}</p>
        </div>
        <!-- Button -->
        <div class="mb-3">
          <button
            class="btn btn-outline-primary card-btn w-75 fw-bolder transition-4"
          >
            Apply Now
          </button>
        </div>
        <div>
          <span>See </span>
          <a :href="link.ref" class="card-link">{{ link.text }}</a>
          <span> for offer details.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "Home Depot Credit Card Offers";
const subtitle = "Get The Card, Get Up to $100 Off*";
const text =
  "+6-months everyday financing on purchases over $299* on your qualifying purchase when you open a Home Depot Credit Card.";

const link = {
  text: "Term & Conditions",
  ref: "#",
};
</script>

<style scoped>
.card {
  min-height: 530px;
  box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.4);
}
</style>
