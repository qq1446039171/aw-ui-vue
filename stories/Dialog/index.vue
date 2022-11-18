<template>
  <div
    class="aw-dialog"
    :class="theme == 'dark' ? 'aw-dialog-dark' : ''"
    :style="{ width: width }"
    v-show="visible"
    v-move="draggable ? '.aw-dialog-header' : ''"
  >
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
  methods: {
    hide() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>

