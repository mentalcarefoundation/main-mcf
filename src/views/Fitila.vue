<template>
  <div class="main-container">
    <section class="cover imagebg height-60 text-left" data-overlay="7">
      <div class="background-image-holder"></div>
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-sm-8">
            <h1>Introducing Fitila</h1>
            <p class="lead">Get 24/7 free emotional support on Fitila.</p>
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
              <h3 class="type--uppercase">A listening ear to your deepest troubles</h3>
              <p class="lead">
                Fitila provides free emotional support over online chat. Our aim is to give everyone
                a safe place to discuss their problems without being judged.
                Fitila connects you with anonymous listeners who truly understand and are ready to
                give free emotional support until you are back on your feet.
              </p>
              <h5 class="type--uppercase mb-10">How it works</h5>
              <p
                class="mb-10"
              >Very simple! All you need is internet connection to get started. We provide you with:</p>
              <ul class="ml-ul">
                <li>Free online training and support</li>
                <li>Free reflective listening training</li>
                <li>Chat anonymously</li>
                <li>Control your availability</li>
              </ul>
              <p class="fw-600">
                Read Our Terms and Conditions
                <router-link class="fw-600" to="/terms">here.</router-link>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="boxed boxed--lg boxed--border">
              <div class="feature feature-2">
                <i class="icon ion-ios-people icon--lg color--primary"></i>
                <div class="feature__body">
                  <h5>Do you need someone to talk to?</h5>
                  <p>
                    Fitila trained volunteer listeners are available 24 /7 to give emotional support over online chat.
                    <br />Our trained listeners don’t judge, they don't try to solve problems, neither do they
                    tell you want to do. They just listen and give you a safe space you need to say your mind.
                    <br />Your chat is anonymous and entirely free!!
                  </p>
                  <router-link class="btn btn--xs btn--primary type--uppercase" to="/coming-soon">
                    <span class="btn__text">JOIN NOW</span>
                  </router-link>
                </div>
              </div>
              <div class="feature feature-2">
                <i class="icon ion-ios-people icon--lg color--primary"></i>
                <div class="feature__body">
                  <h5>Interested in becoming a listener?</h5>
                  <p>A listening ear can do wonders! Having someone like you to listen might be all it takes to put someone back on track!</p>
                  <router-link class="btn btn--xs btn--primary type--uppercase" to="/coming-soon">
                    <span class="btn__text">BECOME A LISTENER</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>