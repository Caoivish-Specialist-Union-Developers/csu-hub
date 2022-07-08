<template>
  <LeftMenu @toggleMenu="toggleLeftMenu"/>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LeftMenu from '@/components/LeftMenu.vue'

@Options({
  components: {
    LeftMenu
  },
  data: () => ({
    leftMenuActive: true
  }),
  methods: {
    toggleLeftMenu () {
      this.leftMenuActive = !this.leftMenuActive
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #040D21;
  height: 100vh;
  width: 100vw;
  color: #C0C5CE;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  display: grid;
  grid-template-columns: 258px 1fr;
  overflow-x: hidden;
  overflow-y:hidden;
  height: 100vh;
}

.no-left-menu{
  grid-template-columns: min-content 1fr 352px !important;
}
</style>
