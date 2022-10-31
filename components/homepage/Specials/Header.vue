<template>
  <div class="row pt-3 bg-white">
    <!-- Header Logo -->
    <div class="col-12 col-sm-2 col-lg-1">
      <img src="~/assets/images/sbotd-logo.png" alt="" class="image-logo" />
    </div>
    <!-- Header Text -->
    <div class="col-12 col-sm-10 col-lg-11 lh-1">
      <h2 class="fs-2">
        Up to $220 off Select Patio Furniture, Fire Pits & Outdoor Rugs
      </h2>
    </div>
    <div class="col-12 mt-4">
      <p class="fs-6 fw-bold">
        Today Only! Free Delivery! Ends in
        <!-- Timer -->
        <span class="text-success">
          {{ hours }} hours : {{ minutes }} minutes : {{ seconds }} seconds
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
const hours = ref();
const minutes = ref();
const seconds = ref();
const remainingTime = ref();

const timeRemaining = () => {
  setInterval(() => {
    // Set today and tomorrows times
    const now = new Date();
    const today = now.getDate();
    const tomorrow = new Date(now);

    tomorrow.setDate(today + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // Calculate Remaining time
    remainingTime.value = tomorrow.getTime() - now.getTime();

    // Set Hours, Minutes, and Seconds
    hours.value = Math.floor(
      (remainingTime.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor(
      (remainingTime.value % (1000 * 60 * 60)) / (1000 * 60)
    );
    seconds.value = Math.floor((remainingTime.value % (1000 * 60)) / 1000);
  }, 1000);
};

onMounted(() => {
  timeRemaining();
});
</script>

<style scoped>
.image-logo {
  height: auto;
  max-width: 75px;
  max-height: 75px;
}

h2 {
  font-weight: 900;
}
</style>
