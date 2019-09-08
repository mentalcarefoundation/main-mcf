import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      // name: "home",
      component: Home,
      meta: { title: 'Home'} 
    },
    { 
      path: "/about-us",
      meta: {title: 'About Us'},
      // name: "about",
      component: () => import("./views/About.vue"),
    },
    { path: "/campus-clubs", component: () => import("./views/Clubs.vue"), meta: {title: 'Campus Clubs'} }, 
    { path: "/events", component: () => import("./views/Events.vue"), meta: {title: 'Events'} },
    { path: "/fitila", component: () => import("./views/Fitila.vue"), meta: {title: 'Fitila'} },
    { path: "/be-a-voice", component: () => import("./views/Pledges.vue"), meta: {title: 'Be A Voice'} },
    { path: "/terms", component: () => import("./views/Terms.vue"), meta: {title: 'Terms of Service'} },
    { path: "/coming-soon", component: () => import("./views/Soon.vue"), meta: {title: 'Coming Soon'} },
    { path: "/error", component: () => import("./views/404.vue"), meta: {title: 'Page Not Found'} },
    { path: "*", redirect: "/error" },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
    else{
      return { x: 0, y: 0 }
    }
  },
});
const DEFAULT_TITLE = 'Mental Care Foundation';
router.afterEach((to, from) => {
    document.title = `${to.meta.title} || ${DEFAULT_TITLE}`;
});

export default router;

