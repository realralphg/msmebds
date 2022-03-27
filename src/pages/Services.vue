<template>
  <q-page class="">
    <Hero />
    <Services />
    <Quotes
      quotes="For every entrepreneur, the feeling and zenith of fulfilment is to see his or her dream grow into a competitive and sustainable enterprise. Adorning the Green Jacket is a symbol of a successful enterprise endeavor. It depicts the hallmark of enterprise growth and sustainability."
    />
    <Contact />
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/Services/Hero.vue";
import Services from "../components/Services/Services.vue";
import Quotes from "../components/Quotes.vue";
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Services,
    Quotes,
    Contact,
    Footer,
  },
});
</script>
