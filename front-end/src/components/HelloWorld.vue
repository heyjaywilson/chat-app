<template>
  <div class="hello m">
    <h1>Maegan Wilson</h1>
  </div>
</template>

<script>
import fire from '../config'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HI'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
