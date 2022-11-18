<template>
  <span :style="`width:${width};`" class="aw-label-text aw-label-ellipsis" :class="{ 'aw-label-required': required }">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'aw-label',
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
