<template>
  <div class="footer bg-surface container- py-3 px-3">
    <div class="wrapper row row-cols-1 row-cols-sm-3">
      <!-- Customer Services -->
      <div class="text-center mb-4">
        <h2 class="fs-5">Customer Services</h2>
        <div v-for="link in customerServices" :key="link.text">
          <a href="link.ref">{{ link.text }}</a>
        </div>
      </div>
      <!-- Resources -->
      <div class="text-center mb-4">
        <h2 class="fs-5">Customer Services</h2>
        <div v-for="link in resources" :key="link.text">
          <a href="link.ref">{{ link.text }}</a>
        </div>
      </div>
      <!-- About Us -->
      <div class="text-center mb-4">
        <h2 class="fs-5">Customer Services</h2>
        <div v-for="link in aboutUs" :key="link.text">
          <a href="link.ref">{{ link.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const customerServices = [
  {
    text: "Check Order Status",
    ref: "#",
  },
  {
    text: "Pay You Credit Card",
    ref: "#",
  },
  {
    text: "Order Cancellation",
    ref: "#",
  },
  {
    text: "Returns",
    ref: "#",
  },
  {
    text: "Shipping & Delivery",
    ref: "#",
  },
  {
    text: "Product Recalls",
    ref: "#",
  },
  {
    text: "Help & FAQs",
    ref: "#",
  },
  {
    text: "Privacy & Security Center",
    ref: "#",
  },
];

const resources = [
  {
    text: "Specials & Offers",
    ref: "#",
  },
  {
    text: "Military Discount Benefits",
    ref: "#",
  },
  {
    text: "DIY Projects & Ideas",
    ref: "#",
  },
  {
    text: "Truck & Tool Rental",
    ref: "#",
  },
  {
    text: "Installation & Services",
    ref: "#",
  },
  {
    text: "Moving Supplies & Rentals",
    ref: "#",
  },
  {
    text: "Protection Plans",
    ref: "#",
  },
  {
    text: "Rebate Center",
    ref: "#",
  },
  {
    text: "Gift Cards",
    ref: "#",
  },
  {
    text: "Catalog",
    ref: "#",
  },
  {
    text: "Subscriptions",
    ref: "#",
  },
];

const aboutUs = [
  {
    text: "Careers",
    ref: "#",
  },
  {
    text: "Corporate Information",
    ref: "#",
  },
  {
    text: "Digital Newsroom",
    ref: "#",
  },
  {
    text: "Home Depot Foundation",
    ref: "#",
  },
  {
    text: "Investor Relations",
    ref: "#",
  },
  {
    text: "Government Customers",
    ref: "#",
  },
  {
    text: "Suppliers & Providers",
    ref: "#",
  },
  {
    text: "Affiliate Program",
    ref: "#",
  },
  {
    text: "Eco Actions",
    ref: "#",
  },
  {
    text: "Corporate Responsibility",
    ref: "#",
  },
  {
    text: "Home Depot Licensing Information",
    ref: "#",
  },
];
</script>

<style scoped>
.wrapper {
  max-width: 70rem;
  margin: 0 auto;
}

a {
  color: #3e7697;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
