<template>
  <div class="m">
    <h1>Settings for {{username}}</h1>
    <p>
      <label>Username: </label><input type="text" v-model="username"><br>
      <button>Save changes</button>
    </p>
  </div>
</template>

<script>
import fire from '../../config'

export default {
  name: 'Settings',
  data() {
    return {
      username: fire.auth.currentUser.displayName
    }
  }
}
</script>

<style>

button {
  margin: 20px 0;
}
</style>
