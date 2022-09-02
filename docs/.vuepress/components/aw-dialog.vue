<template>
  <div
    class="aw-dialog"
    :class="theme == 'dark' ? 'aw-dialog-dark' : ''"
    v-show="visible"
    v-move="draggable ? '.aw-dialog-header' : ''"
  >
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
    title: {
      type: String,
      default: '弹窗'
    },
    theme: {
      type: String,
      default: ''
    },
    draggable: {
      type: Boolean,
      default: true
    },
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

<style lang="scss">
// 卡片 可拖拽的
.aw-dialog {
  // 固定了弹窗的位置
  position: fixed;
  left: 40vw;
  top: 36vh;
  z-index: 9999;
  width: 30%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .aw-dialog-header {
    // color: #fff;
    // background: #30323d;
    border: none;
    padding: 20px 20px 10px;
    position: relative;
    border-radius: 5px 5px 0 0;

    .clearfix {
      display: flex;
      justify-content: space-between;
      .tab {
        line-height: 24px;
        font-size: 18px;
        // color: #303133;
      }
      .aw-dialog-close {
        position: absolute;
        right: 20px;
        top: 20px;
        // color: #fff;
        cursor: pointer !important;
        font-size: 16px;
      }
    }
  }

  .aw-dialog-body {
    // color: #fff;
    // background: #30323d;
    padding: 30px 20px;

    /deep/ .el-tabs__nav-scroll::after {
      background-color: #202129 !important;
    }
  }

  .aw-dialog-footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    // background: #30323d;
    border-radius: 0 0 5px 5px;
  }
}

.aw-dialog-dark {
  .aw-dialog-header {
    color: #fff;
    background: #30323d;
    .aw-dialog-close {
      color: #fff;
    }
  }
  .aw-dialog-body {
    color: #fff;
    background: #30323d;
  }
  .aw-dialog-footer {
    background: #30323d;
  }
}
</style>
