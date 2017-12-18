import fire from '../config'

var date = new Date();
var utc = date.getTime();

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
}

const getters = {
  showAll: state => state.allChats,
  showUserAll: state => state.userChats,
  showCurrentChat: state => state.currentChat,
  showAllMessages: state => state.allMessages
}

const mutations = {
  emptyChats(state) {
    state.allChats = []
    state.userChats = []
  },
  getAllChats(state) {
    fire.db.collection('conversations').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    state.allChats.push({
                      name: doc.data().chat_name,
                      id: doc.id,
                    })
                    console.log(doc.data().chat_name)
                })
                state.currentChat = [state.allChats[0].name, state.allChats[0].id]
            })
  },
  setInitialChat(state) {
    state.currentChat = [state.allChats[0].name, state.allChats[0].id]
    console.log(state.allChats)
  },
  addChat(state, cname) {
    fire.db.collection('conversations').add({
      chat_name: cname
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
        state.allChats.push({
          name: cname,
          id: docRef.id
        })
      })
      .catch(function(error) {
        console.error("Error adding document: ", error)
      })
  },
  changeChat(state, chatInfo) {
    state.currentChat = [chatInfo.name, chatInfo.id]
    console.log(state.currentChat)
  },
  sendMessage(state,info) {
    console.log(state.currentChat[1])
    console.log(info, + utc)
    state.allMessages.push({time:utc, message: info.message, user: info.user})
    fire.db.collection('conversations').doc(info.id).collection('messages')
        .add({
          time:utc,
          message: info.message,
          user: info.user})
  },
  getAllMessages(state,info) {
    var ref = fire.db.collection('conversations').doc(info.id).collection('messages');

    ref.where('time', '>',0).orderBy('time')
      .onSnapshot(function(querySnapshot) {
        var count=0;
        // TODO: HAS TO BE BETTER WAY THAN CLEARING STATE
        state.allMessages=[]
        querySnapshot.forEach(function(doc) {
          console.log({id: doc.id, message: doc.data().message, sender: doc.data().user, msgid: count})
          state.allMessages.push({id: doc.id, message: doc.data().message, sender: doc.data().user, msgid: count})
          count+=1
        })
        console.log(state.allMessages)
      })
  }
}

export default  {
  state,
  getters,
  mutations
}
