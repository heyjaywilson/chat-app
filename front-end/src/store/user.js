import fire from "../config";

const conversations = fire.db.collection("conversations");

/** State**/
const state = {
  username: "",
  user_id: "",
  user_chats: []
};

/** Getters**/
const getters = {
  showName: state => state.username,
  showID: state => state.user_id,
  showUserChats: state => state.user_chats
};

/**Mutations**/
const mutations = {
  /**
   * All used to update user names and IDs
   */
  setDisplayName(state) {
    state.username = fire.auth.currentUser.displayName;
  },
  setUserID(state) {
    state.user_id = fire.auth.currentUser.uid;
  },
  addChat(state, chat) {
    state.user_chats.push({ name: chat.name, id: chat.id });
  }
};

const actions = {
  changeDisplayName({ commit }, name) {
    fire.auth.currentUser.updateProfile({ displayName: name }).then(
      () => {
        commit("setDisplayName");
      },
      err => {
        alert("Oops " + err.message);
      }
    );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
