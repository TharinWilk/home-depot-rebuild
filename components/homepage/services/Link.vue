<template>
  <div class="p-2 h-100">
    <div class="card border-0 h-100">
      <a href="" class="card-link card-body transition-4">
        <div class="border-bottom">
          <img :src="src" alt="" class="link-image mb-2" loading="lazy" />
        </div>
        <div class="text-black">
          <h3 class="card-text">{{ title }}</h3>
          <p class="card-text">{{ text }}</p>
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
  text: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.card {
  &:hover {
    .card-body {
      box-shadow: 0px 0px 10px 0px rgba(51, 51, 51, 0.4);
      scale: 1.025;
    }
  }
}
.card-link:hover {
  text-decoration: none;
}
.link-image {
  width: 100%;
  height: 70px;
}
</style>
