<template>
  <div class="hold">
    <div class="twoo">
      <div class="wrapp container">
        <div class="left q-pl-xl">
          <!-- <h5 class="text-weight-bold">About Us</h5> -->
          <h3>
            <span> Join the</span>
            <span class="text-info text-weight-bold"> MSME Business Club</span>
          </h3>
          <p class="q-my-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fuga ullam rerum enim. Natus consequuntur recusandae aspernatur
            minima non deleniti.
          </p>
          <div class="bts">
            <q-btn to="/joinmsme" class="q-py-md q-px-xl bg-primary">
              View more
            </q-btn>

            <img class="vec" src="/images/vec.png" alt="" />
          </div>
        </div>
        <div class="right">
          <img src="/images/asso2.png" alt="" />
          <img class="afro" src="/images/afro.png" alt="" />
        </div>
      </div>

      <!-- <div class="big">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L0,160L288,160L288,32L576,32L576,192L864,192L864,128L1152,128L1152,192L1440,192L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"
        ></path>
      </svg>
      <div class="big-con container">
        <div class="itema">
          <h5 class="text-weight-bold text-primary">
            Lorem ipsum dolor sit amet.
          </h5>
          <p class="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptatum. Officia iure quidem voluptas recusandae ducimus quaerat.
            Totam, ullam ipsum.
          </p>
        </div>
        <div class="itema">
          <h5 class="text-weight-bold text-primary">
            Lorem ipsum dolor sit amet.
          </h5>
          <p class="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptatum. Officia iure quidem voluptas recusandae ducimus quaerat.
            Totam, ullam ipsum.
          </p>
        </div>
        <div class="itema">
          <h5 class="text-weight-bold text-primary">
            Lorem ipsum dolor sit amet.
          </h5>
          <p class="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptatum. Officia iure quidem voluptas recusandae ducimus quaerat.
            Totam, ullam ipsum.
          </p>
        </div>
        <div class="itema">
          <h5 class="text-weight-bold text-primary">
            Lorem ipsum dolor sit amet.
          </h5>
          <p class="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptatum. Officia iure quidem voluptas recusandae ducimus quaerat.
            Totam, ullam ipsum.
          </p>
        </div>
        <div class="btnn">
          <q-btn class="btn">Join the waitlist</q-btn>
        </div>
      </div>
      </div> -->
    </div>

    <div class="wrapp more container">
      <div class="left q-pl-xl padds">
        <!-- <h5 class="text-weight-bold">About Us</h5> -->
        <h5>
          <!-- <span> Join the</span> -->
          <span class="text-dark text-weight-bold"> MSME Business Club</span>
        </h5>
        <p class="q-my-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          fuga ullam rerum enim. Natus consequuntur recusandae aspernatur minima
          non deleniti.
        </p>

        <h5>
          <!-- <span> Join the</span> -->
          <span class="text-dark text-weight-bold">Share an Exchange</span>
        </h5>
        <p class="q-my-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          fuga ullam rerum enim. Natus consequuntur recusandae aspernatur minima
          non deleniti.
        </p>
        <div class="bts">
          <img class="vec" src="/images/vec.png" alt="" />
        </div>
      </div>
      <div class="right">
        <img src="/images/asso2.png" alt="" />
        <img class="afro" src="/images/afro.png" alt="" />
      </div>
    </div>

    <div class="q-gutter-y-md griid">
      <div class="two-ul container">
        <ul>
          <li><p class="q-ml-lg">Alternative Financing Mechanisms</p></li>
          <li><p class="q-ml-lg">Infrastructure</p></li>
          <li><p class="q-ml-lg">Input & Supply</p></li>
          <li><p class="q-ml-lg">Market Access</p></li>
          <li><p class="q-ml-lg">Policy & Advocacy</p></li>
        </ul>
        <ul>
          <li><p class="q-ml-lg">Strategic Partnership</p></li>
          <li>
            <p class="q-ml-lg">
              Technology and Product DevelopmentTechnology and Product
              Development
            </p>
          </li>
          <li><p class="q-ml-lg">Training & Technical Assistance</p></li>
        </ul>
        <img class="bgt" src="/images/bg1.png" alt="" />
      </div>
    </div>
  </div>
  <Contact />
  <Footer />
</template>

<script>
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Contact,
    Footer,
  },
};
</script>

<style scoped>
.wrapp {
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  position: relative;
  z-index: 200;
}

.padds {
  padding: 0 !important;
}

.more {
  padding-top: 4rem !important;
}

.two-one .right {
  /* display: grid;
  grid-template-rows: repeat(2, 1fr); */
  position: relative;
}
.two-one .right {
  display: flex;
  flex-direction: column;
  position: relative;
}
.griid {
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
  position: relative;
  padding: 3rem 0;
  color: #ffff;
  margin: 4rem 0;
}
.two-ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  margin: 3rem auto;
}

.two-ul p {
  margin-left: 3rem !important;
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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.two-one .left {
  padding: 0 !important;
}
.two-one .right img:nth-child(2) {
  margin-top: -3rem;
}
.wrapp:nth-child(2) .right {
  /* display: grid;
  grid-template-rows: repeat(2, 1fr); */
  display: flex;
  flex-direction: column;
}

.wrapp:nth-child(2) .right .green {
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
}

.wrapp:nth-child(2) .right .green::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #010657;

  top: -4%;
  left: -4%;
  z-index: -1;
}

.twoo {
  background: rgba(1, 6, 87, 0.08);
  padding: 3rem 0;
  /* margin-top: 3rem;  */
  position: relative;
}

.two-bg {
  position: absolute;
  width: 300px;
  right: 0;
  bottom: 0%;
  z-index: -1;
}

p {
  font-size: 1.3rem;
}

p span {
  font-size: 1.3rem;
}

.right {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.afro {
  height: 300px;
}

.first .right::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #010657;

  top: -4%;
  right: -4%;
  z-index: -1;
}

.first .right::after {
  content: "";
  position: absolute;
  width: 250px;
  height: 100px;
  background: #010657;

  bottom: -4%;
  left: -4%;
  z-index: -1;
}
.bts {
  position: relative;
}

.vec {
  position: absolute;
  bottom: -182%;
  right: -8%;
  width: 150px;
  height: 150px;
}

.bgt {
  width: 100px;
  position: absolute;
  right: 0%;
  bottom: -2%;
}

.left h5 {
  position: relative;
  font-size: 2.3rem;
  padding-left: 3rem;
  margin-bottom: 1.5rem;
}

.left h5::before {
  /* content: url("/images/ae.png"); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;
  /* width: 200px; */
  left: -2%;
  font-family: "FontAwesome";
}
.big {
  margin: 4rem 0;
  /* padding: 5rem 0; */
  background: #010657;
  padding-bottom: 4rem;
}

.big .itema {
  margin: 1rem 0;
  padding: 1rem 0;
}

.btn {
  background: #00eaab;
  padding: 1rem 2rem;
}

.btnn {
  display: grid;
  place-items: center;
  place-content: center;
}

@media (max-width: 870px) {
  .wrapp {
    padding: 1rem 0;
    grid-template-columns: 1fr;
  }
  .vec {
    position: absolute;
    bottom: -90%;
    right: 30%;
    width: 80px;
    height: 80px;
  }
  .two-one {
    display: flex;
    flex-direction: column-reverse;
  }

  .padde {
    padding: 10rem 0 0;
  }
  .two-ul {
    grid-template-columns: 1fr;
  }
}
</style>
