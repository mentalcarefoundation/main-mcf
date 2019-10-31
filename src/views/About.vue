<template>
  <div class="main-container">
    <section class="cover imagebg height-60 text-left" data-overlay="3">
      <div class="background-image-holder"></div>
    </section>
    <section class="space--xs">
      <h1 class="type--uppercase text-center">About Us</h1>
    </section>

    <section id="about" class="switchable feature-large feature-large-13 space--sm">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <img alt="Image" class="border--round" src="../assets/static/img/education-2.jpg" />
          </div>
          <div class="col-md-offset-1 col-sm-6 col-md-6">
            <div>
              <p class="lead">
                Founded in 2019, Mental Care Foundation (MCF) is one of Nigeria’s leading mental
                health organisations dedicated to building better lives for millions of Nigerians
                affected by mental illness. Our organization owns and runs 
                <router-link to="/fitila">
                  <strong class="custom-color text-uppercase"> Fitila </strong>
                </router-link>
                – Nigeria’s premier on-demand emotional health service that anonymously and securely connects
                  individuals to real listener in one-on-one live chat.
              </p>
              <p class="lead">
                MCF educates thousand of communities across Nigeria through 
                <router-link to="/events">
                  <strong class="custom-color"> MCF awareness events </strong>
                </router-link> and 
                <router-link to="/campus-clubs">
                  <strong class="custom-color"> MCF campus clubs </strong>
                </router-link> to ensure that individuals get the information and
                support that they need to successfully fight stigma and encourage understanding.
                <br>
                <br>
                We work with 
                  <router-link to="/fitila">
                    <strong class="custom-color"> volunteers</strong>
                  </router-link> 
                  in Nigeria to lead campaigns on national public policy for
                people with mental illness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="problem"
      class="bg--secondary switchable feature-large feature-large-13 switchable--switch space--sm"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-sm-5">
            <img alt="Image" class="border--round" src="../assets/static/img/education-2.jpg" />
          </div>
          <div class="col-sm-6 col-md-6">
            <div>
              <h2>THE PROBLEM</h2>
              <p class="lead mb-0">
                December 26th of 2018, a random Facebook friend took her own life and that incidence changed my opinion about mental
                health - from just being curious about mental health to becoming an advocate.
              </p>
              <span>
                <strong class="custom-color">– Akinjobi Balikis</strong>, Co-founder and Executive
                Director, MCF
              </span>
              <ul  class="ml-ul mb-10 mt-10 lead">
                <li>
                  Close to 800 000 people die due to suicide every year, which is one person every 40 
                  <a class="fw-600" href="https://www.who.int/mental_health/prevention/suicide/suicideprevent/en/">
                    seconds.
                  </a>
                </li>
                <li>
                  There are indications that for each adult who died by suicide there may have been more than 20 others attempting
                  <a class="fw-600" href="https://www.who.int/mental_health/prevention/suicide/suicideprevent/en/">
                    suicide.
                  </a>
                </li>
                <li>
                  About 30% of Nigerians suffer mental
                  <a class="fw-600" href="http://saharareporters.com/2018/11/13/30-nigerians-suffer-mental-illness-%E2%80%93-fg">
                    illness.
                  </a>
                </li>
              </ul>
              <p class="lead">
                Psychiatrists have linked the rising prevalence of mental health disorders in Nigeria particularly to stigma and lack of public
                awareness. In Nigeria, people who attempt suicide are being arrested rather than being treated.<br> Many Nigerians still believe that mental illnesses like depression and schizophrenia are demonic and cant happen to “holy
                people”. <br>People can’t talk freely about their mental health because of the fear of being stigmatized. Even teens are expected to shake it
                off and what we see is more and more people take their lives.
              </p>
              <p class="lead text-uppercase custom-color ">
                <router-link to="/fitila" tag="a" class="fw-600">
                We need to put an end to this!
              </router-link>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="switchable feature-large feature-large-13 space--xs">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="feature feature--featured feature-5 boxed boxed--lg boxed--border">
              <i class="icon ion-ios-bookmarks-outline icon--lg"></i>
              <div class="feature__body">
                <h5 class="type--uppercase">Our Mision</h5>
                <p>
                  Transform the understanding of mental illness through awareness programs and technology-centered
                  solutions that pave way for prevention, recovery and a safe space for all.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="feature feature--featured feature-5 boxed boxed--lg boxed--border">
              <i class="icon ion-ios-bookmarks-outline icon--lg"></i>
              <div class="feature__body">
                <h5 class="type--uppercase">Our Vision</h5>
                <p>
                  MCF envisions a Nigeria in which mental illness is prevented, cured and given
                  attention at a national scale to eventually kill the stigma and promote mental wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  
};
</script>