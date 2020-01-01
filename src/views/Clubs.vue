<template>
  <div class="main-container">
    <!-- <section class="cover imagebg height-60 text-left" data-overlay="3">
      <div class="background-image-holder"></div>
    </section> -->
    <section class="bg--secondary space--xs">
      <h1 class="type--uppercase text-center">Campus Clubs</h1>
    </section>
    <section class="switchable feature-large">
      <div class="container">
        <div class="row">
          <div class=" col-sm-5">
            <img alt="Image" class="border--round" src="https://res.cloudinary.com/mcf/image/upload/v1577874795/mcf%20main/campusclub_r0twno.jpg" />
          </div>
          <div class="col-md-offset-1 col-sm-6 col-md-6">
            <div>
              <p class="lead">
                MCF Campus Clubs promote mental health awareness and education within universities. Our aim is to
                provide an ongoing space for students to have a stigma-free place to discuss mental health and provide a
                bridge between community mental health resources and your school community.<br>

                Joining or starting a MCF Campus Club in your school gives you an opportunity to lead mental health
                related projects.
                <br>
                MCF campus clubs are not support groups or therapy groups. They serve as a safe space where like
                minded students can spearhead activities and discussions that combat stigma.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <section class="space--xs">
      <div class="container">
            <circle-spin class="m-0" v-if="loading"></circle-spin>
            <div v-else class="boxed boxed--lg boxed--border">
              
              <div class="col-sm-6">
                <h4>Find a Club on Campus</h4>
                <div class="mt-20 mb-10" v-if="clubs.length >= 0" >
                  <div class="input-group">
                    <select class="form-control">
                      <option label="Choose a campus:"></option>
                      <option  v-for="(club, index) in clubs" :key="index" :value="club.school">{{club.school}}</option>
                    </select>
                  </div>
                </div>
                <p v-if="failed" class="mb-0"> Failed to load Campus Clubs. Please refresh</p>
                <a class="btn mt-20 btn--xs btn--primary type--uppercase" href="#">
                  <span class="btn__text">JOIN</span>
                </a>
              </div>
              <div class="col-sm-6">
                <h4 class="mt-20">No Club in your School?</h4>
                <a class="btn btn--xs btn--primary type--uppercase" href="#">
                  <span class="btn__text">Start a campus club</span>
                </a>
              </div>  
                
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: true,
      failed: false,
      clubs: []
    }
  },
  mounted() {
    axios.get('/admin/list?type=campus_club')
    .then(res => {
      this.clubs = res.data.data
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
    .catch(err => {
      this.loading = false
      this.failed = true
    })
  }
}
</script>