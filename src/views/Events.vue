<template>
  <div class="main-container">
    <!-- <section class="cover imagebg height-60 text-left" data-overlay="3">
      <div class="background-image-holder"></div>
    </section> -->
    <section class="bg--secondary space--xs">
      <h1 class="type--uppercase text-center">Awareness Events</h1>
    </section>
    <section class="switchable feature-large feature-large-13 switchable--switch space--sm">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-sm-5">
            <img alt="Image" class="border--round" src="https://res.cloudinary.com/mcf/image/upload/v1577850145/mcf%20main/event_cdoqis.jpg" />
          </div>
          <div class="col-sm-6 col-md-6">
            <div>
              <p class="lead">
                We organize mental health national events by partnering with individuals, private organizations and public bodies. 
                We particularly focus on giving hope and support to the vulnerable, while creating an avenue to discuss 
                critical issues that affect the mental health of Nigerians. We are committed to spreading relevant information and building a stigma free society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg--secondary space--xs">
      <div class="container">
        <h2 class="text-center">Our Events</h2>
        <div class="row">
          <circle-spin class="m-0" v-if="loading"></circle-spin>
          <div class="col-sm-4" v-else v-for="(event, index) in events" :key="index">
            <div class="feature feature-1">
              <div class="bg-white text-center event-img">
                <img alt="Event Image" v-if="event.image_url == null" src="https://imgplaceholder.com/500x500/ffffff/7cb2f8/glyphicon-picture" />
                <img alt="Image" v-else :src="event.image_url" />
              </div>
              <div class="feature__body boxed boxed--border">
                <h4 class="type--capitalize">{{event.title}}</h4>
                <p>{{event.description}}</p>
                <p>
                  <strong>Date: {{convertDate(event.date)}}</strong>
                </p>
                <a class="mt-10 btn btn--xs btn--primary type--uppercase" :href="event.event_link" target="_blank">
                  <span class="btn__text">Register</span>
                </a>
              </div>
            </div>
          </div>
          <p v-if="failed"> Failed to load Events. Please refresh</p>
        </div>
      </div>
    </section>
    <section class="text-center imagebg" data-overlay="7">
      <div class="background-image-holder event-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-6">
            <div class="cta">
              <h2>Want to organize an event?</h2>
              <a class="btn btn--primary type--uppercase" href="https://bit.ly/2SM2aGD" target="_blank">
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
      failed: false,
      events: []
    }
  },
  methods: {
    convertDate(payload) {
        let adate = new Date(payload)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return this.date = adate.toLocaleDateString('en-US', options)
      },
  },
  mounted() {
    axios.get('/admin/list?type=event')
    .then(res => {
      this.loading = false
      this.events = res.data.data
      // console.log(this.events)
    })
    .catch(err => {
      this.loading = false
      this.failed = true  
    })
  }
}
</script>