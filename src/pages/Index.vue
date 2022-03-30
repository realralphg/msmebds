<template>
  <q-page class="">
    <Hero />
    <About />
    <!-- <Mission /> -->
    <Vision />
    <Cards />

    <Services />
    <Programs />
    <Contact />
    <Sponsors />
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/Home/Hero.vue";
import About from "../components/Home/About.vue";
import Vision from "../components/Home/Vision.vue";
import Cards from "../components/Home/Cards.vue";

import Services from "../components/Home/Services.vue";
import Contact from "../components/Home/Contact.vue";
import Sponsors from "../components/Home/Sponsors.vue";
import Programs from "../components/Home/Programs.vue";
import Footer from "../components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    About,
    Vision,
    Services,
    Contact,
    Sponsors,
    Cards,
    Programs,
    Footer,
  },
});
</script>
