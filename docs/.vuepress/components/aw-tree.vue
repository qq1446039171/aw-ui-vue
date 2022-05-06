<template>
  <ul>
    <!-- <TreeItem v-for="treeItem in treeData" :key="treeItem.index" :treeItem="treeItem" :treeType="type" > </TreeItem> -->

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
import TreeItem from './TreeItem'
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
  computed: {
    isFolder() {
      return this.treeData.children && this.treeData.children.length
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

<style lang="scss" scope>
@import './icon.css';
.aw-tree {
  cursor: pointer;
}
.aw-tree-folder {
  &:hover {
    background-color: #f5f5f5;
  }
  .aw-tree-title {
    cursor: pointer;
    padding: 0 0 0 0px;
  }
}
.aw-icon {
  color: #c0c4cc;
  font-weight: 300;
  cursor: pointer;
}
ul {
  // padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
  li {
    margin: 8px 0;
  }
}
</style>
