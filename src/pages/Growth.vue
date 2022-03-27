<template>
  <!-- hero section  -->
  <div class="hold">
    <div class="hero">
      <h2 class="text-weight-bold">The Growth Board</h2>
    </div>
  </div>

  <!-- First Section  -->
  <div class="row nuxt container">
    <div class="col-md-6 col-sm-12 col-xs-12 text-h6 text">
      <p>
        The Growth Board is an initiative of the Nigerian Stock Exchange (NSE)
        established to provide opportunity for SMEs with growth potentials to
        raise capital and liquidity to grow their business.
      </p>
    </div>

    <div class="col-md-6 col-sm-12 col-xs-12">
      <q-img src="/images/grow.png" />
    </div>
  </div>

  <Quotes
    quotes="The board targets fast-growth companies such as MSMEs operating in various sectors including technology companies."
  />

  <!-- Second Section  -->
  <div></div>

  <!-- Thrid Section  -->
  <div class="third">
    <!-- Header and arrow  -->
    <div class="row justify-center">
      <!-- <Arrow /> -->
      <h4 class="q-my-xl objectives text-bold">The Objectives</h4>
    </div>

    <div class="row container">
      <!-- Image Div  -->
      <div class="col-md-6 col-sm-12 col-xs-12 container">
        <div class="image-container">
          <img src="/images/grow5.png" alt="" />
        </div>
      </div>

      <!-- Text Div  -->
      <div class="col-md-6 col-sm-12 col-xs-12 write_up">
        <!-- <ul>
          <li class="row justify-evenly"> <span class=""> <q-btn round flat :ripple="false"  icon="arrow_forward" size="1rem" class="arrw" /> </span> <p class="q-my-auto">Helllllloooo</p> </li>
          <li class="row justify-evenly"> <span class=""> <q-btn round flat :ripple="false"  icon="arrow_forward" size="1rem" class="arrw" /> </span> <p class="q-my-auto">Helllllloooo</p> </li>
          <li class="row justify-evenly"> <span class=""> <q-btn round flat :ripple="false"  icon="arrow_forward" size="1rem" class="arrw" /> </span> <p class="q-my-auto">Helllllloooo</p> </li>
          <li class="row justify-evenly"> <span class=""> <q-btn round flat :ripple="false"  icon="arrow_forward" size="1rem" class="arrw" /> </span> <p class="q-my-auto">Helllllloooo</p> </li>
        </ul> -->

        <div class="row justify-evenly writing_container">
          <div class="high">
            <!-- <q-icon name="arrow_forward" size="2rem" class="arrw" /> -->
            <!-- <div class="short_arrow"></div> -->
          </div>
          <p>
            <span
              >quibusdam doloribus ad ullam hic quae voluptatum autem nulla.
              Ipsum quisquam saepe tenetur expedita?</span
            >
          </p>
        </div>

        <div class="row justify-evenly writing_container">
          <div class="high">
            <!-- <q-icon name="arrow_forward" size="2rem" class="arrw" /> -->
            <!-- <div class="short_arrow"></div> -->
          </div>
          <p>
            <span
              >quibusdam doloribus ad ullam hic quae voluptatum autem nulla.
              Ipsum quisquam saepe tenetur expedita?</span
            >
          </p>
        </div>

        <div class="row justify-evenly writing_container">
          <div class="high">
            <!-- <q-icon name="arrow_forward" size="2rem" class="arrw" /> -->
            <!-- <div class="short_arrow"></div> -->
          </div>
          <p>
            <span
              >quibusdam doloribus ad ullam hic quae voluptatum autem nulla.
              Ipsum quisquam saepe tenetur expedita?</span
            >
          </p>
        </div>

        <div class="row justify-evenly writing_container">
          <div class="high">
            <!-- <q-icon name="arrow_forward" size="2rem" class="arrw" /> -->
            <!-- <div class="short_arrow"></div> -->
          </div>
          <p>
            <span
              >quibusdam doloribus ad ullam hic quae voluptatum autem nulla.
              Ipsum quisquam saepe tenetur expedita?</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
  <Contact />
  <Footer />
</template>

<script>
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";
import Quotes from "../components/Quotes.vue";

export default {
  name: "Growth",
  components: {
    Contact,
    Quotes,
    Footer,
  },
};
</script>

<style scoped>
.hero {
  height: 55vh;
  background: rgb(4, 4, 12);
  position: relative;
}

.nuxt {
  padding: 5rem 0;
}

.writing_container p {
  position: relative;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  /* padding-left: 4rem; */
}

.writing_container p span {
  padding-left: 2.5rem;
}

.writing_container p::before {
  content: "\e097";
  position: absolute;
  font-family: "FontAwesome";

  background: #00eaab;
  color: #ffff;
  padding: 0.75rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
/* ul {
  margin: none;
  list-style: none;
}

li {
  margin: 0 0 7%;
}
.objectives {
  margin: auto 30% auto 5%
  margin-left: 5%;
  margin-right: 30%;
}
.project_hero {
  width: 100%;
  background: url("/growthBoard/growth_hero.png");
  background-size: 100%;
  background-repeat: no-repeat;

  height: 400px;
}

.overlay {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);
  position: absolute;
  padding: 0 7%;
}

.arrw {
  transform: rotate(45deg);
  margin: auto 0;
  color: white;
  background-color: #00eaab;
  border: 3px solid white;
}

.text {
  padding: 0 8%;
  margin: auto 0;
}

.third {
  background: rgba(1, 6, 87, 0.08);
}

.container {
  padding: 5% 5%;
}
.image-container {
  position: relative;
}

.image-container::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: -24px;
  left: -7%;
  top: -10%;
  width: 50%;
  height: 50%;
  background: #00eaab;
}

img {
  width: 100%;
}

.high {
  width: 3rem;
  height: 3rem;
  border: 3px solid white;
  background: #00eaab;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: auto 0;
}

.short_arrow {
  width: 20px;
  height: 2px;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  top: 5px;
  margin: auto 0;
  transform: rotate(45deg);
}

.short_arrow:after {
  content: "";
  display: inline-block;
  border-radius: 4px;
  width: 13px;
  height: 2px;
  background-color: #fff;
  transform: rotate(-45deg);
  position: absolute;
  right: -1px;
  bottom: -5px;
}

.short_arrow:before {
  content: "";
  display: inline-block;
  border-radius: 4px;
  width: 13px;
  height: 2px;
  background-color: #fff;
  transform: rotate(45deg);
  position: absolute;
  right: -1px;
  bottom: 5px;
}

.write_up {
  padding: 5% 0;
}
.write_up p {
  width: 80%;
  margin: auto 0;
}

.writing_container {
  margin-bottom: 7%;
} */

h2 {
  color: white;
}

h2 {
  position: relative;
  font-size: 3.5rem;
  padding-left: 6rem;
  margin-bottom: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

h2::before {
  /* content: url("/images/ae.png"); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;
  /* width: 200px; */
  left: 2%;
  font-family: "FontAwesome";
}
@media (max-width: 800px) {
  h2 {
    font-size: 2rem;
  }
}
</style>
