<template>
  <div class="main-container">
    <section class="cover imagebg height-60 text-left" data-overlay="7">
      <div class="background-image-holder">
      </div>
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-sm-8">
            <h1>Campus Clubs</h1>
            <p class="lead">Join or start a MCF campus club</p>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="switchable feature-large">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-5">
            <div>
              <h3>Description</h3>
              <p
                class="lead"
              >Launching an attractive and scalable website quickly and affordably is important for modern startups — Stack offers massive value without looking 'bargain-bin'.</p>
            </div>
          </div>
          <div class="col-sm-6">
            <circle-spin class="m-0" v-if="loading"></circle-spin>
            <div  v-else class="boxed boxed--lg boxed--border">
              <h4>Find a Club on Campus</h4>
              <div class="mt-20 mb-10">
                <div class="input-group">
                  <select class="form-control">
                    <option label="Choose a campus:"></option>
                    <option  v-for="(club, index) in clubs" :key="index" :value="club.school">{{club.school}}</option>
                  </select>
                </div>
              </div>
              <a class="btn mt-20 btn--xs btn--primary type--uppercase" href="#">
                <span class="btn__text">JOIN</span>
              </a>
              <h4 class="mt-20">No Club in your School?</h4>
              <a class="btn btn--xs btn--primary type--uppercase" href="#">
                <span class="btn__text">Start a campus club</span>
              </a>
            </div>
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
      console.log('Failed')   
    })
  }
}
</script>