<template>
  <div class="hold">
    <div class="wrapp container">
      <div class="img">
        <img src="/images/contact.png" alt="" />
      </div>
      <div class="right">
        <h5 class="text-center">Contact Us</h5>
        <form>
          <div class="input-wrap">
            <label class="text-primary" for="">Full name</label> <br />

            <div class="input">
              <i class="ri-mail-line q-mr-md text-primary"></i>

              <input type="email" placeholder="Ademola Adewale" />
            </div>
          </div>
          <div class="input-wrap">
            <label class="text-primary" for="">Email</label> <br />

            <div class="input">
              <i class="ri-lock-line q-mr-md text-primary"></i>

              <input type="email" placeholder="a@b.c" />
            </div>
          </div>

          <div class="input-wrap">
            <label class="text-primary" for="">Phone number</label> <br />

            <div class="input">
              <i class="ri-lock-line q-mr-md text-primary"></i>

              <input type="password" placeholder="081040555" />
            </div>
          </div>

          <div class="input-wrap">
            <label class="text-primary" for="">Message</label> <br />

            <div class="input">
              <textarea
                placeholder="Write your message"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div class="button q-pt-xl">
            <q-btn type="submit" class="btn">Send your message</q-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hold {
  /* margin: 2rem 0; */
  padding: 3rem 0;
  background: #f9f9f9;
}
.wrapp {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.right h5 {
  position: relative;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
  font-size: 2.3rem;
}
.right h5::after {
  /* content: url(/images/are.png); */
  content: "\f061";
  position: absolute;
  text-align: center;
  color: #00eaab;

  /* width: 250px; */
  left: -1%;
  font-family: "FontAwesome";
}
.img img {
  /* box-shadow: rgba(43, 148, 91, 0.96) 0px 22px 70px 4px; */
  /* box-shadow: rgba(43, 148, 91, 0.96) 0px 25px 20px -20px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  box-shadow: rgba(43, 148, 91, 0.66) 0px 30px 20px -7px;
}
.input-wrap,
textarea {
  width: 100%;
  margin-bottom: 2px;
}

.input-wrap .input,
textarea {
  /* border: 1px solid #2b945b; */
  padding: 0.75rem;
  margin: 1rem 0;
  margin-bottom: 2px;
  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.input-wrap .input input,
textarea {
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
textarea:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  background-color: #00eaab;
  margin: 1rem;
  border-radius: 8px;
  border: 1px solid #2b945b;
  font-size: 0.85rem !important;
  padding: 1rem;
  color: #fff;
  margin: 0.55rem 0;
}

@media (max-width: 800px) {
  .wrapp {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .log .wrapp p {
    font-size: 11px;
  }
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
}
</style>
