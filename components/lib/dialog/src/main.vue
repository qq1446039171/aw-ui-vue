<template>
  <div class="aw-dialog" v-show="visible" v-move="draggable ? '.aw-dialog-header' : ''">
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
    draggable: Boolean,
    title: String,
    theme: String,
    member: {
      type: String,
      default: 'teacher'
    },
    center: {
      type: Boolean,
      default: false
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
