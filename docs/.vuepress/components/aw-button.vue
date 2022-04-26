<!--
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-26 10:31:48
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 10:31:49
-->
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

<style lang="scss" scope>
.aw-button + .aw-button {
  margin-left: 10px;
}
.aw-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  + .is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  + .is-round {
    border-radius: 20px;
  }
}

.aw-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.aw-button-primary.is-disabled {
  color: #fff;
  cursor: not-allowed;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.aw-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.aw-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.aw-button-warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.aw-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

.aw-button-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.aw-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.aw-button-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
