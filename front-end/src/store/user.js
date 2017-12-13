import fire from '../config'

/**
 * State
 */
const state = {
  username: '',
  user_id: ''
}

/**
 * Getters
 */

const getters = {
  showName: state => state.username,
  userID: state => state.user_id
} 

/**
 * Mutations
 */
const mutations = {
  setDisplayName(state) {
    state.username = fire.auth.currentUser.displayName
  },
  changeDisplayName(state, name) {
    fire.auth.currentUser.updateProfile({displayName:name}).then(
      ()=>{
        console.log('update successful. username is ' + name)
        state.username = name;
      },
      (err)=>{
        alert('Oops' + err.message)
      }
    )
  }
}

export default {
  state,
  getters,
  mutations
}