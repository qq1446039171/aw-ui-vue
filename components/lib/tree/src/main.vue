<template>
  <ul>
    <TreeItem  v-for="model1 in model" :key="model1.index" :model="model1"> </TreeItem>
  </ul>
</template>

<script>
import TreeItem from './TreeItem'
export default {
  name: 'aw-tree',
  components: {
    TreeItem
  },
  props: {
    model: Array
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle() {
      console.log(this.isFolder)
      if (this.isFolder) {
        this.open = !this.open
      }
    }
    // changeType () {
    //   if (!this.isFolder) {
    //     this.$set(this.model, 'children', [])
    //     this.addChild()
    //     this.open = true
    //   }
    // },
    // addChild: function () {
    //   this.model.children.push({
    //     name: 'new stuff'
    //   })
    // }
  }
}
</script>

<style></style>
