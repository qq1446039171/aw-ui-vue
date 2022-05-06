<template>
  <ul>
    <TreeItem
      v-for="treeItem in treeData"
      :key="treeItem.index"
      :treeItem="treeItem"
      :treeType="type"
      @node-click="nodeClick"
    >
    </TreeItem>
  </ul>
</template>

<script>
import TreeItem from './TreeItem.vue'
export default {
  name: 'aw-tree',
  components: {
    TreeItem
  },
  props: {
    treeData: Array,
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    nodeClick(data) {
      this.$emit('node-click', data)
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
