<template>
  <div class="s">
    <h2>Menu</h2>
    <nav>
      <router-link
        class="nav-item"
        v-for="routes in links"
        :to="`${routes.page}`"
        v-bind:key="routes.id">{{ routes.text }}</router-link>
      <span v-on:click="logout" class="nav-item">Logout</span>
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
          page:'/allchats'},
        {
          id:2,
          text:'Settings',
          page:'/Settings'}
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
.nav-item {
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  width: 50%;
  text-decoration: none;
}
.router-link-active {
  background-color: rgb(46, 46, 46);
  color: rgb(200,200,200);
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}
</style>
