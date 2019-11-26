import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router.js"
import { CircleSpinner } from 'vue-spinners'
// import Flickity from 'vue-flickity'
import VModal from 'vue-js-modal'
import vueSmoothScroll from 'vue2-smooth-scroll'

//static files
import  './assets/static/css/socicon.css';
import './assets/static/css/ionicons.min.css';
import  './assets/static/css/bootstrap.css';
import  './assets/static/css/stack-interface.css';
import  './assets/static/css/theme.css';
import  './assets/static/css/custom.css';

import './assets/static/js/jquery-3.1.1.min.js';
import './assets/static/js/smooth-scroll.min.js';
import './assets/static/js/scripts.js';
import './assets/static/js/easypiechart.min.js';

Vue.use(vueSmoothScroll)
Vue.use(VModal)
// Vue.use(Flickity)

Vue.component('circle-spin', CircleSpinner)

// For API calls
axios.defaults.baseURL = 'https://mcfapi.herokuapp.com/api/v1';



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
