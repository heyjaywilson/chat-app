import fire from '../config'

const state = {
  allChats: [],
  userChats: [],
}

const getters = {
  showAll: state => state.allChats,
  showUserAll: state => state.userChats
}

const mutations = {
  emptyChats(state) {
    state.allChats = []
    state.userChats = []
  },
  getAllChats(state) {
    fire.db.collection('conversations').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    state.allChats.push(doc.data().chat_name);
                    console.log(doc.data().chat_name)
                    console.log(state.allChats)
                })
            })
    console.log('getAllChats fired')
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
