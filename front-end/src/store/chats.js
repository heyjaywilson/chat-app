import fire from '../config'

const state = {
  // Chats
  allChats: [],
  userChats: [],
  currentChat: [],
  //message
  allMessages: []
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
                      id: doc.id
                    })
                    console.log(doc.data().chat_name)
                })
                state.currentChat = [state.allChats[0].name, state.allChats[0].id]
            })
  },
  setInitialChat(state){
    state.currentChat = [state.allChats[0].name, state.allChats[0].id]
    console.log(state.allChats)
  },
  addChat(state, name) {
    fire.db.collection('conversations').add({
      chat_name: name
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(function(error) {
        console.error("Error adding document: ", error)
      })
    state.allChats.push(name)
    state.userChats.push(name)
  },
  changeChat(state, chatInfo) {
    this.currentChat = [chatInfo.name, chatInfo.id]
  },
  sendMessage(state,info) {
    console.log(state.currentChat[1])
    console.log(info)
    fire.db.collection('conversations').doc(info.id).collection('messages').add({message: info.message, user: info.user})
  },
  getAllMessages(state,info) {
    fire.db.collection('conversations').doc(info.id).collection('messages').where('message','>','')
      .onSnapshot(function(querySnapshot) {
        var count=0;
        querySnapshot.forEach(function(doc) {
          state.allMessages.push({message: doc.data().message, sender: doc.data().user, id: count})
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
