<template>
<div class="chats m">
  <!--list of chats and the ability to add new chats-->
  <section class="newChat">
    <!-- CREATE NEW CHAT -->
    <h1>create new chat</h1>
    <label>Chat name: </label><input type="text" v-model="chatName" class="newChat"><br>
    <button type="button" v-on:click="addNewChat">Add Chat</button>
  </section>
  <section class="list">
    <!-- LIST OF CHATS -->
    <h1>all public chats</h1>
    <ul>
      <li v-for="chat in showAll" v-on:click="selectChat({name: chat.name, id: chat.id})">{{chat.name}}</li>
    </ul>
  </section>

  <!--Chat display-->
  <section class="msg">

    <h1>{{showCurrentChat[0]}}</h1>

    <Message v-for="mess in showAllMessages" :key="mess.id" :message="mess.message" :sender="mess.sender"></Message>
    <div class="messageInput">
      <input type="text" v-model="message" class="messageBox">
      <button type="button" v-on:click="send">Send</button>
    </div>
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
      this.chatName = ''
    },
    selectChat: function(info) {
      this.changeChat(info)
      this.getAllMessages({
        id: this.showCurrentChat[1]
      })
    },
    send: function() {
      console.log(this.showName)
      this.sendMessage({
        id: this.showCurrentChat[1],
        message: this.message,
        user: this.showName
      })
      console.log('Message being sent: ' + this.message)

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

h1 {
  text-align: center;
  font-size: 1.85em;
}

.msg>h1 {
  margin: 0;
  padding: 0;
}

.chats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "n msg msg l";
  grid-column-gap: 10px;
}

.newChat {
  grid-area: n;
}

.list {
  grid-area: l;
  text-align: left;
}

.list>ul>li {
  color: rgb(100, 181, 135);
  font-size: 1.25em;
}

.msg {
  grid-area: msg;
  border: 2px black solid;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
}

.messageBox {
  width: 80%;
  padding: 5px;
  margin-right: 5px;
}

.messageInput {
  display: flex;
  justify-content: space-evenly;
}
</style>
