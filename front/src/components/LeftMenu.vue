<template>
  <div class="left-menu" :class="!this.menuActive && 'no-left-menu'">
    <div class="contents">
      <div class="logo">
        <img alt="Warden logo" src="@/assets/Warden.png">
      </div>
      <router-link v-for="(item, index) in items" :key="index" class="option" :to="item.path" :class="{active: item.path === current}">
        <button >
          <div class="svg">
            <component :is="item['svg']" :key="index" />
          </div>
          <div v-if="this.menuActive" class="menu-label">{{ item.label }}</div>
        </button>
      </router-link>
      <button @click="toggleMenu">
        <div class="svg collapse-btn" >
          <CollapseIcon/>
        </div>
        <div v-if="this.menuActive" class="menu-label">Collapse</div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HomeIcon from '@/assets/svg/HomeIcon.vue'
import TaggedIcon from '@/assets/svg/TaggedIcon.vue'
import ContactIcon from '@/assets/svg/ContactIcon.vue'
import CollapseIcon from '@/assets/svg/CollapseIcon.vue'

@Options({
  props: {},
  components: {
    CollapseIcon
  },
  data: () => ({
    menuActive: true,
    items: [
      {
        label: 'Home',
        svg: HomeIcon,
        path: '/'
      },
      {
        label: 'Map',
        svg: TaggedIcon,
        path: '/map'
      },
      {
        label: 'Missions',
        svg: TaggedIcon,
        path: '/missions'
      },
      {
        label: 'Orders',
        svg: TaggedIcon,
        path: '/orders'
      },
      {
        label: 'Pipeline',
        svg: TaggedIcon,
        path: '/pipeline'
      },
      {
        label: 'Stockpiles',
        svg: TaggedIcon,
        path: '/stocks'
      },
      {
        label: 'Comms',
        svg: ContactIcon,
        path: '/comms'
      }
    ]
  }),
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu')
      this.menuActive = !this.menuActive
    }
  }
})
export default class LeftMenu extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ButtonRadius: 14px;

.left-menu {
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: #0B152C;
  overflow-y: auto;

  transition: ease-in-out 0.3s;
  height: 100vh;
  width: 258px
}
.no-left-menu{
  width: 6vw;
  min-width: 80px;
}

.left-menu::-webkit-scrollbar {
  display: none;
}

.no-left-menu .option {
  width: 85%;
}

.no-left-menu .svg,
.no-left-menu a {
  margin: 0 auto;
}

.contents {
  margin: 0 24px;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}
.contents a {
  text-decoration: none;
}
.logo {
  margin: 20px auto;
  width: calc(100% - 40px);
}

.logo img {
  width: 100%;
  height: auto;
}

button {
  height: 58px;
  width: 100%;
  color: #C0C5CE;
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: $ButtonRadius;
  border: 1px solid #0B152C;
  padding: 1rem;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  transition: ease-out 0.2s;
}
.option button:hover {
  border: 1px solid #078286;
  cursor: pointer;
}

.no-left-menu button {
  justify-content: center;
}

.collapse-btn{
  transition: ease-in-out 0.3s;
}
.no-left-menu .collapse-btn {
  transform: rotate(180deg);
}

.svg {
  width: 22px;
  display: flex;
  align-items: center;
}
.svg > * {
  width: 100%;
}

.menu-label{
  text-align: left;
}

.active {
  background: #078286;
  color: #FFFFFF;
  border-radius: $ButtonRadius;
}

.active > * > .menu-label {
  color: #FFFFFF;

}
</style>
