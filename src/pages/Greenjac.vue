<template>
  <!-- hero section  -->
  <div class="hold">
    <div class="hero">
      <h2 class="text-weight-bold">
        The Green Jacket <br />
        Program
      </h2>
    </div>
  </div>

  <!-- First Section  -->
  <div class="wrapp container">
    <div class="left">
      <!-- <h5 class="text-weight-bold">About Us</h5> -->
      <h3>
        <!-- <span> Become A </span> -->
        <span class="text-info text-weight-bold">The Green Jacket Program</span>
      </h3>
      <p class="q-my-lg">
        The Green Jacket is the league of elite MSME Brands with exponential
        growth potentials that have been successfully nurtured and handheld to
        tick all the boxes to meet the requirements of being listed on the
        Nigeria Stock Exchange Growth Board to raise long term capital and
        promote liquidity.
      </p>
      <div class="bts">
        <q-btn class="q-py-md q-px-xl bg-primary"> View more </q-btn>

        <img class="vec" src="/images/vec.png" alt="" />
      </div>
    </div>
    <div class="right padde">
      <img src="/images/gree.png" alt="" />
      <div class="green">
        <img src="/images/gree1.png" alt="" />
        <img src="/images/ol2.png" alt="" />
      </div>
    </div>
  </div>

  <Quotes
    quotes="For every entrepreneur, the feeling and zenith of fulfilment is to see his or her dream grow into a competitive and sustainable enterprise. Adorning the Green Jacket is a symbol of a successful enterprise endeavor. It depicts the hallmark of enterprise growth and sustainability."
  />

  <!-- Second Section  -->
  <div></div>

  <!-- Thrid Section  -->
  <div class="third q-mt-xl q-pt-xl">
    <!-- Header and arrow  -->

    <div class="row items-center container">
      <!-- Image Div  -->
      <div class="col-md-6 col-sm-12 col-xs-12 container">
        <div class="image-container">
          <img src="/images/greenj.png" alt="" />
        </div>
      </div>

      <!-- Text Div  -->
      <div class="col-md-6 col-sm-12 pod col-xs-12 q-pl-xl write_up">
        <div class="row q-my-lg justify-evenly writing_container">
          MSMEs listed on the Growth Board enjoy the full complement of Value
          Added Services (Institutional Services; Investor Relations; Analyst
          Coverage, Corporate Access and Corporate Governance), expanded
          Designated Advisers, reduced NSE fee structure, reduced pre and
          post-listing obligations and increased turnaround time for approvals
          and time to market. <br />
          <br />
          The strategic objectives of the Green Jacket align with the
          aspirations of the Nigeria Stock Exchange Growth Board.
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
  background: url("/images/growthb.png") no-repeat center center/cover;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(4, 4, 12, 0.65);
  width: 100%;
  height: 100%;
}

.nuxt {
  padding: 5rem 0;
}
.wrapp {
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  position: relative;
  z-index: 200;
}
.vec {
  position: absolute;
  bottom: -182%;
  right: 12%;
  width: 150px;
  height: 150px;
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
  overflow: hidden;
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
  padding: 1rem 0;
  margin-top: 3rem;
  position: relative;
}

.twoo .righty {
  width: 80%;
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
  /* .padde {
    padding: 19rem 0 0;
  } */
  h3 {
    font-size: 2rem;
  }
}
@media (max-width: 800px) {
  h2 {
    font-size: 2rem;
    padding-left: 3rem;
  }
  .pod {
    padding: 0 !important;
  }
}

@media (max-width: 400px) {
  h2 {
    font-size: 1.6rem;
    line-height: 1.4;
  }
  /* .padde {
    padding: 19rem 0 0;
  } */
}
</style>
