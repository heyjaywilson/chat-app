<template>
  <div class="m">
    <h1>{{username}}'s Profile</h1>
    <p>This route works</p>
  </div>
</template>

<script>
import fire from '../../config'

export default {
  name: 'Profile',
  data() {
    return {
      username: fire.auth.currentUser.displayName
    }
  }
}
</script>
