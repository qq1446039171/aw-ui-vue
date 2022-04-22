<template>
  <button class="aw-button" :class="['aw-button-' + type, 'aw-button-' + size]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'aw-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
