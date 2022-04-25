<!--
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-25 21:32:40
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-25 22:32:28
-->
<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <!-- <item class="item" v-for="item in model.children" :model="item" :key="item.index"> </item> -->
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'aw-tree-item',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length
    }
  },
  data() {
    return {
      open: false,
     
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.$set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild() {
      // this.model.children.push({
      //   name: 'new stuff'
      // })
    }
  }
}
</script>

<style></style>
