<template>
  <div>
    <app-header></app-header>
    <app-slide>
      <router-view></router-view>
    </app-slide>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Slide from './components/Transition.vue'

export default {
  data () {
    return {
      
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appSlide: Slide
  }
}
</script>