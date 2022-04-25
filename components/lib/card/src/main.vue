<template>
  <div class="aw-card" :style="width ? { width: width + 'px' } : {}">
    <div class="aw-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="aw-card-summary" v-if="summary">{{summary}}</div>
    <div class="aw-card-summary" v-else>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'aw-card',
  props: {
    width: {
      type: Number, // 卡片宽度
      default: 0
    },
    imgSrc: {
      type: String, // 卡片图片资源地址
      default: ''
    },
    imgHeight: {
      type: Number, // 卡片图片高度
      default: 0
    },
    summary: {
      type: String, // 卡片摘要
      default: ''
    }
  }
}
</script>

<style></style>
