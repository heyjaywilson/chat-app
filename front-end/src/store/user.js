import fire from "../config";

//timing
var date = new Date();
var utc = date.getTime();

// easy refs
const conversations = fire.db.collection("conversations");
const users = fire.db.collection("users");

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
  addUserChat(state, chat) {
    state.user_chats.push({ name: chat.name, id: chat.id });
  }
};

const actions = {
  updateDBName() {
    console.log(state.user_id);
    users.doc(state.user_id).update({
      name: state.username
    });
  },
  changeDisplayName({ commit }, name) {
    fire.auth.currentUser.updateProfile({ displayName: name }).then(
      () => {
        commit("setDisplayName");
      },
      err => {
        alert("Oops " + err.message);
      }
    );
  },
  addUserToDB() {
    fire.db.collection("users").add({
      name: state.username,
      user_id: state.user_id,
      timeStamp: utc
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
