<template>
  <el-form-item :label="widget.name" :prop="widget.model">
    <template v-if="widget.type == 'input'">
      <el-input
        type="text"
        v-model="dataModel"
        :disabled="widget.options.disabled"
        :placeholder="widget.options.placeholder"
        :style="{ width: widget.options.width }"
        :maxlength="widget.options.maxlength"
        :show-word-limit="widget.options.showWordLimit"
      ></el-input>
    </template>
    <template v-if="widget.type == 'select'">
      <el-select
        v-model="dataModel"
        :disabled="widget.options.disabled"
        :multiple="widget.options.multiple"
        :clearable="widget.options.clearable"
        :placeholder="widget.options.placeholder"
        :style="{ width: widget.options.width }"
        :filterable="widget.options.filterable"
      >
        <el-option
          v-for="item in widget.options.remote ? widget.options.remoteOptions : widget.options.options"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>
    </template>
  </el-form-item>
</template>

<script>
export default {
  props: ['widget', 'models', 'remote'],
  watch: {
    models: {
      deep: true,
      handler(val) {
        this.dataModel = val[this.widget.model]
      }
    },
    dataModel: {
      deep: true,
      handler(val) {
        this.models[this.widget.model] = val
        this.$emit('update:models', {
          ...this.models,
          [this.widget.model]: val
        })
        this.$emit('input-change', val, this.widget.model)
      }
    }
  },
  computed: {},
  created() {
    // 假如是远端请求 走这里请求
    if (this.widget.options.remote && this.remote[this.widget.options.remoteFunc]) {
      console.log(this.remote[this.widget.options.remoteFunc])
      this.remote[this.widget.options.remoteFunc]((data) => {
        // this.widget.options.remoteOptions = data
        this.widget.options.remoteOptions = data.map((item) => {
          return {
            value: item[this.widget.options.props.value],
            label: item[this.widget.options.props.label],
            children: item[this.widget.options.props.children]
          }
        })
      })
    }
  },
  data() {
    return {
      dataModel: this.models[this.widget.model]
    }
  },
 

  methods: {}
}
</script>
