<template>
  <router-view />
</template>

<script lang="ts">
// eslint-ignore
import { Options, Vue } from 'vue-class-component'

// eslint-ignore
@Options({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c5c2c2;
  margin-top: 60px;
}
</style>
