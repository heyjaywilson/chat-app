<template>
  <div class="chats m">
    <h1>All chats that are public</h1>
    <ul>
      <li v-for="chat in showAll">{{chat}}</li>
    </ul>
    <h1>Create a new chat</h1>
    <label>Chat name</label><input type="text" v-model="chatName"><br>
    <button type="button" v-on:click="addNewChat">Add Chat</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AllChats',
  computed: {
    ...mapGetters([
      'showName', 'showAll', 'showName'
    ])
  },
  data() {
    return {
      chatName: ''
    }
  },
  methods: {
    ...mapMutations([
      'getAllChats', 'addChat'
    ]),
    addNewChat: function(){
      this.addChat(this.chatName)
    }
  },
  created: function(){
    this.getAllChats();
  }
}
</script>

<style>
ul {
  text-align: left
}
</style>
