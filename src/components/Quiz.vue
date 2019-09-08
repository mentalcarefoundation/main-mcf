<template>
  <modal name="quiz" class="modal-container" height="auto" :clickToClose="false">
    <div class="modal-content w-300px">
      <div class="boxed boxed--lg boxed--border">
        <h4>
          Mental Health Awareness Quiz
            <span class="modal-close modal-close-cross" @click="hideModal($modal)" aria-label="Close"></span>
        </h4>
        <div class="callout callout-custom" role="alert" v-if="endQuiz">
          <h4 class="type--uppercase">You're done!</h4>
          <p>Your score is {{correct}}/{{quiz.length}}</p>
        </div>
        <div class="callout callout-custom" role="alert" v-if="answer && !endQuiz">
          <h4 class="type--uppercase" v-if="feedback == quiz[index].answer">Correct!</h4>
          <h4 class="type--uppercase" v-else>Wrong!</h4>
          <p>{{quiz[index].exp}}</p>
          <div class=" text-right">
            <a class="mb-0 btn btn--xs btn--primary type--uppercase " href="#" @click="nextQuestion">
              <span class="btn__text">Next >></span>
            </a>
          </div>
          
        </div>
        <div v-if="!answer && !endQuiz">
          <div class="mt-20 mb-10 type--uppercase">Question {{index+1}}/{{quiz.length}}</div>
          <p>
            {{quiz[index].question}}
          </p>
          <a class="mb-0 btn btn--xs btn--primary type--uppercase" @click="checkAnswer('true')">
            <span class="btn__text">True</span>
          </a>
          <a class="ml-10 btn btn--xs btn--primary type--uppercase bg-1" @click="checkAnswer('false')">
            <span class="btn__text">False</span>
          </a>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      answer: false,
      correct: 0,
      endQuiz: false,
      feedback: 'false',
      quiz: [
        {
          question: "Mental Health disorder is common.",
          answer: "true",
          exp: "Mental Health disorder is incredibly common."
        },
        {
          question: "Mental Health can affect anyone.",
          answer: "true",
          exp: "You can be the smartest person on Earth and still suffer from mental health problems! It can happen to anyone."
        },
        {
          question: "One in One-Hundred people suffer from a mental health problem.",
          answer: "false",
          exp: "1 in 5 suffer a mental health issue in their life-times."
        },
        {
          question: "People with a Mental Health problem CANNOT work.",
          answer: "false",
          exp: "Many people, doctors, teachers, nurses, firefighters and police officers can suffer from mental health disorders and still work."
        },
        {
          question: "People with severe mental health problems are often dangerous and violent.",
          answer: "false",
          exp: "People with mental health problems are at far higher risk of harming themselves than other people. Only a very small number of people with some mental illnesses are a danger to the public."
        },
        {
          question: "Keeping in regular contact and inviting people out socially can help someone who is suffering from depression.",
          answer: "true",
          exp: "Keeping in contact with your friend shows you care. Even if they say no or do not reply, it can still really help someone! Don’t give up!"
        },
        {
          question: "People with mental health problems can overcome their difficulties.",
          answer: "true",
          exp: "Most of the time people can overcome their mental health problem. Though sometimes it’s still there a person can learn to deal with issues with the right help!"
        },
        {
          question: "Only girls suffer from eating disorders.",
          answer: "false",
          exp: "Anybody can suffer from eating disorders. Often it is due to social pressure e.g. telling someone to look a certain way."
        },
        {
          question: "Wanting to talk to someone about how I feel means I have a mental health illness.",
          answer: "false",
          exp: "Talking to someone about how you feel can actually help you not have a mental health illness. Don’t ever think it means you have one!"
        },
        {
          question: "Anxiety means you are weak..",
          answer: "false",
          exp: "Anxiety is something we all feel. Some people feel this more than others but it doesn’t mean you are weak or have a problem."
        }
      ]
    }
  },
  methods: {
    hideModal(a) {
      a.hide('quiz')
      this.index = 0;
      this.correct = 0;
      this.answer = false;
      this.endQuiz = false;
    },
    checkAnswer(a) {
      if(this.index + 1 <= this.quiz.length){
        this.answer = true
      }
      if(a == this.quiz[this.index].answer){
        this.correct ++;
      }
      this.feedback = a
      // console.log(this.feedback)
    },
    nextQuestion() {
      if(this.index + 1 >= this.quiz.length){
        this.endQuiz = true
      }
      else {
        this.index ++;
      }
      this.answer = false;
    }
  }
};
</script>