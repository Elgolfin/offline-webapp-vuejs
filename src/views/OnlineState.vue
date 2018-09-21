<template>
  <div class="online-state">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <OnlineState state="test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OnlineState from '@/components/OnlineState.vue'

export default {
  name: 'online-state',
  components: {
    OnlineState
  }
}
</script>