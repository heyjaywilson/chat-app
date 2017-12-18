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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: "s s h h h h h h h" "s s m m m m m m m";
}

.h {
  grid-area: h;
}

.h-img {
  height: 100px;
}

.m {
  grid-area: m;
}
</style>
