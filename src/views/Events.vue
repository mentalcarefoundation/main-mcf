<template>
  <div class="main-container">
    <section class="cover imagebg height-60 text-left" data-overlay="7">
      <div class="background-image-holder"></div>
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-sm-8">
            <h1>Awareness Events</h1>
            <p class="lead">MCF mental health awareness events</p>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section
      class="bg--secondary switchable feature-large feature-large-13 switchable--switch space--sm"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-sm-5">
            <img alt="Image" class="border--round" src="../assets/static/img/education-2.jpg" />
          </div>
          <div class="col-sm-6 col-md-6">
            <div>
              <h3>Description</h3>
              <p
                class="lead"
              >Launching an attractive and scalable website quickly and affordably is important for modern startups — Stack offers massive value without looking 'bargain-bin'.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="space--xs">
      <div class="container">
        <h2 class="text-center">Our Events</h2>
        <div class="row">
          <circle-spin class="m-0" v-if="loading"></circle-spin>
          <div class="col-sm-4" v-else v-for="(event, index) in events" :key="index">
            <div class="feature feature-1">
              <img alt="Image" :src="event.image_url" />
              <div class="feature__body boxed boxed--border">
                <h4>{{event.title}}</h4>
                <p>{{event.description}}</p>
                <p>
                  <strong>Date: {{event.date}}</strong>
                </p>
                <a class="mt-10 btn btn--xs btn--primary type--uppercase" href="#">
                  <span class="btn__text">Register</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center imagebg" data-overlay="7">
      <div class="background-image-holder"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-6">
            <div class="cta">
              <h2>Want to organize an event?</h2>
              <a class="btn btn--primary type--uppercase" href="#">
                <span class="btn__text">Create one</span>
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
      events: []
    }
  },
  mounted() {
    axios.get('/admin/list?type=event')
    .then(res => {
      this.loading = false
      this.events = res.data.data
    })
    .catch(err => {
      // this.$notify({
      //           group: 'response',
      //           type: 'error',
      //           title: 'Error Fetching Events',
      //           duration: -2
      //       });   
    })
  }
}
</script>