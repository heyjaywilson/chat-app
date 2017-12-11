<template>
  <div class="m">
    <h2>Welcome!</h2>
    <p>Please set your username below!</p>
    <p>
      <label>Username: </label><input type="text" v-model="username">
      <button type="submit" v-on:click="save">Save username</button>
    </p>
  </div>
</template>

<script>
import fire from '../../config'

export default {
  name: 'NewUser',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    save: function() {
      /** 
       * Adds to database
       */
      fire.db.collection("users").doc(this.username).set(
        {
          name: this.username
        }
      ).then(
        () => {console.log('Added data successfully')}
      ).catch(
        (err) => {alert('Oops. '+err.message)}
      )

      //updates auth
      fire.auth.currentUser.updateProfile({displayName:this.username}).then(
        ()=>{
          console.log('username added to auth')
          this.$router.replace('profile')
        },
        // show error
        (err)=>{
          alert('Oops. '+ err.message)
        }
      );
    }
  }
}
</script>

