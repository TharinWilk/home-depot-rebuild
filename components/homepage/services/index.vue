<template>
  <section class="mb-5">
    <!-- Banner -->
    <Banner text="Services" />
    <!-- Service Links -->
    <div class="container-fluid mb-4">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 bg-white">
        <div v-for="link in links" :key="link.title">
          <HomepageServicesLink
            :title="link.title"
            :text="link.text"
            :src="link.src"
          />
        </div>
      </div>
    </div>
    <!-- Service Cards -->
    <div class="container">
      <div class="row row-cols-1 row-cols-xl-3">
        <HomepageServicesCreditCard />
        <HomepageServicesInstallation />
        <HomepageServicesAccount />
      </div>
    </div>
  </section>
</template>

<script setup>
const links = [
  {
    title: "Free Curbside Pickup",
    text: "Order online and  get convenient, curbside pickup",
    src: "https://images.ctfassets.net/7rldri896b2a/1XkXVWTsTd3aH9y5RUuTca/a2b327f874f222904052e643dc277a51/curbsideOrangeOutline.svg",
  },
  {
    title: "Need your order fast?",
    text: "Order online and get free same-day, in-store pickup on thousands of items",
    src: "https://images.ctfassets.net/7rldri896b2a/017C54e7KPq8SfQUzzII1f/2d8a309c8505cd7d4c1f3bd2d1622a09/Saw.svg",
  },
  {
    title: "We Deliver Curbside",
    text: "Order online for convenient store pickup daily from 9 a.m. to 6 p.m.",
    src: "https://images.ctfassets.net/7rldri896b2a/1XkXVWTsTd3aH9y5RUuTca/a2b327f874f222904052e643dc277a51/curbsideOrangeOutline.svg",
  },
  {
    title: "Free Delivery",
    text: "Over one million online items eligible",
    src: "https://images.ctfassets.net/7rldri896b2a/6xZOd23eoWyYSQPtGe5CjX/83edf56ad3417fbf8442d01a05f94872/delivery.svg",
  },
];
</script>
