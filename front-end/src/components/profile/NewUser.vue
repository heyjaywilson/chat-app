<template>
<div class="m">
  <h2>Welcome!</h2>
  <p>Please set your username below!</p>
  <p>
    <label>Username: </label><input type="text" v-model="username">
    <button type="submit" v-on:click="save">Save username</button>
  </p>
</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "NewUser",
  computed: {
    ...mapGetters(["showName", "showID"])
  },
  data() {
    return {
      username: ""
    };
  },
  methods: {
    ...mapActions(["addUserToDB", "changeDisplayName"]),
    ...mapMutations(["setUserID"]),
    save: function() {
      this.changeDisplayName(this.username);
      this.setUserID();
      this.addUserToDB();
      this.username = "";
      console.log(this.showID);
      this.$router.replace("profile");
    }
  }
};
</script>
