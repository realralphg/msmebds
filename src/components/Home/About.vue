<template>
  <div class="hold">
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
          <q-btn to="/about" class="q-py-md q-px-xl bg-primary"> Learn more </q-btn>

          <img class="vec" src="/images/vec.png" alt="" />
        </div>
      </div>
      <div class="right">
        <img src="/images/abo.png" alt="" />
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
  font-size: 1rem;
}

p span {
  font-size: 1rem;
}

.right {
  position: relative;
}

.bts {
  position: relative;
}

.vec {
  position: absolute;
  bottom: -182%;
  right: 12%;
  width: 150px;
  height: 150px;
}

.left h5 {
  position: relative;
  font-size: 2rem;
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

.right img {
  width: 80%;
  display: flex;

  text-align: center;
  margin: 0 auto;
}
.right {
  position: relative;
}

.right::before {
  content: "";
  position: absolute;
  text-align: center;
  background: #00eaab;
  height: 200px;
  width: 200px;
  right: -4%;
  z-index: -1;
  top: -4%;
}

@media (max-width: 800px) {
  .wrapp {
    grid-template-columns: 1fr;
  }
  .vec {
    position: absolute;
    bottom: -90%;
    right: 30%;
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 500px) {
  .right::before {
    content: "";
    position: absolute;
    text-align: center;
    background: #00eaab;
    height: 100px;
    width: 100px;
    right: -4%;
    z-index: -1;
    top: -4%;
  }
}
</style>
