<template>
  <section class="sponsor q-pb-lg section">
    <h5 class="container">Our Partners</h5>
    <div class="sponsor__container container grid">
      <div class="sponsor__content">
        <img src="/images/unido.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/hplife.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/nig1.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/nig2.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/youth.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/growbridge.png" alt="" class="sponsor__img" />
      </div>
      <div class="sponsor__content">
        <img src="/images/sm.png" alt="" class="sponsor__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.sponsor__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  justify-items: center;
  align-items: center;
  row-gap: 1.5rem;
}

.sponsor__img {
  width: 90px;
  /* filter: invert(0.7); */
  transition: all 0.5s ease-in-out;
}

.sponsor__content:hover .sponsor__img {
  /* filter: invert(0.5); */
  transform: scaleX(1.2);
  cursor: pointer;
}
h5 {
  position: relative;
  font-weight: 700;
  margin: 2rem auto;
  font-size: 2rem;
  padding-left: 2rem;
}
h5::after {
  /* content: url(/images/are.png); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;

  /* width: 250px; */
  left: -1%;
  font-family: "FontAwesome";
}
</style>
