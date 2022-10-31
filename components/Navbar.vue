<template>
  <nav class="navbar navbar-light bg-light pb-0">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">
        <img src="~/assets/images/logo.png" alt="" class="logo" />
      </a>

      <div class="w-75 d-flex justify-content-between">
        <div class="input-group me-4">
          <input type="text" class="form-control" />
          <button class="input-group-text" id="basic-addon1">
            <Icon name="ph:magnifying-glass" />
          </button>
        </div>
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <NavMenu />
      </div>
    </div>

    <div
      class="container-fluid d-flex justify-content-between align-items-center text-white bg-primary py-1"
    >
      <div class="d-flex justify-content-center align-items-center">
        <Dropdown>
          <template v-slot:button>
            <Icon name="ph:map-pin-fill" size="1rem" class="me-1" />
            <span>500 S Santa Fe Dr. Denver, Co.</span>
          </template>
          <template v-slot:content>
            <div class="container">
              <button class="btn btn-primary text-white fw-bolder w-100">
                Find Other Stores
              </button>
            </div>
          </template>
        </Dropdown>
      </div>

      <div class="d-flex justify-content-center align-items-center">
        <Dropdown>
          <template v-slot:button>
            <Icon
              name="mdi:truck-delivery-outline"
              size="1.5rem"
              class="me-1"
            />
            <span class="me-1">Delivers to</span>
            <span class="fw-bold">80281</span>
          </template>
          <template v-slot:content>
            <div class="container content-container">
              <div class="border-bottom">
                <span>Enter delivery ZIP Code</span>
                <input type="text" class="form-control my-3" />
                <div class="d-flex justify-content-center">
                  <button
                    class="btn btn-primary text-white fw-bolder w-75 mb-2"
                  >
                    Update
                  </button>
                </div>
              </div>
              <div class="mt-3 d-flex">
                <p class="fs-8">
                  Your ZIP Code helps us to provide the most up-to-date product
                  and delivery information.
                </p>
              </div>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </nav>
</template>

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
