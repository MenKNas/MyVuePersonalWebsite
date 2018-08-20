import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import Home from './Home.vue';
import BlogsGrid from './components/BlogsGrid.vue';
import MyPortfolio from './components/MyPortfolio.vue';
import AboutMe from './components/AboutMe.vue';
import FindTopics from './components/FindTopics.vue';
import ContactMe from './components/ContactMe.vue';
import Blog from './components/Blog.vue';
import Page404 from './components/Page404.vue';
import ThankYou from './components/ThankYou.vue';
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home,

    },
    {
      path: '/MyBlog',
      component: BlogsGrid,

    },
    {
      path: '/AboutMe',
      component: AboutMe
    },
    {
      path: '/FindTopics',
      component: FindTopics
    },
    {
      path: '/ContactMe',
      component: ContactMe
    },
    {
      path: '/MyPortfolio',
      component: MyPortfolio
    },
    {
      path: '/ThankYou',
      component: ThankYou
    },
    {
      path: '*',
      component: Page404
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
