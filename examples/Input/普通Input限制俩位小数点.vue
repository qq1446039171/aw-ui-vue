<template>
  <div id="app">
    <!-- 只允许输入小数点后俩位 -->
    <el-input v-model="value" @input="inputChange"></el-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: 1
    }
  },
  methods: {
    inputChange() {
      let value = this.value.toString()

      if (isNaN(value)) value = value.slice(0, value.length - 1)

      if (value.indexOf('.') > 0) value = value.slice(0, value.indexOf('.') + 3)

      // 字符串根据.切割成数组
      if (value.split('.')[1]) this.value = parseFloat(value)

      this.value = value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 20px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
</style>
