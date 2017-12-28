<template>
<div id="app" class="grid">
  <header class="h">
    <img class="h-img" src="./assets/logo.png">
  </header>
  <router-view/>
  <SideMenu></SideMenu>
</div>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
  name: 'app',
  components: {
    'SideMenu': SideMenu
  }
}
</script>

<style>
@import './assets/styles.css';
</style>
