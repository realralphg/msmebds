<template>
  <div class="hold">
    <div class="hero">
      <h2 class="text-weight-bold">About Us</h2>
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

@media (max-width: 700px) {
  h2 {
    font-size: 2rem;
    line-height: 1;
    padding-left: 3rem;
  }
}
</style>
