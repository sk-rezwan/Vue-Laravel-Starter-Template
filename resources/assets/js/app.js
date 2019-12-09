 require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.use(BootstrapVue)

let routes = [
    { path: '/home', component: require('./Pages/Home.vue')},
    { path: '/profile', component: require('./Pages/Profile.vue')},
    { path: '/services', component: require('./Pages/Services.vue')}
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })


Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('app', require('./components/App.vue'));
 

const app = new Vue({
    el: '#app',
    router
  });