<template lang="html">
  <div class="message">
    <p><span class="sender">{{sender}}</span>:<br>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["message", "sender"]
};
</script>

<style lang="css">
.message {
  text-align: left;
}
.sender {
  color: rgb(149, 149, 149);
}
</style>
