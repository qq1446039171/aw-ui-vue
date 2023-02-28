<template>
  <div class="aw-split-pane-wrapper" ref="AwSplit">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent }">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      @mousedown="handleMousedown"
      :style="{ left: triggerLeft, width: `${triggerWidth}px` }"
    >
      <!-- 中间分割按钮 -->
      <div class="pane-trigger-con__button">
        <div v-for="i in 5" :key="i"></div>
      </div>
    </div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent }">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'aw-split',
  props: {
    //分割值
    value: {
      type: Number,
      default: 0.5
    },
    //按钮宽度
    triggerWidth: {
      type: Number,
      default: 6
    },
    //最大分割值/最小分割值
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    //计算左边面板的宽度
    leftOffsetPercent() {
      return `${this.value * 100}%`
    },
    //右边面板的marginleft
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    //鼠标点击  鼠标移动事件  计算偏差
    handleMousedown(event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    //鼠标移动事件 计算移动距离
    handleMousemove(event) {
      if (!this.canMove) return
      const outerRect = this.$refs.AwSplit.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup() {
      this.canMove = false
    }
  }
}
</script>
