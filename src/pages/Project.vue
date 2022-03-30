<template>
  <!-- hero section  -->
  <div class="hold">
    <div class="hero">
      <h2 class="text-weight-bold">Our Projects</h2>
    </div>
  </div>

  <!-- First Section  -->
  <div class="row web items-center container q-my-xl">
    <div class="col-md-6 col-sm-12 col-xs-12 q-my-xl">
      <h4 class="text-bold text-info">Skilledman.Ng</h4>
      <p class="q-my-md">
        Skilledman is an innovative ICT Solution designed to onboard only duly
        assessed, certified and competent artisans and technicians to leverage
        innovative technology solution to deliver professional TVET Services via
        a Web-based and Mobile-Enabled Service Platform.
      </p>
      <!-- <div class="row">
        <q-btn
          label="View More"
          style="background-color: #00eaab; width: 40%; padding: 1rem"
          icon-right="arrow_forward"
        />
        <q-img src="Vector 11.png" />
      </div> -->
    </div>

    <div class="col-md-6 col-sm-12 col-xs-12">
      <q-img src="/images/grow3.png" class="img" />
    </div>
  </div>

  <!-- Second Section  -->
  <div class="row flexer items-center container web q-my-xl">
    <div class="col-md-6 q-py-lg q-my-lg col-sm-12 col-xs-12">
      <q-img src="/images/grow2.png" class="img" />
    </div>

    <div class="col-md-6 col-sm-12 col-xs-12 q-my-auto">
      <h4 class="text-bold text-info">
        The Creative & cultural Entreprenuership Development <br />
        Project
      </h4>
      <p class="q-my-md">
        Cultural and Creative Entrepreneurship enhances the promotion of
        cultural capital in a manner that fosters innovation, competitiveness
        and integrated marketing communications that develops and increases
        understanding, cooperation, collaboration, motivation and patronage on a
        wider and broader spectrum.
      </p>
      <!-- <div class="row">
        <q-btn
          label="View More"
          style="background-color: #00eaab"
          icon-right="arrow_forward"
        />
        <q-img src="/assets/Vector 11.png" />
      </div> -->
    </div>
  </div>

  <Contact />
  <Footer />
</template>

<script>
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "project",
  components: {
    Contact,
    Footer,
  },
};
</script>

<style scoped>
.hero {
  height: 55vh;
  background: url("/images/projets.png") center center/cover no-repeat;
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

p {
  line-height: 1.7;
}

.web {
  padding: 4rem 0 2rem;
}

.img {
  width: 80%;
  height: 450px;
}
/* .project_hero {
  width: 100%;
  background: url("/ourProject/project_hero.png");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 400px;
} */

/* .overlay {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);
  position: absolute;
  padding: 0 7%;
} */
/* .arrow {
  width: 150px;
  height: 2px;
  border-radius: 4px;
  background-color: white;
  position: relative;
  top: 5px;
  margin: auto 0;
}

.arrow:after {
  content: "";
  display: inline-block;
  border-radius: 4px;
  width: 15px;
  height: 2.5px;
  background-color: white;
  transform: rotate(-45deg);
  position: absolute;
  right: -2px;
  bottom: -5px;
} */
/* 
.arrow:before {
  content: "";
  display: inline-block;
  border-radius: 4px;
  width: 15px;
  height: 2.5px;
  background-color: white;
  transform: rotate(45deg);
  position: absolute;
  right: -2px;
  bottom: 5px;
} */

/* h3,
p {
  color: #010657;
} */

/* .writings {
  font-size: 1.3rem;
  line-height: 2;
}

.img {
  width: 30rem;
  height: 30rem;
  margin: auto 0 !important;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

h2 {
  color: white;
}

h2 {
  position: relative;
  font-size: 2.5rem;
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
    padding-left: 3rem;
  }

  .flexer {
    display: flex;
    flex-direction: column-reverse;
  }
  h3 {
    font-size: 2rem;
  }
}
</style>
