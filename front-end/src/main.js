// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import fire from './config'
import store from './store'

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      el: '#app',
      store,
      router,
      template: '<App/>',
      components: { App }
    })
  }
})
