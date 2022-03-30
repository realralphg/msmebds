<template>
  <div class="we">
    <div class="line"></div>
    <div class="wa container">
      <div class="row justify-around q-pt-xl">
        <!-- First -->
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-md">
          <img class="logo" src="/images/logo.png" alt="" />
          <p>
            <strong>MSME Business Development Services Limited</strong> is a
            Business Development Service Facilitator and Provider Firm.
          </p>
          <p>
            We are committed to providing innovative and cutting-edge business
            development services to enterprise operators.
          </p>
        </div>

        <!-- Second -->
        <div class="col-md-4 q-px-md col-sm-12 col-xs-12">
          <div>
            <ShortArrow />
            <h4 class="text-weight-bold">Our Offices</h4>

            <!-- First Location -->
            <div>
              <p class="text-primary">Abuja Office</p>
              <p>
                80, Ralph Shodeinde Street, 2nd Floor, Kastina House, Abuja -
                FCT.<br />

                <span class="text-primary">enquiries@msmebds.ng</span>
              </p>
            </div>

            <!--Second Location -->
            <div>
              <p class="text-primary">Kaduna Office</p>
              <p>31, Gwari Avenue, Barnawa, Kaduna.</p>
            </div>
          </div>
        </div>

        <!-- Third -->
        <div class="col-md-4 q-px-md col-sm-12 col-xs-12">
          <ShortArrow />
          <h4 class="text-weight-bold">Contact Us</h4>
          <p>+234 906 550 2237</p>
          <p>+234 806 121 5036</p>
          <p>+234 706 768 1686</p>

          <div class="row">
            <q-btn class="text-primary"
              ><i class="fa-brands fa-2x fa-instagram"></i
            ></q-btn>
            <q-btn class="text-primary"
              ><i class="fa-brands fa-2x fa-twitter"></i
            ></q-btn>
            <q-btn class="text-primary"
              ><i class="fa-brands fa-2x fa-linkedin"></i
            ></q-btn>
            <q-btn class="text-primary"
              ><i class="fa-brands fa-2x fa-facebook"></i
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#00EAAB"
        fill-opacity="1"
        d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,261.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 70%;
}
.line {
  background: #00eaab;
  padding: 1rem;
}

h4 {
  position: relative;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
  font-size: 2.3rem;
  padding-left: 2.51rem;
}
h4::after {
  /* content: url(/images/are.png); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;

  /* width: 250px; */
  left: -1%;
  font-family: "FontAwesome";
}
</style>
