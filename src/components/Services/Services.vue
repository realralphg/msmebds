<template>
  <div class="wrapp container">
    <div class="left">
      <h5 class="text-weight-bold">Our Services</h5>
      <p>
        MSME Business Development Services Limited is a United Nations
        Industrial Development Organization (UNIDO) and Small and Medium
        Enterprises Development Agency of Nigeria (SMEDAN) Certified and
        Accredited Micro, Small and Medium Enterprises Development and Training
        Institute. <br />
        <br />

        Beyond entrepreneurship training and capacity building, we offer
        services that promote enterprise innovations to aid enterprise
        productivity and competitiveness in line with the aspirations of the
        21st century economy. <br />
        <br />

        As Certified and Accredited Business Development Service Providers
        (BDSPs), we provide innovative Operational, Technical and Strategic
        Business Development Services (BDS) and practical Handholding to MSME
        Operators to various sector to enable them overcome critical Enterprise
        Growth Inhibitors (EGI) and facilitate ease of enterprise development,
        growth and expansion.
      </p>
      <!-- <div class="bts">
        <q-btn class="q-py-md q-px-xl bg-primary"> View more </q-btn>
      </div> -->
      <img class="vec" src="/images/viv.png" alt="" />
    </div>
    <div class="right">
      <div class="two">
        <img src="/images/serv2.png" alt="" />
        <img class="tw" src="/images/serv.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapp {
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  position: relative;
}

p {
  font-size: 1.3rem;
}

p span {
  font-size: 1.3rem;
}

/* .right {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
} */

.right .two {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.right .two img {
  width: 80%;
  object-fit: contain;
  margin: 0 auto;
}

.one {
  position: relative;
}
/* 
.right::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #00eaab;
  top: -4%;
  left: -4%;
} */

.two {
  position: relative;
}
.two::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #00eaab;

  top: -4%;
  right: -4%;
  z-index: -1;
}
.two img:nth-child(2) {
  margin-top: -4%;
  margin-left: 8%;
}

.bts {
  position: relative;
}

.vec {
  position: absolute;
  top: 7%;
  left: 32%;
  width: 150px;
  height: 100px;
}

.left h5 {
  position: relative;
  font-size: 2.3rem;
  padding-left: 3rem;
  margin-bottom: 1.5rem;
}

.left h5::before {
  /* content: url("/images/ae.png"); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;
  /* width: 200px; */
  left: -2%;
  font-family: "FontAwesome";
}

@media (max-width: 800px) {
  .wrapp {
    grid-template-columns: 1fr;
  }
  .vec {
    position: absolute;
    top: 2%;
    left: 50%;
    width: 80px;
    height: 80px;
  }
  .right {
    margin: 2rem 0;
  }

  h2 {
    font-size: 2rem;
    line-height: 1;
  }
}
</style>
