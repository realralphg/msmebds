<template>
  <q-page class="">
    <Hero />
    <Programs />
    <Contact />
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/Programs/Hero.vue";
import Programs from "../components/Programs/Programs.vue";
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Programs,

    Contact,
    Footer,
  },
});
</script>
