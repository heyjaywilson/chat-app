<template>
  <div>
    <h2>User Settings</h2>
    <label>Username</label><input type="text" placeholder="Username" v-model="username"><br>
    <button v-on:click="save">Apply changes</button>
  </div>
</template>
<script>
import firebase from 'firebase'

let user = firebase.auth().currentUser;

export default {
  name: 'UserSettings',
  data: function() {
    return {
      username: ''
    }
  },
  methods: {
    save: function(){
      user.updateProfile({displayName: this.username}).then(
          () => {
            alert("Your profile has been updated.")
            },
          (err) => {alert('Oops. '+ err.message)}
      );
    }
  }
}
</script>
