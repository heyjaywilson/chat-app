<template>
<div class="chats m">
  <!--list of chats and the ability to add new chats-->
  <section class="list">
    <!-- CREATE NEW CHAT -->
    <h1>create new chat</h1>
    <label>Chat name: </label><input type="text" v-model="chatName" class="newChat"><br>
    <button type="button" v-on:click="addNewChat">Add Chat</button>

    <!-- LIST OF CHATS -->
    <h1>all public chats</h1>
    <ul>
      <li v-for="chat in showAll">{{chat.name}}</li>
    </ul>
  </section>

  <!--Chat display-->
  <section class="msg">
    <button type="button" name="button" v-on:click="getMessages">Get chats</button>

    <h1 class="chatname">{{showCurrentChat[0]}}</h1>
    <input type="text" v-model="message" class="messageBox"><button type="button" v-on:click="send">Send</button>
    <Message v-for="mess in showAllMessages" :key="mess.id" :message="mess.message" :sender="mess.sender"></Message>
  </section>
</div>
</template>

<script>
import Message from './Message'

import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'AllChats',
  components: {
    'Message': Message
  },
  computed: {
    ...mapGetters([
      'showName', 'showAll', 'showCurrentChat',
      'showAllMessages'
    ])
  },
  data() {
    return {
      chatName: '',
      message: ''
    }
  },
  methods: {
    ...mapMutations([
      'getAllChats', 'addChat', 'emptyChats',
      'setInitialChat', 'changeChat', 'sendMessage',
      'setDisplayName', 'getAllMessages'
    ]),
    addNewChat: function() {
      this.addChat(this.chatName)
    },
    send: function() {
      console.log(this.showName)
      this.sendMessage({
        id: this.showCurrentChat[1],
        message: this.message,
        user: this.showName
      })
      console.log('Message being sent: ' + this.message)
      this.getAllMessages({
        id: this.showCurrentChat[1]
      })
      this.message = ''
    },
    getMessages: function() {
      this.getAllMessages({
        id: this.showCurrentChat[1]
      })
    }
  }

}
</script>

<style>
ul {
  text-align: left
}

.chats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 5%;
  grid-template-areas: "l msg msg .";
  grid-column-gap: 10px;
}

.newChat {
  padding: 5px;
}

.list {
  grid-area: l;
  text-align: left;
}

.msg {
  grid-area: msg;
  border: 2px black solid;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
}

.chatname {
  color: blue;
}

.messageBox {
  width: 80%;
  padding: 5px;
  margin-right: 5px;
}
</style>
