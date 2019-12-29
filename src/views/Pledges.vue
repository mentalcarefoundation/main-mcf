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
              <h3 class="text--capitalize">Lend Your Voice</h3>
              <p
                class="lead"
              >Dummy text:Launching an attractive and scalable website quickly and affordably is important for modern startups — Stack offers massive value without looking 'bargain-bin'.</p>
              <div class="text-block type--uppercase">
                <h4 class="mb-10">Take the pledges</h4>
                <a class="btn mr-10 btn--xs btn--primary mb-10" href="#">
                  <span class="btn__text">STIGMA PLEDGE</span>
                </a>
                <a class="btn mr-10 btn--xs btn--primary mb-10 bg-1" href="#">
                  <span class="btn__text">Lorem ipsum</span>
                </a>
                <a class="btn mr-10 btn--xs btn--primary mb-10 bg-2" href="#">
                  <span class="btn__text">blah blah</span>
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