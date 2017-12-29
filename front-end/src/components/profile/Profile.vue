<template>
<div class="m">
  <h1>{{showName}}'s Profile</h1>
  <section>
    <h2>My chats</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["showName"])
  },
  methods: {
    ...mapMutations(["setDisplayName", "setUserID"])
  },

  created: function() {
    this.setDisplayName();
    this.setUserID();
  }
};
</script>
