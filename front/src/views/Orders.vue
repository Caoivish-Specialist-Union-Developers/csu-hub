<template>
  <div>
    <p>You have entered Orders</p>
    <div>Selected: {{ selected.id }}</div>

    <select v-model="selected">
<!--      <option disabled value="">Please select one</option>-->
      <option v-for="(item, index) in t9" :key="index" :value="item">
        Item {{ item.id }}
      </option>
    </select>

    <div>
      <div>Factory</div>
      <div>Count: 1</div>
      <div>BMats: {{ 1 * selected.bmat }}</div>
      <div>RMats: {{ 1 * selected.rmat }}</div>
      <div>Count: 4</div>
      <div>BMats: {{ 4 * selected.bmat }}</div>
      <div>RMats: {{ 4 * selected.rmat }}</div>
    </div>

    <div>
      <div>MPF</div>
      <div>Count: 1</div>
      <div>BMats: {{ 1 * (selected.bmat * calculateMPF(1)) }}</div>
      <div>RMats: {{ 1 * (selected.rmat * calculateMPF(1)) }}</div>
      <div>Count: 5</div>
      <div>BMats: {{ 5 * (selected.bmat * calculateMPF(5)) }}</div>
      <div>RMats: {{ 5 * (selected.rmat * calculateMPF(5)) }}</div>
      <div>Count: 10</div>
      <div>BMats: {{ 10 * (selected.bmat * calculateMPF(10)) }}</div>
      <div>RMats: {{ 10 * (selected.rmat * calculateMPF(10)) }}</div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
  data: () => ({
    selected: {},
    t9: [
      { id: 1, bmat: 300, rmat: 0 },
      { id: 2, bmat: 0, rmat: 225 },
      { id: 3, bmat: 450, rmat: 0 },
      { id: 4, bmat: 0, rmat: 585 },
      { id: 5, bmat: 0, rmat: 525 },
      { id: 6, bmat: 0, rmat: 102 },
      { id: 7, bmat: 225, rmat: 0 },
      { id: 8, bmat: 300, rmat: 0 },
      { id: 9, bmat: 150, rmat: 0 },
      { id: 10, bmat: 300, rmat: 0 },
      { id: 11, bmat: 300, rmat: 0 },
      { id: 12, bmat: 300, rmat: 0 }
    ]
  }),
  methods: {
    calculateMPF (count: number) {
      let mod: number
      if (count <= 5) {
        mod = 90 - (5 * (count - 1))
      } else {
        mod = (350 + (count - 5) * 50) / count
      }
      return mod / 100
    },
    dead () {
      /**
       * salvage == bmat * 2
       * salvage == emat * 10
       * comps == rmat * 20
       * sulfur == hemat * 20
       */
    }
  },
  beforeMount () {
    this.selected = this.t9[0]
  }
})
export default class Orders extends Vue {}
</script>

<style scoped lang="scss">

</style>
