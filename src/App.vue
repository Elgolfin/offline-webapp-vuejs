<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/debug">Debug</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* global Offline */

export default {
  name: 'online-state',
  created: function () {
    let vm = this
    // By default the application network state is set to up
    // Revert it, if for some reason the app is running in offline mode
    if (Offline.state === 'down') {
      vm.$store.dispatch('switchState')
    }

    // Hook the event related the state change
    Offline.on('down', function () {
      vm.$store.dispatch('switchState')
    });

    Offline.on('up', function () {
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
