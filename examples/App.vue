<template>
  <div>
    <aw-form :data="formData" :remote="remoteList" :value="defaultData" ref="awForm">
      <template slot="footer">
        <el-button icon="el-icon-circle-close">取 消</el-button>
        <el-button icon="el-icon-circle-check" type="primary" @click="save">确 认</el-button>
      </template>
    </aw-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        list: [
          {
            type: 'input',
            name: '单行文本',
            model: 'input_1674955626000_15286',
            options: {
              width: '',
              defaultValue: '',
              required: false,
              dataType: 'string',
              placeholder: '',
              disabled: false,
              maxlength: -1,
              showWordLimit: false
            },
            rules: [{ type: 'string', message: '单行文本格式不正确' }],
            index: 0,
            labelWidth: 90
          }
        ],
        config: { labelWidth: 90, labelPosition: 'right', size: 'small', customClass: '', footer: 'center' }
      },
      defaultData: {},
      remoteList: {}
    }
  },
  methods: {
    save() {
      this.$refs.awForm
        .getData()
        .then((data) => {})
        .catch((e) => {})
    }
  }
}
</script>
