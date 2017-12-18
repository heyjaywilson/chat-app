<template>
<div class="sign-up m">
  <h1>Create a new account</h1>
  <input class="auth" type="text" placeholder="Email" v-model="email"><br>
  <input class="auth" type="text" placeholder="Password" v-model="password"><br>
  <button v-on:click="signUp" class="btnAuth">Sign Up</button><br>
  <button class="btnGoogle" v-on:click="google">Sign Up with Google</button>
  <span><router-link to="/login">or go back to login</router-link>.</span>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('newuser')
        },
        (err) => {
          alert('Oops. ' + err.message);
        }
      );
    },
    google: function() {
      firebase.auth().signInWithPopup(provider).then(
        (user) => {
          this.$router.replace('newuser')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
