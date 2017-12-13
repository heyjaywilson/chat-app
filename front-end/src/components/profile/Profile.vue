<template>
  <div class="m">
    <h1>{{showName}}'s Profile</h1>
    <p>This route works</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters([
      'showName'
    ])
  },
  methods:{
    ...mapMutations([
      'setDisplayName'
    ])
  },
  created: function(){
    this.setDisplayName();
  }
}
</script>
