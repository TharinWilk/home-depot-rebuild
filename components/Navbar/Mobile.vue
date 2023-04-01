<template>
  <div class="flex-column w-100">
    <div class="container-fluid d-flex">
      <div class="d-flex" style="flex-grow: 1">
        <a href="#" class="navbar-brand">
          <img src="~/assets/images/logo.png" alt="" class="logo" />
        </a>
      </div>

      <div class="d-flex me-3">
        <button class="icon-btn" aria-label="Your shopping cart">
          <Icon name="ph:shopping-cart" size="2rem" class="text-primary" />
        </button>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="container-fluid my-2">
      <div class="input-group me-4">
        <input type="text" class="form-control" />
        <button class="input-group-text bg-primary">
          <Icon name="ph:magnifying-glass" color="white" />
        </button>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarNav">
      <NavbarMenu />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  width: 2.5rem;
  height: 2.5rem;
}

.icon-btn {
  border: none;
  background-color: transparent;
}

.navbar-toggler-icon {
  --bs-navbar-active-color: orange;
}
</style>
