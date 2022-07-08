<template>
  <div class="home">
    <img alt="Caoiva Flag" src="@/assets/CaoivaFlag.jpg">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home img {
  width: 90%;
  height: auto;
}
</style>
