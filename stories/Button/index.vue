<template>
  <button
    class="aw-button"
    :class="['aw-button-' + type, 'aw-button-' + size, round ? 'is-round' : '', disabled ? 'is-disabled' : '']"
  >
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
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
