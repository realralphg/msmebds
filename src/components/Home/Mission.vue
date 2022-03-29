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
          <q-tab name="movies" icon="mail" label="What we do" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="">
          <q-tab-panel name="mails">
            <!-- <div class="text-h6">Mails</div> -->
            We are established for purpose to be the leading Private Sector
            platform providing innovative and cutting-edge Business Development
            Services to MSME Operators in Nigeria.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <!-- <div class="text-h6">Alarms</div> -->
            To contribute to the development of a vibrant and robust private
            sector through the provision of innovative and cutting-edge Business
            Development Services (BDS).
          </q-tab-panel>

          <q-tab-panel class="what-we-do" name="movies">
            <div class="what">
              <h5 class="text-primary text-weight-bold">BDS Facilitation</h5>
              <p>
                BDS facilitation such as product and content development,
                capacity building, promoting good practice, external evaluation,
                quality assurance, advocacy, and more.
              </p>
            </div>

            <div class="what q-my-lg">
              <h5 class="text-primary text-weight-bold">BDS Provisioning</h5>
              <p>
                BDS provisioning such as handholding, coaching, mentorship,
                counseling, consultancies and more.
              </p>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <img class="bgt" src="/images/bg1.png" alt="" />
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
  margin: 5rem 0;
  position: relative;
  padding: 3rem 0 1rem;
  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
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
  height: 70%;
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
  /* padding: 4rem 4rem 7rem; */
  padding: 1rem 0rem 0rem;

  border-radius: 8px;
  position: relative;
  height: 450px;
}

.q-card {
  box-shadow: none;
  border-radius: 0;
  min-height: 300px;
  background: none;
  position: relative;
  width: 70%;
  margin: 0 auto;
}

.bgt {
  width: 150px;
  position: absolute;
  right: 0%;
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
