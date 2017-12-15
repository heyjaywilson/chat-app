import fire from '../config'

const state = {
  allChats: [],
  userChats: [],
  currentChat: []
}

const getters = {
  showAll: state => state.allChats,
  showUserAll: state => state.userChats,
  showCurrentChat: state => state.currentChat
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
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      })
    state.allChats.push(name)
    state.userChats.push(name)
  }
}

export default  {
  state,
  getters,
  mutations
}
