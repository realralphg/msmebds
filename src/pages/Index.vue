<template>
  <q-page class="">
    <Hero />
    <About />
    <Mission />
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
import Mission from "../components/Home/Mission.vue";
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
    Mission,
    Services,
    Contact,
    Sponsors,
    Programs,
    Footer,
  },
});
</script>
