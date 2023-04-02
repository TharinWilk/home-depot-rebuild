<template>
  <div class="navbar-nav pt-3">
    <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 me-3">
      <li v-for="link in links" :key="link.text" class="p-1 nav-link">
        <a href="#" class="d-flex border align-items-center px-2 py-1">
          <Icon :name="link.icon" size="2rem" class="nav-icon me-3" />
          <span class="nav-link">{{ link.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const links = [
  {
    icon: "ph:user",
    text: "My Account",
  },
  {
    icon: "ph:heart-bold",
    text: "List",
  },
  {
    icon: "bi:boxes",
    text: "All Departments",
  },
  {
    icon: "ph:calculator",
    text: "Project Calculator",
  },
  {
    icon: "heroicons:wrench-screwdriver",
    text: "Installation & Services",
  },
  {
    icon: "ph:tag",
    text: "Specials",
  },
  {
    icon: "ph:book-open-bold",
    text: "Local Add & Catalog",
  },
  {
    icon: "ph:map-trifold",
    text: "Store Finder",
  },
  {
    icon: "clarity:key-line",
    text: "Rentals",
  },
  {
    icon: "healthicons:construction-worker-outline",
    text: "For the Pros",
  },
  {
    icon: "ph:gift",
    text: "Gift Cards",
  },
  {
    icon: "material-symbols:help-outline",
    text: "Help",
  },
];
</script>

<style scoped>
a,
a:hover {
  text-decoration: none;
  transition: 0.4s;
}

a:hover {
  box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.4);
}

a:hover .nav-icon,
a:hover span {
  color: #f96302;
}

.nav-icon {
  transition: 0.3s;
  color: #333333;
}
</style>
