<template>
  <div class="main-container">
    <!-- <section class="cover imagebg height-60 text-left" data-overlay="3">
      <div class="background-image-holder"></div>
    </section> -->
    <section class="bg--secondary space--xs">
      <h1 class="type--uppercase text-center">Give Mental Health A Voice</h1>
    </section>

    <section class="switchable feature-large feature-large-13">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img
              alt="Image"
              class="border--round box-shadow-wide"
              src="https://res.cloudinary.com/mcf/image/upload/v1577639570/mcf%20main/volunteer_dv9z6s.jpg"
            />
          </div>
          <div class="col-sm-6 col-md-5">
            <div>
              <h4 class="type--uppercase">Lend Your Voice</h4>
              <p
                class="lead"
              >Lend your voice is MCF’s effort to end suicide and encourage people to pay attention to their mental health
                while creating hope for those affected by mental illness. Through powerful words and actions, we can shift
                the social barriers for those living with mental health conditions.</p>
              <div class="text-block type--uppercase">
                <h4 class="mb-10">Take the pledges</h4>
                <a class="btn mr-10 btn--xs btn--primary mb-10" href="http://bit.ly/mcfdp2">
                  <span class="btn__text">SUICIDE-FREE PLEDGE</span>
                </a>
                <a class="btn mr-10 btn--xs btn--primary mb-10 bg-1" href="http://bit.ly/mcfdp1">
                  <span class="btn__text">MENTALLY STRONG PLEDGE</span>
                </a>
              </div>
              <div class="mt-20 modal-instance">
                <h4 class="mb-10 type--uppercase">How well do you know Mental Health?</h4>
                <a @click="show" class="modal-trigger btn btn--xs btn--primary">
                  <span class="btn__text type--uppercase">Take the Quiz</span>
                </a>
                <quiz></quiz>
              </div>
              <div class="mt-30 text-block type--uppercase">
                <h4 class="mb-10">Need Resources?</h4>
                <a class="btn btn--xs btn--primary" href="http://blog.fitila.life">
                  <span class="btn__text">Visit the Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Quiz from "../components/Quiz.vue";
export default {
  methods: {
    show() {
      this.$modal.show("quiz");
    }
  },
  components: {
    Quiz
  }
};
</script>

<style scoped>
.modal-container {
  visibility: visible;
}
</style>