<template>
  <div class="bg-primary py-2 text-center">
    <h2 class="text-white fw-bold">{{ text }}</h2>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
