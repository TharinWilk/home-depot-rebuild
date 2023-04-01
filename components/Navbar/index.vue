<template>
  <nav class="navbar navbar-light bg-light pb-0">
    <NavbarDesktop class="d-none d-sm-flex" />
    <NavbarMobile class="d-flex d-sm-none" />

    <div
      class="sm-container-fluid d-flex justify-content-between align-items-center text-white bg-primary py-1 w-100"
    >
      <div class="d-flex justify-content-center align-items-center">
        <Dropdown>
          <template v-slot:button>
            <Icon name="ph:map-pin-fill" size="1rem" class="me-1" />
            <span>500 S Santa Fe Dr.</span>
            <span class="d-none d-sm-inline"> Denver, Co.</span>
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
        <Dropdown :align-right="true">
          <template v-slot:button>
            <Icon
              name="mdi:truck-delivery-outline"
              size="1.5rem"
              class="me-1"
            />
            <span class="d-none d-sm-inline me-1 transition-4"
              >Delivers to</span
            >
            <span class="fw-bold transition-4">80281</span>
          </template>
          <template v-slot:content>
            <div class="container content-container dropdown-menu-end">
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
