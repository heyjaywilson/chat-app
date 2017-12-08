<template>
  <div class="s">
    <h2>Menu</h2>
    <nav>
      <router-link v-for="item in links">item</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      links: [
        'Profile', 'All Chats', 'Settings', 'Log out'
        ]
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

