import Vue from 'vue'
import Vuex from 'vuex'

import Firebase from 'Firebase'
import 'Firebase/firestore'
import fire from '../config'

Vue.use(Vuex)

const state = {
  data: fire.db
}

export default new Vuex.Store({
  state,
  modules: {}
})