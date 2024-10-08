<template>
  <div class="main-container">
    <section class="cover imagebg height-82 text-left" data-overlay="7">
      <div class="background-image-holder"></div>
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-sm-8">
            <h1>The Mental Care Foundation</h1>
            <div class="mb-10 typed-headline">
              <span class="h4 inline-block" style="line-height: 2em">
                We bring together technology and emotional support to give mental health a voice in
                Nigeria, where depression is seen as a “white man” illness
              </span>
            </div>
            <a class="btn btn--primary type--uppercase" href="#more" v-smooth-scroll>
              <span class="btn__text">Get Started</span>
            </a>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <section class="switchable feature-large feature-large-13 space--sm" id="more">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <img alt="Image" class="border--round" src="https://res.cloudinary.com/mcf/image/upload/v1577639100/mcf%20main/mcf_kezhpv.jpg" />
          </div>
          <div class="col-md-7 col-sm-8">
            <h2>ABOUT US</h2>
            <p class="lead">We are a moving train of love, support and hope.</p>
            <div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="feature feature-6 mb-0">
                    <i class="icon ion-ios-bookmarks-outline color--primary"></i>
                    <h5 class="mt-10 type--uppercase">Our Mission</h5>
                    <p>
                      Transform the understanding of mental illness through awareness programs and technology-centered
                      solutions that pave way for prevention, recovery and a safe space for all.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="feature feature-6 mb-0">
                    <i class="icon ion-ios-bookmarks-outline color--primary"></i>
                    <h5 class="mt-10 type--uppercase">Our Vision</h5>
                    <p>
                      MCF envisions a Nigeria in which mental illness is prevented, cured and given
                      attention at a national scale to eventually kill the stigma and promote mental wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <router-link tag="a" to="/about-us"  class="mt-20 btn btn--primary type--uppercase">
                <span class="btn__text">Learn More</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg--secondary switchable feature-large feature-large-13 switchable--switch space--sm"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-sm-5">
            <img alt="Image" class="border--round" src="https://res.cloudinary.com/mcf/image/upload/v1577639111/mcf%20main/fitila_xtrmwf.jpg" />
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="switchable__text">
              <h2>OUR SOLUTIONS</h2>
              <p class="lead mb-0">
                <span>We are intrepidly putting a stop to the stigma.</span><br>
                At Mental Care Foundation, we hold the opinion that everyone has a role to play to change the narrative of
                mental health in Nigeria. Together we can help each other emotionally, we can stop the stigma and be the
                most powerful instrument of change.
                <br />Here is how:
              </p>
              <ul class="ml-ul">
                <router-link tag="li" to="/fitila">
                  <a href="#">
                    <strong>Fitila</strong>
                  </a>
                </router-link>
                <router-link tag="li" to="/events">
                  <a href="#">
                    <strong>MCF Events</strong>
                  </a>
                </router-link>
                <router-link tag="li" to="/campus-clubs">
                  <a href="#">
                    <strong>MCF Campus Clubs</strong>
                  </a>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="space--xs">
      <div class="container">
        <h2 class="text-center type--uppercase">Meet The Team</h2>
        <circle-spin class="m-0" v-if="loadAdmins"></circle-spin>
        <div class="row" v-else>
          <div class="col-xs-6 col-sm-4 col-lg-3" v-for="datum in team" :key="datum.id">
            <div class="text-center feature">
              <div class="team-img">
                <img alt="Image" v-if="datum.image == null" src="../assets/static/img/avatar.jpg" class="avatar"/>
                <img alt="Image" v-else :src="datum.image" class="avatar"/>
              </div>
                <h4 class="type--capitalize">
                  <strong>{{datum.firstname}} {{datum.lastname}}</strong>
                </h4>
                <p class="mb-0">{{datum.position}}</p>
                <a class="lead text-underline" :href="datum.link" target="_blank">
                  Bio
                </a>
            </div>
          </div>
        </div>
        <p v-if="failedAdmin"> Failed to load Team Members list. Please refresh</p>
      </div>
    </section>
    <section class="space--xs bg--secondary">
      <h2 class="text-center type--uppercase">Volunteers of the Month</h2>
      <div class="mt-20 container">
        <div class="row">
          <div class="col-sm-12">
            <circle-spin class="m-0" v-if="loadVolunteers"></circle-spin>
            <flickity ref="flickity" :options="flickityOptions" v-else>
              <div class="carousel-cell" v-for="volunteer in volunteers" :key="volunteer.id">
                <div class="row">
                  <div class="testimonial" >
                    <div class="col-md-2 col-md-offset-1 col-sm-4 col-xs-4 text-center">
                      <img alt="Image" v-if="volunteer.image_url == null" src="../assets/static/img/avatar.jpg" class="testimonial__image avatar"/>
                      <img
                        class="testimonial__image avatar"
                        alt="Image" v-else
                        :src="volunteer.image_url"
                      />
                    </div>
                    <div class="col-md-7 col-md-offset-1 col-sm-8 col-xs-8">
                      <span class="h4">
                        "{{volunteer.bio}}"
                      </span>
                      <h5 class="type--capitalize">{{volunteer.name}}</h5>
                      <span class="type--capitalize">{{volunteer.position}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </flickity>
            <p v-if="failedVolunteer"> Failed to load Volunteers list. Please refresh</p>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center imagebg" data-overlay="7">
      <div class="background-image-holder background-image-holder2"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-6">
            <div class="cta">
              <h2>Help Us Do More</h2>
              <router-link tag="a" to="/donate" class="btn btn--primary type--uppercase">
                <span class="btn__text">Learn How</span>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import Flickity from "vue-flickity";

export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true
      },
      loadAdmins: true,
      failedAdmin: false,
      loadVolunteers: true,
      failedVolunteer: false,
      team: [],
      role: [],
      volunteers: []
    };
  },
    created() {
      axios.get("/admin/list?type=volunteer")
      .then(res => {
        this.volunteers = res.data.data
        this.loadVolunteers = false   
      })
      .catch(err => {
        this.loadVolunteers = false
           this.failedVolunteer = true  
      })
      axios.get("/users/all/admin")
      .then(res => {
          this.team = res.data.results
          this.loadAdmins = false
      })
      .catch(err => {
           this.loadAdmins = false
           this.failedAdmin = true
      })
    },
  components: {
    Flickity
  }
};
</script>