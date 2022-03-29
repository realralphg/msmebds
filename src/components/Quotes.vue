<template>
  <div class="mission">
    <div class="q-gutter-y-md griid container">
      <p>
        {{ quotes }}
      </p>
    </div>
    <img class="bgt" src="/images/bg1.png" alt="" />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["quotes"],
};
</script>

<style scoped>
.mission {
  margin: 3rem 0;
  padding: 6rem 0;
  position: relative;
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
}
p {
  margin-bottom: 0;
  font-size: 1.8rem;
}
.griid {
  color: #fff;
  padding: 4rem 4rem 7rem;
  border-radius: 8px;
  position: relative;
}
.griid::before {
  content: "\22";
  font-size: 10rem;
  position: absolute;
  color: #00eaab;
  top: -15%;
}

.bgt {
  width: 100px;
  position: absolute;
  right: 0;
  bottom: -7%;
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

  p {
    margin-bottom: 0;
    font-size: 1.6rem;
  }
}
</style>
