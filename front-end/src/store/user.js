import fire from '../config'

/** State**/
const state = {
  username: '',
  user_id: ''
}

/** Getters**/
const getters = {
  showName: state => state.username,
  showID: state => state.user_id
}

/**Mutations**/
const mutations = {
  /**
   * All used to update user names and IDs
   */
  setDisplayName(state) {
    state.username = fire.auth.currentUser.displayName
  },
  setUserID(state) {
    state.user_id = fire.auth.currentUser.uid
  },
}

const actions = {
  changeDisplayName({commit}, name){
    fire.auth.currentUser.updateProfile({displayName: name}).then(
      ()=> {
        commit('setDisplayName')
      },
      (err)=> {alert('Oops '+err.message)}
    )
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
