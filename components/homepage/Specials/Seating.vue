<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
    <ItemCard
      title="Hampton Bay"
      description="Laurel Oaks 7-Piece Black Steel Outdoor Patio Dining Set"
      :salePrice="599"
      :ogPrice="899"
      :limit="5"
    >
      <img
        src="~/assets\images\hampton-laurel-oaks.png"
        alt=""
        class="card-img-top"
      />
    </ItemCard>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
    <ItemCard
      title="Hampton Bay"
      description="Glenridge Falls 7-Piece Metal Outdoor Dining Set with Wood Finish Table and Rocking Sling Chairs in Putty"
      :salePrice="599"
      :ogPrice="899"
      :limit="5"
    >
      <img
        src="~/assets\images\hampton-glenridge-falls.png"
        alt=""
        class="card-img-top"
      />
    </ItemCard>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
    <ItemCard
      title="Hampton Bay"
      description="Riverbrook Espresso Brown 5-Piece Steel Outdoor Patio Dining Set"
      :salePrice="479"
      :ogPrice="699"
      :limit="5"
    >
      <img
        src="~/assets\images\hampton-river-expresso.png"
        alt=""
        class="card-img-top"
      />
    </ItemCard>
  </div>
  <div
    class="d-flex col-12 col-sm-6 col-lg-3 d-md-none d-lg-flex justify-content-center"
  >
    <ItemCard
      title="Hampton Bay"
      description="Summerhaven 5-Piece Wicker Patio Firepit Chat Set"
      :salePrice="799"
      :ogPrice="979"
      :limit="5"
    >
      <img
        src="~/assets\images\hampton-fire-pit.png"
        alt=""
        class="card-img-top"
      />
    </ItemCard>
  </div>
</template>
