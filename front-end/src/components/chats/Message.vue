<template lang="html">
  <div class="message">
    <p>{{sender}}:<br>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message', 'sender']
}
</script>

<style lang="css">
.message{
  text-align: left;
}
</style>
