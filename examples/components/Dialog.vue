<!-- 可新增/删除table表格页面 -->
<template>
  <aw-dialog title="​新增随访" :visible.sync="visible" width="900px">
    <aw-form :data="formColumns" :value="widgetModels" :remote="remoteList" @on-change="handleDataChange" ref="awForm">
      <template v-slot:blank="scope"> 这里是自定义的 {{ scope.model.blank }} </template>
    </aw-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="reset">重 置</el-button>
      <el-button type="primary" @click="save">保 存</el-button>
    </span>
  </aw-dialog>
</template>

<script>
import AwForm from './AwForm'
export default {
  props: {},
  data() {
    return {
      visible: false,
      list: [],
      widgetModels: {}, // 默认值
      formColumns: AwForm.Columns, // 配置项
      remoteList: AwForm.Remote // 远程请求
    }
  },
  methods: {
    show(list) {
      this.visible = true
      this.list = list
    },
    handleDataChange(field, value, data) {
      console.log(field, value, data)
    },
    save() {
      this.$refs.awForm
        .getData()
        .then((data) => {
          console.log('表单提交数据:')
          console.log(data)
        })
        .catch((e) => {
          console.log('asdasdsa')
        })
    },
    reset() {
      this.$refs.awForm.reset()
    }
  }
}
</script>
<style scoped lang="scss"></style>
