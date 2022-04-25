<!--
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-25 21:32:40
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-25 22:38:27
-->
<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <Item class="aw-item" v-for="model in model.children" :model="model" :key="model.index"> </Item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'aw-tree',
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length
    }
  },
  data() {
    return {
      open: false,
      model: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [{ name: 'hello' }, { name: 'wat' }]
              },
              { name: 'hello' },
              {
                name: 'child folder',
                children: [{ name: 'hello' }, { name: 'wat' }]
              }
            ]
          }
        ]
      }
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
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style></style>
