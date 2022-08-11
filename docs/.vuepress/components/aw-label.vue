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

<style>
.aw-label-text {
  font-size: 14px;
  margin: 0 10px 0 20px;
  text-align: end;
  display: inline-block;
}
.aw-label-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.aw-label-required::before {
  content: '* ';
  color: red;
}
</style>
