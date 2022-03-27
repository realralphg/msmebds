<template>
  <q-page class="">
    <Hero />
    <Team />
    <Contact />
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/About/Hero.vue";
import Team from "../components/About/Team.vue";
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Team,
    Contact,
    Footer,
  },
});
</script>
