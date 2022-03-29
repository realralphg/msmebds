<template>
  <div class="wrappie container">
    <div class="holdie fles">
      <div class="left">
        <div class="long">
          <img src="/images/services1.png" alt="" />
        </div>
        <div class="short">
          <img src="/images/services2.png" alt="" />
          <div class="twos">
            <img src="/images/services3.png" alt="" />
            <img src="/images/services4.png" alt="" />
          </div>
        </div>
      </div>
      <div class="right container">
        <h5>Our Services</h5>
        <div class="details">
          <p>
            We provide a range of business development services to high growth
            potential MSMEs in partnership with MDAs of government and
            International Development Agencies. Our solutions are results-driven
            and grounded in experience combined with best practices & good
            governance.
          </p>

          <div class="two-ul">
            <ul>
              <li><p class="q-ml-lg">Alternative Financing Mechanisms</p></li>
              <li><p class="q-ml-lg">Infrastructure</p></li>
              <li><p class="q-ml-lg">Input & Supply</p></li>
              <li><p class="q-ml-lg">Market Access</p></li>
              <li><p class="q-ml-lg">Policy & Advocacy</p></li>
            </ul>
            <ul>
              <li><p class="q-ml-lg">Strategic Partnership</p></li>
              <li>
                <p class="q-ml-lg">
                  Technology and Product DevelopmentTechnology and Product
                  Development
                </p>
              </li>
              <li><p class="q-ml-lg">Training & Technical Assistance</p></li>
            </ul>
          </div>

          <p>
            As practitioners in the MSME sector, we not only understand the
            dynamics of running a successful business but we are in tune with
            the daily challenges of enterprise operators face hence our
            commitment to provide innovative and cutting-edge business
            development services to MSMEs.
          </p>

          <q-btn class="bg-primary btn q-mt-lg text-white">Learn More</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin-bottom: 0;
  font-size: 1.3rem;
}
.wrappie {
  margin: 3rem auto;
  padding: 4rem 0;
}
.holdie {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}
.holdie .left {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  height: 200px;
  min-width: 100%;
}

.long::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #00eaab;
  top: -4%;
  left: -4%;
}
.holdie .left .short {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.holdie .left .short .twos {
  position: relative;
  top: -40%;
}
.holdie .left .short .twos::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #00eaab;

  bottom: -4%;
  right: -4%;
}
.holdie .left .short .twos img:nth-child(1) {
  border: 10px solid #fff;
  position: relative;
}

.holdie .left img {
  transition: all 0.5s ease-in-out;
  border-radius: 9px;
  position: relative;
  z-index: 3;
}
.holdie .left img:hover {
  transform: scale(1.1);
  z-index: 5;
}

.two-ul li {
  position: relative;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
}

.two-ul li:before {
  content: "\e097";
  position: absolute;
  font-family: "FontAwesome";

  background: #00eaab;
  color: #ffff;
  padding: 0.75rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.right h5 {
  text-align: center;
  position: relative;
  margin: 0 0 1.4rem;
  font-size: 2.3rem;
  font-weight: 700;
  padding-left: 2rem;
}

.right h5::after {
  /* content: url(/images/are.png); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;

  /* width: 200px; */
  left: -1%;
  font-family: "FontAwesome";
}

.right .two-ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  /* margin: 3rem 0; */
}

.right .two-ul p {
  margin-left: 3rem !important;
}

.btn {
  padding: 1rem;
}

@media (max-width: 1300px) {
  .fles {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .holdie .left {
    height: fit-content;
    margin: 2rem 0;
  }
}

@media (max-width: 800px) {
  .holdie {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .fles {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .holdie .left .short {
    grid-template-columns: repeat(2, 1fr);
  }

  .right .two-ul {
    grid-template-columns: 1fr;
  }

  .long::before {
    width: 100px;
    height: 75px;
  }

  .holdie .left .short .twos::before {
    width: 100px;
    height: 75px;
  }
  .holdie .left {
    height: 100%;
    min-width: 100%;
  }
  .right .two-ul p {
    font-size: 15px;
  }
}
</style>
