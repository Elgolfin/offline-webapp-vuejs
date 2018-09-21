<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <OnlineState state="Online"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OnlineState from '@/components/OnlineState.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    OnlineState
  }
}
</script>
