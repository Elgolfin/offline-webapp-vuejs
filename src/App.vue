<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/online-state">Online State</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* global Offline */
// @ is an alias to /src
import OnlineState from '@/components/OnlineState.vue'

export default {
  name: 'online-state',
  created: function () {
    let vm = this
    Offline.on('confirmed-down', function () {
      vm.$store.dispatch('switchState')
    });

    Offline.on('confirmed-up', function () {
      vm.$store.dispatch('switchState')
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
