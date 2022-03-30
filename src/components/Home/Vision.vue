<template>
  <section class="values">
    <div class="values-wrap container">
      <div class="card">
        <i class="fas sec fa-eye fa-2x"></i>

        <div class="hold">
          <h4 class="text-white text-weight-bold">
            <span class="thin">Our</span> Vision
          </h4>
          <p class="text-white">
            We are established for purpose to be the leading Private Sector
            platform providing innovative and cutting-edge Business Development
            Services to MSME Operators in Nigeria.
          </p>
        </div>
      </div>
      <div class="card">
        <i class="fas fa-bullseye fa-2x"></i>

        <div class="hold">
          <h4 class="text-white text-weight-bold">
            <span class="thin">Our</span> Mission
          </h4>
          <p class="text-white">
            To contribute to the development of a vibrant and robust private
            sector through the provision of innovative and cutting-edge Business
            Development Services (BDS).
          </p>
        </div>
      </div>

      <div class="card">
        <i class="fas fa-balance-scale fa-2x"></i>

        <div class="hold">
          <h4 class="text-white text-weight-bold">
            <span class="thin">Our</span> Values
          </h4>
          <div class="what-we-do">
            <div class="what text-white">
              <!-- <h5 class="text-primary text-weight-bold">BDS Facilitation</h5> -->
              <p>
                BDS facilitation such as product and content development,
                capacity building, promoting good practice, external evaluation,
                quality assurance, advocacy, and more.
              </p>
            </div>

            <div class="what q-my-lg text-white">
              <!-- <h5 class="text-primary text-weight-bold">BDS Provisioning</h5> -->
              <p>
                BDS provisioning such as handholding, coaching, mentorship,
                counseling, consultancies and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.values {
  margin: 7rem 0 0;

  background: linear-gradient(116.61deg, #010657 7.75%, #030649 70.38%);
  padding: 3rem;
}

.values-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  width: 90%;
  place-items: center;
}

.values-wrap .card {
  background-color: #ffff;
  /* color: var(--text-color); */
  padding: 1rem;
  /* border: 2px solid rgba(77, 77, 77, 0.18); */
  min-height: 450px;
  height: 400px;
  /* box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97); */
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  /* width: 400px; */
  /* min-width: 100%; */
  text-align: left;
}
.values-wrap .card:hover {
  transform: scale(1.1);
}
.values-wrap .card .hold {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 7rem;
}
.values-wrap .card:nth-child(1) {
  /* border-top-left-radius: 40%; */
  background-color: #18b68c;

  position: relative;
  color: #fff;
  padding: 1rem 2rem;
  /* border: 2px solid rgba(77, 77, 77, 0.18); */
  min-height: 300px;
  /* box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97); */
  transition: all 0.3s ease-in-out;
  /* border-radius: 10px; */
  cursor: pointer;
  /* border: 1px solid rgba(141, 53, 74, 0.94); */
  /* border: 1px solid #ff6464; */
  /* text-align: center; */
  /* box-shadow: 0px 10px 40px rgba(141, 53, 74, 0.94); */
  /* box-shadow: 0px 10px 40px rgb(255, 100, 100, 0.97); */
}

/* .values-wrap .card:nth-child(1)::before {
 content: '';
 position: absolute;
 background-color: #fff;
 width: 70px;
 height: 70px;
 border-radius: 50%;
 top: 10%;
 left: 10%;
 z-index: 1;

} */
.values-wrap .card:nth-child(1) i {
  /* color: #ff6464; */
  /* color: rgba(141, 53, 74, 0.94); */
  /* color: #ff4f52; */
  color: #010657;
  background: #fff;
  /* box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.1),
    inset 0px 3px 20px rgba(0, 0, 0, 0.1); */
  margin: 0.75rem 0;
  padding: 1rem;
  width: 80px;
  height: 80px;
  z-index: 2;
  border-radius: 50%;
  /* position: relative; */
  position: absolute;
  top: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 50%; */
}
.values-wrap .card:nth-child(1) h4 {
  /* color: #ff6464; */
  color: rgba(141, 53, 74, 0.94);

  margin: 0.75rem 0;
  font-size: 20px;
}

.values-wrap .card:nth-child(1) {
  font-size: 18px;
}

.thin {
  font-weight: 300;
}

.values-wrap .card:nth-child(2) {
  font-size: 18px;
}

.values-wrap .card:nth-child(3) {
  font-size: 18px;
}
.values-wrap .card:nth-child(2) {
  background-color: #18b68c;
  color: var(--text-color);
  padding: 1rem 2rem;
  position: relative;
  /* border: 2px solid rgba(77, 77, 77, 0.18); */
  min-height: 300px;
  /* box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97); */
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
  /* text-align: center; */
  /* border: 1px solid #e08c29; */

  /* box-shadow: 0px 10px 40px rgba(230, 142, 43, 0.97); */
  /* border: 1px solid #6854fc;

  box-shadow: 0px 10px 40px rgba(104, 84, 252, 0.97); */
}
/* .values-wrap .card:nth-child(2)::before {
 content: '';
 position: absolute;
 background-color: #fff;
 width: 200px;
 height: 200px;
 border-radius: 50%;
 top: -20%;
 left: -20%;
 z-index: 1;

} */
.values-wrap .card:nth-child(2) i {
  /* color: #1a9d86; */
  color: #010657;
  background: #fff;
  /* box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.1),
    inset 0px 3px 20px rgba(0, 0, 0, 0.1); */
  margin: 0.75rem 0;
  padding: 1rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  z-index: 2;
  /* position: relative; */
  position: absolute;
  top: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.values-wrap .card:nth-child(2) h4 {
  /* color: #6854fc; */
  color: #e08c29;
  font-size: 20px;

  margin: 0.75rem 0;
}
.values-wrap .card:nth-child(3) {
  text-align: left;
  background-color: #18b68c;

  /* color: var(--text-color); */
  padding: 1rem 2rem;
  /* border: 2px solid rgba(77, 77, 77, 0.18); */
  min-height: 300px;
  /* box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97); */
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  /* border: 1px solid #6854fc; */

  /* box-shadow: 0px 10px 40px rgba(104, 84, 252, 0.97); */
}

/* .values-wrap .card:nth-child(3)::before {
 content: '';
 position: absolute;
 background-color: #fff;
 width: 200px;
 height: 200px;
 border-radius: 50%;
 top: -20%;
 left: -20%;
 z-index: 1;

} */

.values-wrap .card:nth-child(3) i {
  /* color: #f0bc05; */
  color: #010657;
  background: #fff;
  width: 80px;
  height: 80px;
  /* box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.1),
    inset 0px 3px 20px rgba(0, 0, 0, 0.1); */
  margin: 0.75rem 0;
  padding: 1rem;
  border-radius: 50%;
  z-index: 2;
  /* position: relative; */
  position: absolute;
  top: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.values-wrap .card:nth-child(3) h4 {
  color: #6854fc;
  font-size: 20px;

  margin: 0.75rem 0;
}

.what-we-do::-webkit-scrollbar {
  /* background: #189b78; */
  width: 0.3rem;
}

@media (max-width: 500px) {
  .values {
    padding: 3rem 0;
  }
  .values-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    width: 90%;
    place-items: center;
  }

  .values-wrap .card {
    background-color: #ffff;
    padding: 1rem;
    min-height: 450px;
    height: 550px;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    cursor: pointer;

    text-align: left;
  }
}
</style>
