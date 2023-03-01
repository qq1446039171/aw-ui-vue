<template>
  <div class="aw-split-pane" ref="splitPane" :class="direction" :style="{ flexDirection: direction }">
    <div class="aw-pane aw-pane-left" :style="lengthType + ':' + paneLengthValue">
      <slot name="left"></slot>
    </div>
    <div
      class="aw-pane-trigger"
      :style="{ [`${lengthType}`]: triggerLengthValue, cursor: cursor }"
      @mousedown="handleMouseDown"
    >
      <!-- 中间分割按钮 -->
      <div class="aw-pane-trigger-button">
        <div v-for="i in 5" :key="i"></div>
      </div>
    </div>
    <div class="aw-pane aw-pane-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'aw-split',
  props: {
    direction: {
      type: String,
      default: 'row' // column
    },
    min: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 90
    },
    paneLengthPercent: {
      // 区域1宽度 (%)
      type: Number,
      default: 50
    },
    triggerLength: {
      // 滑动器宽度 （px）
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      triggerLeftOffset: 0 // 鼠标距滑动器左(顶)侧偏移量
    }
  },
  computed: {
    lengthType() {
      return this.direction === 'row' ? 'width' : 'height'
    },
    paneLengthValue() {
      return `calc(${this.paneLengthPercent}% - ${this.triggerLength / 2 + 'px'})`
    },
    triggerLengthValue() {
      return this.triggerLength + 'px'
    },
    cursor() {
      return this.direction === 'row' ? 'col-resize' : 'row-resize'
    }
  },
  methods: {
    handleMouseDown(e) {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)

      let div = document.querySelector('.aw-split-pane')
      div.style.cursor = this.cursor

      if (this.direction === 'row') {
        this.triggerLeftOffset = e.pageX - e.srcElement.getBoundingClientRect().left
      } else {
        this.triggerLeftOffset = e.pageY - e.srcElement.getBoundingClientRect().top
      }
    },

    //鼠标移动事件 计算移动距离
    handleMouseMove(e) {
      this.debounce(this.move(e), 1500)
    },
    move(e) {
      const clientRect = this.$refs.splitPane.getBoundingClientRect()
      let paneLengthPercent = 0
      if (this.direction === 'row') {
        const offset = e.pageX - clientRect.left - this.triggerLeftOffset + this.triggerLength / 2
        paneLengthPercent = (offset / clientRect.width) * 100
      } else {
        const offset = e.pageY - clientRect.top - this.triggerLeftOffset + this.triggerLength / 2
        paneLengthPercent = (offset / clientRect.height) * 100
      }
      if (paneLengthPercent < this.min) {
        paneLengthPercent = this.min
      }
      if (paneLengthPercent > this.max) {
        paneLengthPercent = this.max
      }
      this.$emit('update:paneLengthPercent', paneLengthPercent)
    },
    // 防抖包装函数
    debounce(f, delay = 500, immediate = true) {
      let waiting = false,
        clock
      return function () {
        if (!waiting) {
          waiting = true
          immediate && f.apply(this, arguments)
        }
        clearTimeout(clock)
        clock = setTimeout(() => {
          waiting = false
          !immediate && f.apply(this, arguments)
        }, delay)
      }
    },
    handleMouseUp() {
      let div = document.querySelector('.aw-split-pane')
      div.style.cursor = 'default'
      document.removeEventListener('mousemove', this.handleMouseMove)
    }
  }
}
</script>
