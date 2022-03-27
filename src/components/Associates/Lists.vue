<template>
  <div class="mission">
    <div class="q-gutter-y-md griid container">
      <div class="two-ul">
        <ul>
          <li><p class="q-pl-xl">Alternative Financing Mechanisms</p></li>
          <li><p class="q-pl-xl">Infrastructure</p></li>
          <li><p class="q-pl-xl">Input & Supply</p></li>
          <li><p class="q-pl-xl">Market Access</p></li>
          <li><p class="q-pl-xl">Policy & Advocacy</p></li>

          <li><p class="q-pl-xl">Strategic Partnership</p></li>
          <li>
            <p class="q-pl-xl">
              Technology and Product DevelopmentTechnology and Product
              Development
            </p>
          </li>
          <li><p class="q-pl-xl">Training & Technical Assistance</p></li>
        </ul>
      </div>
      <img class="bgt" src="/images/bg1.png" alt="" />

      <!-- <img class="bgt" src="/images/bg1.png" alt="" /> -->
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {};
</script>

<style scoped>
.mission {
  margin: 3rem 0;
  position: relative;
  /* padding: 6rem 0; */
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
}
p {
  margin-bottom: 0;
}
.griid {
  color: #fff;
  padding: 4rem 4rem 7rem;
  border-radius: 8px;
  position: relative;
}

.bgt {
  width: 150px;
  position: absolute;
  right: -5%;
  bottom: -7%;
}
.two-ul {
  position: relative;
}
.two-ul p {
  padding-left: 3.5rem;
}

.two-ul li {
  position: relative;
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
}

.two-ul li:before {
  content: "\e097";
  position: absolute;
  font-family: "FontAwesome";

  background: #00eaab;
  color: #ffff;
  padding: 0.75rem;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
@media (max-width: 800px) {
  .griid {
    padding: 4rem 2rem 7rem;
  }

  .griid img {
    object-fit: contain;
    width: 90px;
  }
  .griid {
    padding: 4rem 0rem 7rem;
  }
}
</style>
