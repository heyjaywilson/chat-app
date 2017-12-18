<template>
<div class="m">
  <h1>Settings for {{showName}}</h1>
  <p>
    <label>Username: </label><input type="text" v-model="username"><br>
    <button v-on:click="save">Save changes</button>
  </p>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'Settings',
  computed: {
    ...mapGetters([
      'showName'
    ])
  },
  data() {
    return {
      // used to hold new username
      username: ''
    }
  },
  methods: {
    ...mapMutations([
      'changeDisplayName'
    ]),
    save: function() {
      this.changeDisplayName(this.username);
      this.username = ''
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
