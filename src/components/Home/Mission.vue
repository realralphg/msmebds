<template>
  <div class="mission">
    <div class="q-gutter-y-md griid container">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-white text-weight-bold"
          active-color="primary"
          indicator-color="green"
          align="justify"
        >
          <q-tab name="mails" icon="mail" label="Our Vision" />
          <q-tab name="alarms" icon="mail" label="Our Mission" />
          <q-tab name="movies" icon="mail" label="Our Values" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="">
          <q-tab-panel name="mails">
            <!-- <div class="text-h6">Mails</div> -->
            Attractive agriculture for everyone which leverages technology and
            mechanization for improved productivity and economic prosperity.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <!-- <div class="text-h6">Alarms</div> -->
            Promote technology driven and mechanized farming to attract young
            farmers, improve accuracy in decision making, mitigate risk and
            improve yield.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <!-- <div class="text-h6">Movies</div> -->
            People <br />
            Innovation <br />
            Strategy <br />
            Abundance <br />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <img class="bgt" src="/images/bg1.png" alt="" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style scoped>
.mission {
  margin: 3rem 0;
  padding: 6rem 0;
}
.q-tab__label {
  font-size: 18px !important;
  line-height: 1.715em;
  font-weight: 500;
}
.q-tab-panels {
  height: 300px;
}
.q-panel > div {
  height: 100%;
  width: 40%;
  background: #fff;
  border: 1px solid #00eaab;
}
.q-tab__content {
  padding: 1rem;
  background: #fff !important;
}
.griid {
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
  padding: 4rem 4rem 7rem;
  border-radius: 8px;
  position: relative;
}

.q-card {
  box-shadow: none;
  border-radius: 0;
  min-height: 300px;
  background: none;
  position: relative;
}

.bgt {
  width: 150px;
  position: absolute;
  right: 0;
  bottom: -7%;
}
@media (max-width: 800px) {
  .q-panel > div {
    height: 100%;
    width: 100%;
  }

  /* .bts {
    width: 70px;
  } */
  .griid {
    padding: 4rem 2rem 7rem;
  }

  .q-card {
    min-height: 200px;
  }

  .griid img {
    object-fit: contain;
    width: 90px;
  }
}
</style>
