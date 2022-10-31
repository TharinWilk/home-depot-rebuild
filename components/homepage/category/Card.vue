<template>
  <div class="py-2 px-4">
    <div class="card">
      <a href="#" class="card-link">
        <div class="card-body d-flex justify-content-start align-items-center">
          <slot />
          <h5 class="card-title text-black ms-4 fs-6">{{ title }}</h5>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.4);
    scale: 1.025;
  }
}
.card-link:hover {
  text-decoration: none;
}
</style>
