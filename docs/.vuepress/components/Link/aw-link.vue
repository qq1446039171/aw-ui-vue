<template>
  <span
    class="aw-link"
    :class="['aw-link-' + type, disabled ? 'is-disabled' : '']"
    :style="{ padding: padding + 'px' }"
    @click="goRoute"
  >
    <!-- :style="imgHeight ? { height: imgHeight + 'px' } : {}" -->
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'aw-link',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    padding: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: null
    }
  },
  methods: {
    goRoute() {
      if (this.url && this.$router && !this.disabled) {
        this.$router.push(this.url)
      }
    }
  }
}
</script>

<style lang="scss">
@import './aw-link.scss';
</style>
 