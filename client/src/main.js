import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {rutas} from './router.js'

Vue.use(VueRouter);

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
