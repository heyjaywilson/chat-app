<template>
  <div class="s">
    <h2>Menu</h2>
    <nav>
      <router-link v-for="routes in links" :to="`${routes.page}`"
            v-bind:key="routes.id">{{routes.text}}<br></router-link>
      <span v-on:click="logout">Logout</span>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SideMenu',
  data() {
    return {
      links: [
        {
          id:0,
          text:'Profile',
          page:'/profile'}, 
        {
          id:1,
          text:'All Chats',
          page:'/user'},
        {
          id:2,
          text:'Settings',
          page:'/usersettings'}
        ]
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
<style scoped>
.s {
  grid-area: s;
}
ul {
  text-align: left;
}
</style>

