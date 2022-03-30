<template>
  <div class="hold">
    <div class="hero">
      <h2 class="text-weight-bold">Our Associates</h2>
    </div>

    <div class="wrapp container">
      <div class="left">
        <h5 class="text-weight-bold">Our Associates</h5>
        <p>
          In line with our philosophy of
          <span class="text-weight-bold">“Doing Business Made Easy”</span> , We
          work with our Associates to provide innovative end to end Business
          Development Services (BDS) to members of the
          <span class="text-weight-bold"> MSME Business Club.</span>
        </p>
        <div class="bts">
          <!-- <q-btn class="q-py-md q-px-xl bg-primary"> View more </q-btn> -->
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
  background: url("/images/associates.png") no-repeat center center/cover;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(4, 4, 12, 0.65);
  width: 100%;
  height: 100%;
}

h2 {
  color: white;
}

h2 {
  position: relative;
  font-size: 2.5rem;
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
  font-size: 1rem;
}

p span {
  font-size: 1rem;
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
