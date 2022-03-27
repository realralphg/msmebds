<template>
  <div class="hold">
    <div class="hero">
      <h2 class="text-weight-bold">Our Associates</h2>
    </div>

    <div class="wrapp container">
      <div class="left">
        <h5 class="text-weight-bold">About Us</h5>
        <p>
          <span class="text-primary"
            >Business Development Services Limited</span
          >
          <br />
          is a Business Development Service Facilitator and Provider Firm.
          <br />
          We are committed to providing innovative and cutting-edge business
          <br />
          development services to enterprise operators.
        </p>
        <div class="bts">
          <q-btn class="q-py-md q-px-xl bg-primary"> View more </q-btn>
        </div>
        <img class="vec" src="/images/viv.png" alt="" />
      </div>
      <div class="right">
        <img class="one" src="/images/asso1.png" alt="" />
        <div class="two">
          <img src="/images/asso2.png" alt="" />
          <img class="tw" src="/images/asso3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  height: 55vh;
  background: rgb(4, 4, 12);
  position: relative;
}

h2 {
  color: white;
}

h2 {
  position: relative;
  font-size: 3.5rem;
  padding-left: 6rem;
  margin-bottom: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

h2::before {
  /* content: url("/images/ae.png"); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;
  /* width: 200px; */
  left: 2%;
  font-family: "FontAwesome";
}

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

.right {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.right .two {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.one {
  position: relative;
}

.right::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #00eaab;
  top: -4%;
  left: -4%;
}

.two {
  position: relative;
}
.two::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 150px;
  background: #00eaab;

  bottom: -4%;
  right: -4%;
  z-index: -1;
}

.bts {
  position: relative;
}

.vec {
  position: absolute;
  top: 10%;
  left: 12%;
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
    padding-left: 3rem;
  }
}
</style>
