<template>
  <li class="aw-tree-item">
    <div :class="isFolder ? 'aw-tree-folder' : ''" @click="toggle(treeItem)">
      <span v-if="isFolder">
        <i class="aw-icon" :class="treeType == 'file' ? 'icon-plus2' : 'icon-arrow-right'" v-if="!open"></i>
        <i class="aw-icon" :class="treeType == 'file' ? 'icon-ban' : 'icon-arrow-down'" v-else></i>
      </span>
      <span class="aw-tree-title">
        <template v-if="treeType == 'file' && !isFolder">
          <i class="aw-icon icon-label"></i>
        </template>
        <template v-if="treeType != 'file' && !isFolder">
          <span style="width: 16px; display: inline-block"></span>
        </template>
        {{ treeItem.label }}
      </span>
    </div>
    <ul v-if="isFolder && open">
      <TreeItem
        v-for="treeItem in treeItem.children"
        :key="treeItem.index"
        :treeItem="treeItem"
        :treeType="treeType"
        @node-click="nodeClick"
      >
      </TreeItem>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',

  props: {
    treeItem: Object,
    treeType: String
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    isFolder() {
      return this.treeItem.children && this.treeItem.children.length
    }
  },
  methods: {
    toggle(data) {
      if (this.isFolder) {
        this.open = !this.open
      }
      this.$emit('node-click', data)
    },
    nodeClick(data) {
      this.$emit('node-click', data)
    }
  }
}
</script>

<style></style>
