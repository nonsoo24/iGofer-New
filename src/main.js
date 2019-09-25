import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import {routes} from './routes'

Vue.use(VueRouter);
//Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.config.productionTip = false

//Vue.http.options.root = 'https://i-gofer.herokuapp.com';

axios.defaults.baseURL =  'https://i-gofer.herokuapp.com';

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
