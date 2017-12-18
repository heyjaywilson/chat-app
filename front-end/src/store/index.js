import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import chats from './chats'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    user,
    chats
  }
})
