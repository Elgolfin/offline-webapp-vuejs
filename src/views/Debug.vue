<template>
  <div class="debug">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <OnlineState state="test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OnlineState from '@/components/OnlineState.vue'

export default {
  name: 'debug',
  components: {
    OnlineState
  }
}
</script>