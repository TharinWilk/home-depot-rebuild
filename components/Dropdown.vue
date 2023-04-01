<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn text-white dropdown-toggle"
      :class="buttonVisible ? `btn-${btnColor} text-${textColor}` : 'noBtn'"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <slot name="button" />
    </button>
    <ul
      class="dropdown-menu animate glide-in"
      :class="alignRight ? 'dropdown-menu-end' : ''"
    >
      <slot name="content" />
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttonVisible: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
    default: null,
  },
  btnColor: {
    type: String,
  },
  textColor: {
    type: String,
    default: "white",
  },
  alignRight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.glide-in {
  animation-duration: 0.3s;
  animation-name: slideIn;
  animation-fill-mode: both;
}

@keyframes slideIn {
  0% {
    transform: translateY(1-rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }

  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
}
/* ul {
  width: 300px;
} */
</style>
