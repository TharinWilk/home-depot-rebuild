<template>
  <div class="card my-3 border-0">
    <!-- Image -->
    <a href="" style="height: 200px">
      <slot />
    </a>
    <!-- Text -->
    <div class="card-body">
      <a href="#" class="card-link text-black">
        <h5 class="card-title fw-bold fs-7">{{ title }}</h5>
        <p class="card-text fs-7">{{ description }}</p>
      </a>
    </div>
    <!-- Rating -->
    <div class="card-body">
      <a href="#" class="card-link d-flex">
        <div>
          <Icon name="ph:star-fill" size=".75rem" />
          <Icon name="ph:star-fill" size=".75rem" />
          <Icon name="ph:star-fill" size=".75rem" />
          <Icon name="ph:star-fill" size=".75rem" />
          <Icon name="ph:star-half-fill" size=".75rem" />
        </div>
        <span class="card-reviews ms-1"> ({{ randomNumber }})</span>
      </a>
    </div>
    <!-- Price -->
    <div class="card-body">
      <div class="d-flex align-items-center gap-2">
        <span class="fw-bold fs-5"> ${{ salePrice }}<sup>00</sup> </span>
        <div class="price-details d-flex flex-column lh-1 fs-8">
          <span class="text-decoration-line-through">
            ${{ ogPrice }}
            <sup>00</sup>
          </span>
          <span class="text-success"
            >Save ${{ savings }} ({{ percentSaved }}%)</span
          >
        </div>
      </div>
      <div>
        <span class="fs-8">Limit {{ limit }} per order</span>
      </div>
    </div>
    <!-- Button -->
    <div class="d-flex justify-content-center pb-4 px-4">
      <button class="btn btn-outline-primary card-btn w-100">
        <span class="fw-bolder">Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  salePrice: {
    type: Number,
    default: 0,
  },
  ogPrice: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 0,
  },
});

const savings = computed(() => {
  return (props.ogPrice - props.salePrice).toFixed(2);
});
const percentSaved = computed(() => {
  return Math.round(((props.ogPrice - props.salePrice) / props.ogPrice) * 100);
});

let randomNumber = computed(() => {
  return Math.floor(Math.random() * 1000);
});
</script>

<style scoped>
.card {
  width: 14rem;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
