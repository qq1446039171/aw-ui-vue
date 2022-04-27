<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" >
      {{ model.label }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul  v-if="isFolder && open">
      <!-- <TreeItem class="item" v-for="model in model.children" :key="model.index" :model="model"> </TreeItem> -->
      <TreeItem class="item" v-for="model1 in model.children" :key="model1.index" :model="model1"> </TreeItem>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',

  props: {
    model: Object
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder () {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle () {
      console.log(this.isFolder)
      if (this.isFolder) {
        this.open = !this.open
      }
    },
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
