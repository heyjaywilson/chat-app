<template>
  <div class="m">
    <h1>Settings for {{fireDisplayName}}</h1>
    <p>
      <label>Username: </label><input type="text" v-model="username"><br>
      <button v-on:click="save">Save changes</button>
    </p>
  </div>
</template>

<script>
import fire from '../../config'

export default {
  name: 'Settings',
  data() {
    return {
      fireDisplayName:fire.auth.currentUser.displayName,
      username: ''
    }
  },
  methods: {
    save: function() {
      fire.auth.currentUser.updateProfile({displayName:this.username}).then(
        ()=>{
          alert('Updates are successful')
          location.reload()
        },
        (error)=>{
          alert(error)
        }
      );
    }
  }
}
</script>

<style>

button {
  margin: 20px 0;
}
p {
  text-align: left;
}
</style>
