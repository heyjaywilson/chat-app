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
    console.log(state.username)
  },
  setUserID(state) {
    state.user_id = fire.auth.currentUser.uid
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
