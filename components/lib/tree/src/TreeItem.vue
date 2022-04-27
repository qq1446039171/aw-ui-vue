<template>
  <li class="aw-tree-item">
    <div :class="isFolder ? 'aw-tree-folder' : ''" @click="toggle">
      <span v-if="isFolder">
        <i class="aw-icon icon-arrow-right" v-if="!open"></i>
        <i class="aw-icon icon-arrow-down" v-else></i>
      </span>
      <span class="aw-tree-title"> {{ model.label }}</span>
    </div>
    <ul v-if="isFolder && open" class="aw-tree-animation">
      <TreeItem v-for="model1 in model.children" :key="model1.index" :model="model1"> </TreeItem>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',

  props: {
    model: Object
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
