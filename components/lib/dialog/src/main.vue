<template>
  <div
    class="aw-dialog"
    :class="theme == 'dark' ? 'aw-dialog-dark' : ''"
    :style="style"
    v-show="visible"
    v-move="draggable ? '.aw-dialog-header' : ''"
  >
    <!-- :style="{ width: width, marginLeft: calc(~width / 2) }" -->
    <div class="aw-dialog-header">
      <div class="clearfix" :style="{ justifyContent: center ? 'center' : '' }">
        <div class="tab">{{ title }}</div>
        <i class="el-icon-close aw-dialog-close" @click="hide"></i>
      </div>
      <slot name="header"></slot>
    </div>
    <div class="aw-dialog-body">
      <slot></slot>
    </div>
    <div class="aw-dialog-footer" :style="{ justifyContent: center ? 'center' : '' }">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aw-dialog',
  props: {
    visible: Boolean,
    title: {
      type: String,
      default: '弹窗'
    },
    theme: {
      type: String,
      default: ''
    },
    draggable: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '30%'
    }
  },
  computed: {
    style() {
      let style = {}
      style.width = this.width
      let num = this.width.match(/^\d+/)
      let char = this.width.match(/[^\d]+$/)
      style.marginLeft = -num / 2 + char 
      return style
    }
  },
  methods: {
    hide() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style></style>
