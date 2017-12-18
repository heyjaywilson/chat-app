<template>
  <div class="login m">
      <h3>Log In</h3>
      <input type="text" placeholder="Email" v-model="email"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button v-on:click="login">Connect</button><button v-on:click="google">Login with Google</button>
      <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
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
        password: ''
      }
  },
  methods: {
    google: function() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
        firebase.auth().signInWithPopup(provider).then(
          (user)=> {
              this.$router.replace('profile')
          },
          (err) => {
            alert('Oops. '+ err.message)
          }
        )
      )
    },
    login: function() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          if (user == null) {
            this.$router.replace('newuser')
          }
          else {
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
</script>

<style scoped>
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
