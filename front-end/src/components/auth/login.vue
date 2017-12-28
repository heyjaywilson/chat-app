<template>
<div class="login m">
  <h1>Log In</h1>
  <input class="auth" type="text" placeholder="Email" v-model="email"><br>

  <input class="auth" type="password" placeholder="Password" v-model="password"><br>

  <input type="checkbox" v-model="persist"><label> Check this box if you don't want to log off by closing a window </label><br>

  <button v-on:click="login" class="btnAuth">Login</button><br>
  <button class="btnGoogle" v-on:click="google">Login with Google</button>
  <p>You don't have an account? You can
    <router-link to="/sign-up">create one</router-link>
  </p>
</div>
</template>

<script>
import firebase from 'firebase'
import {
  mapMutations,
  mapActions
} from 'vuex'

var provider = new firebase.auth.GoogleAuthProvider();

export default {
  name: 'Login',
  data: function() {
    return {
      email: '',
      password: '',
      persist: false
    }
  },
  methods: {
    ...mapActions([
      'getChatsFromFirebase'
    ]),
    ...mapMutations([
      'setDisplayName'
    ]),
    google: function() {
      console.log(this.persist)

      if (this.persist) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
          firebase.auth().signInWithPopup(provider).then(
            (user) => {
              this.setDisplayName()
              this.getChatsFromFirebase()
              this.$router.replace('profile')
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          )
        )
      } else {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
          firebase.auth().signInWithPopup(provider).then(
            (user) => {
              this.setDisplayName()
              this.getChatsFromFirebase()
              this.$router.replace('profile')
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          )
        )
      }
    },

    login: function() {
      if (this.persist) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              this.setDisplayName()
              this.getChatsFromFirebase()
              this.$router.replace('profile')
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          ))
      } else {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              this.setDisplayName()
              this.getChatsFromFirebase()
              this.$router.replace('profile')
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          ))
      }
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 40px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
