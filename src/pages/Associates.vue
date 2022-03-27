<template>
  <q-page class="">
    <Hero />
    <Lists />
    <!-- <Quotes /> -->
    <Contact />
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/Associates/Hero.vue";
import Lists from "../components/Associates/Lists.vue";
// import Quotes from "../components/Quotes.vue";
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Lists,
    // Quotes,
    Contact,
    Footer,
  },
});
</script>
