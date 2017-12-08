<template>
  <div class="s">
    <h2>Menu</h2>
    <ul>
      <li v-for="item in links">{{item}}</li>
    </ul>
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
</style>

