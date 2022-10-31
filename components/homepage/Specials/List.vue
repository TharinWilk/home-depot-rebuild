<template>
  <div class="">
    <div class="row bg-white pb-3">
      <div
        v-for="item in list"
        :key="item.text"
        class="col-12 col-sm-4 d-flex justify-content-center align-items-center mb-3"
      >
        <button
          type="button"
          class="btn btn-outline-primary h-100 w-100"
          @click="changeCategory(item.text)"
          :class="item.text === activeSpecial ? 'active' : ''"
        >
          <span class="fs-7 fw-bolder">{{ item.text }}</span>
        </button>
      </div>
    </div>

    <div class="row">
      <HomepageSpecialsSeating
        v-if="activeSpecial === 'Outdoor Seating & Dining Sets'"
      />
      <HomepageSpecialsShades
        v-else-if="activeSpecial === 'Outdoor Shades & Fire Pits'"
      />
      <HomepageSpecialsRugs v-else-if="activeSpecial === 'Outdoor Rugs'" />
    </div>
  </div>
</template>

<script setup>
const activeSpecial = ref("Outdoor Seating & Dining Sets");

const list = [
  {
    text: "Outdoor Seating & Dining Sets",
  },
  {
    text: "Outdoor Shades & Fire Pits",
  },
  {
    text: "Outdoor Rugs",
  },
];

function changeCategory(category) {
  activeSpecial.value = category;
}
</script>

<style scoped>
.active {
  background-color: #f96302;
  color: white;
}

.btn:hover {
  color: white;
}
</style>
