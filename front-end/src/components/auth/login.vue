<template>
<div class="login m">
  <h3>Log In</h3>
  <label>Email: </label>
  <input type="text" placeholder="Email" v-model="email"><br>

  <label>Password: </label>
  <input type="password" placeholder="Password" v-model="password"><br>

  <label>Check this box if you don't want to log off by closing a window </label>
  <input type="checkbox" v-model="persist"><br>

  <button v-on:click="login">Connect</button><button v-on:click="google">Login with Google</button>
  <p>You don't have an account? You can
    <router-link to="/sign-up">create one</router-link>
  </p>
</div>
</template>

<script>
import firebase from 'firebase'

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
    google: function() {
      console.log(this.persist)

      if (this.persist) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
          firebase.auth().signInWithPopup(provider).then(
            (user) => {
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
              if (user == null) {
                this.$router.replace('newuser')
              } else {
                this.$router.replace('profile')
              }
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          ))
      } else {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              if (user == null) {
                this.$router.replace('newuser')
              } else {
                this.$router.replace('profile')
              }
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
/*
 * TODO: Work on styling
 */

.login {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 50%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 20%;
  cursor: pointer;
}

p {
  margin-top: 40px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
