<template>
  <div>
    <h1>State: {{ state }} / {{ onlineState}} / {{ upppercaseState }}</h1>
  </div>
</template>

<script>
/* global Offline */

export default {
  name: 'OnlineState',
  props: {
    state: String
  },
  data () {
    return {
      onlineState: "online"
    }
  },
  computed: {
    upppercaseState: function () {
      return this.$store.state.offline || 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
