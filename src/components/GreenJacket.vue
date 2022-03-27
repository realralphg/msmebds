<template>
   <!-- hero section  -->
  <div class="project_hero relative-position">
      <div class="overlay row">
        <Arrow />
        <h2 class="text-h2 text-bold text-white q-ml-lg q-my-auto" >The Green Jacket <br> Program</h2>
      </div>
  </div>


  <!-- First Section  -->
  <div class="row" style="width:100%">

  </div>

  <!-- Second Section  -->
  <div>

  </div>

  <!-- Thrid Section  -->
  <div class="third " style="width:100%">
    <div class="third_inner row">

       <div class="col-6 q-pa-xl q-my-auto">
         <q-img src="/GreenJacket/people.png" />
       </div>

       <div class="col-6 q-pa-xl q-my-auto">
         <h6>
           MSMEs listed on the Growth Board enjoy the full complement of Value Added Services (Institutional Services; Investor Relations; Analyst Coverage, Corporate Access and Corporate Governance), expanded Designated Advisers, reduced NSE fee structure, reduced pre and post-listing obligations and increased turnaround time for approvals and time to market.
           <br>
           <br>
           The strategic objectives of the Green Jacket align with the aspirations of the Nigeria Stock Exchange Growth Board.
         </h6>
       </div>
    </div>
  </div>

  <Form />

</template>

<script>
import Arrow from 'components/Arrow.vue'
import Form from 'components/Form.vue'

export default {
  name: 'GreenJacket',
  components:{
    Arrow,
    Form
  }
}
</script>

<style scoped>

.objectives{
  /* margin: auto 30% auto 5% */
  margin-left: 5%;
  margin-right: 30%;
}
.project_hero{
    width: 100%;
    background: url('/Greenjacket/Jacket_hero.png');
    height: 400px;
  }

  .overlay{
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.3);
    position: absolute;
    padding: 0 7%;
  }


.text{
  padding: 0 8%;
  margin: auto 0;
}

.third{
  background: url('/Greenjacket/stock.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  height: 600px;
}

.third_inner{
  background: rgb(255, 255, 255,0.6);
  width: 100%;
  height: 100%;
  position: absolute ;
}

.container{
  padding: 5% 5%;
}
  .image-container {
  position:relative;
}

.image-container::after {
  content:'';
  position: absolute;
  z-index:-1;
  bottom:-24px;
  left:-7%;
  top: -10%;
  width:50%;
  height:50%;
  background: #00EAAB;

}

img {
  width:100%;
}

.high{
  width: 3rem;
  height: 3rem;
  border: 3px solid white;
  background: #00EAAB;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: auto 0;
}

 .short_arrow{
  width: 20px;
  height: 2px;
  border-radius: 4px;
  background-color: #fff;
  /* position: relative; */
  top: 5px;
  margin: auto 0;
  transform: rotate(45deg);
}

.short_arrow:after{
  content: "";
  display: inline-block;
  border-radius: 4px;
  width: 13px;
  height: 2px;
  background-color: #fff;
  transform: rotate(-45deg);
  position: absolute;
  right: -1px;
  bottom: -5px;
}

.short_arrow:before{
  content: "";
  display: inline-block;
  border-radius: 4px;
  width: 13px;
  height: 2px;
  background-color: #fff;
  transform: rotate(45deg);
  position: absolute;
  right: -1px;
  bottom: 5px;
}

.write_up{
  padding: 5% 0;
}
.write_up p{
  width: 80%;
  margin: auto 0;
}

.writing_container{
  margin-bottom: 7%;
}
</style>
