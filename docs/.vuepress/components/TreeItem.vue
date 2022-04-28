<template>
  <li class="aw-tree-item">
    <div :class="isFolder ? 'aw-tree-folder' : ''" @click="toggle">
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
      <TreeItem v-for="treeItem in treeItem.children" :key="treeItem.index" :treeItem="treeItem" :treeType="treeType">
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
    toggle() {
      console.log(this.isFolder)
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style lang="scss" scope>
.aw-card {
  width: 270px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
  padding-bottom: 8px;

  &-img {
    width: 100%;
    height: 152px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-summary {
    padding: 8px;
    text-align: left;
    font-size: 14px;
  }
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
  li {
    margin: 8px 0;
  }
}
</style>
