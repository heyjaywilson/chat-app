import fire from "../config";

var date = new Date();
var utc = date.getTime();
const conversations = fire.db.collection("conversations");

const state = {
  allChats: [],
  /** ALL CHATS ARRAY
   * {
   *   name: chat_name,
   *   id: document_id
   * }
   */
  currentChat: [], // [chat_name, chat_id]
  //--------------------------------------------------
  //--------------------------------------------------
  allMessages: []
  /**
   * {time: time_msg_sent,
   *  messge: msg_content
   *  user: user_that_sent_msg}
   */
};

const getters = {
  showAll: state => state.allChats,
  showCurrentChat: state => state.currentChat,
  showAllMessages: state => state.allMessages
};

const mutations = {
  emptyChats(state) {
    state.allChats = [];
  },
  updateAllChats(state, chatInfo) {
    state.allChats.push({ name: chatInfo.name, id: chatInfo.id });
  },
  setInitialChat(state) {
    state.currentChat = [state.allChats[0].name, state.allChats[0].id];
    console.log(state.allChats);
  },
  changeChat(state, chatInfo) {
    state.currentChat = [chatInfo.name, chatInfo.id];
  },
  addMessage(state, info) {
    state.allMessages.push({
      time: utc,
      message: info.message,
      user: info.user
    });
  },
  emptyMessages(state) {
    state.allMessages = [];
  }
};

const actions = {
  addChat({ commit }, c_name) {
    conversations
      .add({
        chat_name: c_name
      })
      .then(function(docRef) {
        commit("updateAllChats", { name: c_name, id: docRef.id });
      })
      .catch(function(err) {
        console.error("Error adding document ", err);
      });
  },
  getChatsFromFirebase({ commit }) {
    commit("emptyChats");
    conversations.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        commit("updateAllChats", { name: doc.data().chat_name, id: doc.id });
      });
    });
  },
  sendMessage({ commit }, info) {
    conversations
      .doc(info.id)
      .collection("messages")
      .add({
        time: utc,
        message: info.message,
        user: info.user
      })
      .then(
        () => {
          console.log("message sent");
        },
        err => {
          alert("Oops. " + err.message);
        }
      );
  },
  getAllMessages({ commit }, info) {
    var ref = conversations.doc(info.id).collection("messages");

    ref
      .where("time", ">", 0)
      .orderBy("time")
      .onSnapshot(querySnapshot => {
        commit("emptyMessages");
        let count = 0;
        querySnapshot.forEach(doc => {
          console.log({
            id: doc.id,
            message: doc.data().message,
            user: doc.data().user,
            msgid: count
          });
          commit("addMessage", {
            id: doc.id,
            message: doc.data().message,
            user: doc.data().user,
            msgid: count
          });
          count += 1;
        });
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
