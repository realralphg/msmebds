<template>
  <div class="wrapper">
    <div class="grid container">
      <div class="hold">
        <img class="cur q-pr-xl" src="images/curve.png" alt="" />

        <!-- <q-btn class="q-px-xl bg-primary q-mb-lg q-py-sm">MSME</q-btn> -->

        <h2 class="text-h4 q-mt-xl text-white text-weight-bold">
          <span class="text-primary">MSME</span>
          Business Development Services
        </h2>

        <p class="q-pt-lg pad q-pb-lg text-white">
          Providing a range of business development services to high growth
          potential MSMEs in partnership with MDAs of government and
          international Development Agencies.
        </p>

        <div class="details q-py-xl">
          <img src="images/arr.png" alt="" class="a" />
          <div class="two">
            <q-btn to="/about" class="q-px-xl q-py-sm bg-primary bt text-black"
              >Join Now</q-btn
            >

            <q-btn
              to="/programs"
              class="q-px-xl q-py-sm learn bg-accent bt text-white"
              >Learn More</q-btn
            >
          </div>
        </div>
      </div>

      <div class="img">
        <img src="/images/hero.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import Button from '../Button.vue'
export default {
  props: ["proper"],
  components: {
    // Button
  },

  //     data(){
  //     return{
  //       signedUp: false,
  //     }
  //   }
};
</script>

<style scoped>
p {
  font-size: 1.2rem;
}
.red {
  color: red;
}

.blue {
  color: blue;
}

.hold {
  position: relative;
  /* padding: 5rem; */
}
.cur {
  top: -18%;
  left: -15%;
  position: absolute;
  width: 150px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  /* position: relative;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%); */
}
.wrapper {
  height: 100%;
  padding: 1rem 0 0;
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
  border-bottom-right-radius: 20%;
}

.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 60%;
}

.details {
  position: relative;
  /* width: 60%; */
  /* left: 0; */
}

.a {
  position: absolute;
  top: -20%;
  right: 30%;
  width: 150px;
}
/* 
.download{
    margin: 1rem 0;
    display: flex;
    background: #111;
    padding: .15rem 1rem;
    align-items: center;
    width: 60%;
    border-radius: 8px;
    border: 1px solid #fff;

} */

.download i {
  font-size: 2.5rem;
  color: #fff;
}

.download p {
  font-size: 1.5rem;
  color: #fff;
}

.under {
  position: relative;
}

.under::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 250px;
  border: 4px solid #fed12e;
  border-color: #fed12e transparent transparent transparent;
  /* background: yellow; */
  /* color: yellow; */
  bottom: -70%;
  left: -20%;
  border-radius: 150%/100px 100px 0 0;
}
/* .min{
    position: relative;
}

.min::before{
    content: "";
    background: yellow;
    font-size: 4rem;
    position: absolute;
} */
.bt {
  width: 200px;
}

.learn {
  border: 1px solid #00eaab;
}

@media (max-width: 1191px) {
  .cur {
    top: -8%;
    left: -9%;
    position: absolute;
    width: 100px;
    /* height: 200px; */
  }
}

@media (max-width: 950px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .img img {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .hide {
    display: block;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .two {
    display: grid;
    grid-template-columns: 1fr;
  }

  .download {
    margin: 0;
  }

  .a {
    position: absolute;
    top: -10%;
    right: 0%;
    width: 100px;
  }

  .cur {
    top: -8%;
    left: -9%;
    position: absolute;
    width: 100px;
    /* height: 200px; */
  }

  .download {
    padding: 0.15rem 0.4rem;
    /* height: 50px; */
    overflow: hidden;
    width: 75%;
  }

  .pad {
    padding: 0 !important;
  }

  .download p {
    font-size: 1rem;
    color: #fff;
  }

  .download i {
    font-size: 1.5rem;
    color: #fff;
  }
  .wrapper {
    border-bottom-right-radius: 30%;
  }
  h2 {
    font-size: 1.8rem;
    line-height: 1.4;
  }
  p {
    font-size: 1.2rem;
  }
}

@media (max-width: 400px) {
  .a {
    position: absolute;
    top: -2%;
    right: 0%;
    width: 100px;
  }
  .bt {
    font-size: 0.75rem;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cur {
    top: -5%;
    left: -11%;
    position: absolute;
    width: 90px;
    /* height: 200px; */
  }
}
</style>
