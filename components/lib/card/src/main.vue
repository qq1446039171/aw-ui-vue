<template>
  <div class="w-card" :style="width ? { width: width + 'px' } : {}">
    <div class="w-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="w-card-summary" v-if="summary">{{summary}}</div>
    <div class="w-card-summary" v-else>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'w-card',
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
