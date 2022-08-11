<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    v-model="$attrs['value']"
    @input="$attrs['type'] == 'float' ? floatChange() : change(arguments[0])"
    @change="$attrs['type'] == 'float' ? conversion() : change(arguments[0])"
    :style="{ width: width + 'px' }"
  ></el-input>
</template>

<script>
export default {
  name: 'aw-input',
  props: {
    width: {
      type: Number,
      default: 150
    },
    floatNum: {
      type: Number,
      default: 2
    }
  },
  methods: {
    change(val) {
      if (this.$attrs['max'] || this.$attrs['min']) {
        let maxNum = this.$attrs['max'] ? this.$attrs['max'] : 99999999999
        let minNum = this.$attrs['min'] ? this.$attrs['min'] : 1
        //转换数字类型
        this.$attrs['value'] = Number(val)
        //  如果输入值不是数值了，则不做处理
        if (!this.$attrs['value']) {
          return
        }
        //重新渲染
        this.$nextTick(() => {
          //比较输入的值和最大值，返回小的
          let num = Math.min(Number(val), maxNum)
          //输入负值的情况下， = 0（可根据实际需求更该）
          if (num <= minNum) {
            this.$attrs['value'] = minNum

            this.$parent[this.$vnode.data.model.expression] = minNum
          } else {
            //反之
            this.$attrs['value'] = num

            this.$parent[this.$vnode.data.model.expression] = num
          }
        })
      }
    },
    floatChange() {
      let value = this.$attrs['value'].toString()

      if (isNaN(value)) value = value.slice(0, value.length - 1)

      if (value.indexOf('.') > 0) value = value.slice(0, value.indexOf('.') + this.floatNum + 1)
      // 字符串根据.切割成数组
      this.$nextTick(() => {
        this.$parent[this.$vnode.data.model.expression] = value
      })
    },
    //  类型转化
    conversion() {
      this.$parent[this.$vnode.data.model.expression] = parseFloat(this.$parent[this.$vnode.data.model.expression])
    }
  }
}
</script>

<style></style>
