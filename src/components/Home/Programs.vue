<template>
  <q-page class="hold container">
    <div class="holder">
      <div class="left">
        <h5 class="text-weight-bold">Our programs</h5>
        <p>
          These programs are designed in partnership with MDAs, The Nigerian
          Stock Exchange and other <br />
          global players to bring world-class knowledge, infrastructure and
          resources to accelerate the growth of MSMEs.
        </p>
      </div>

      <div class="men q-pb-xl">
        <Splide :options="options">
          <SplideSlide>
            <!-- <div class="wrapp">
              <img src="/images/program1.png" alt="Sample 1" />
              <div class="detr">
                <h5 class="text-weight-bold text-white q-mb-md">
                  The BDS Fellowship Programme
                </h5>

                <p>
                  Building the Next Generation of Expert MSME Service Providers
                </p>

                <q-btn to="/busdev" class="btn">Learn More</q-btn>
              </div>
            </div> -->
            <div class="wrapp">
              <img src="/images/program2.png" alt="Sample 1" />
              <div class="detr">
                <h5 class="text-weight-bold text-white q-mb-md">
                  The BDS Fellowship Programme
                </h5>

                <p>
                   Building the Next Generation of Expert MSME Service Providers
                </p>

                <q-btn to="/busdev" class="btn">Learn More</q-btn>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="wrapp">
              <img src="/images/program2.png" alt="Sample 1" />
              <div class="detr">
                <h5 class="text-weight-bold text-white q-mb-md">
                  The MSME Business Club
                </h5>

                <p>
                  Career Development, Access To Job & MSME Funding Opportunities
                  For Smart Young Professionals In the MSME Service Sector.
                </p>

                <q-btn to="/joinmsme" class="btn">Learn More</q-btn>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div class="wrapp">
              <img src="/images/program3.png" alt="Sample 1" />
              <div class="detr">
                <h5 class="text-weight-bold text-white q-mb-md">
                  The Green Jacket
                </h5>

                <p>
                  The Green Jacket is the league of elite MSME Brands with
                  exponential growth potentials that have been successfully.....
                </p>

                <q-btn to="/greenjacket" class="btn">Learn More</q-btn>
              </div>
            </div>
          </SplideSlide>
          <!-- <SplideSlide>
            <div class="wrapp">
              <img src="/images/program2.png" alt="Sample 1" />
              <div class="detr">
                <h5 class="text-weight-bold text-white q-mb-md">
                  The BDS Fellowship Programme
                </h5>

                <p>
                  Building the Next Generation of Expert MSME Service Providers
                </p>

                <q-btn to="/" class="btn">Learn More</q-btn>
              </div>
            </div>
          </SplideSlide> -->
          <!-- <SplideSlide>
            <img src="image2.jpg" alt="Sample 2" />
          </SplideSlide> -->
        </Splide>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
      perPage: 3,
      arrows: true,
      breakpoints: {
        1400: {
          perPage: 3,
        },
        800: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
    };

    return { options };
  },
});
</script>

<style scoped>
p {
  margin-bottom: 0;
  font-size: 1rem;
}
.hold {
  margin: 7rem auto 0;
}
.wrapp {
  display: flex;
  flex-direction: column;
  height: 100;
  /* min-height: 500px; */
}

.wrapp img {
  width: 100%;
}
.wrapp .detr {
  background: #00eaab;
  padding: 2rem 1rem;
  position: relative;
  height: 300px;
}
.wrapp .detr::after {
  content: url("/images/bg.png");
  position: absolute;
  right: 0;
  bottom: -2%;
}

.wrapp .detr p {
  margin-bottom: 2rem;
  /* height: 90px; */
}

.btn {
  border: 1px solid #fff;
  padding: 1rem;
  color: #fff;
  background: transparent;
  transition: all 0.5s ease-in-out;
}
.btn:hover {
  background: #010657;
}

.left h5 {
  position: relative;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
  font-size: 2rem;
  padding-left: 2.5rem;
}
.left h5::before {
  /* content: url(/images/ae.png); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;

  /* width: 250px; */
  left: -1%;
  font-family: "FontAwesome";
}

.left p {
  margin: 2rem 0;
  font-size: 1rem;
}

@media (max-width: 800px) {
  /* .holder {
    padding-top: 11rem;
  } */
  .wrapp .detr p {
    margin-bottom: 2rem;
    height: 70px;
  }
  .right .two-ul[data-v-7cd368ae] {
    gap: 0.5rem;
    /* margin: 3rem 0; */
  }
}
</style>
