<template>
  <el-form label-width="90px" :model="models" label-position="right">
    <el-form-item :label="name" :prop="model">
      <template v-if="type == 'input'">
        <el-input
          v-if="dataType == 'number' || dataType == 'integer' || dataType == 'float'"
          type="number"
          v-model.number="dataModel"
          :placeholder="placeholder"
          :clearable="clearable"
          :style="{ width: width }"
          :disabled="disabled"
        ></el-input>
        <el-input
          v-else
          type="text"
          v-model="dataModel"
          :disabled="disabled"
          :placeholder="placeholder"
          :clearable="clearable"
          :style="{ width: width }"
          :maxlength="maxlength"
          :show-word-limit="showWordLimit"
        ></el-input>
      </template>
      <template v-if="type == 'textarea'">
        <el-input
          type="textarea"
          :rows="5"
          v-model="dataModel"
          :autosize="autosize"
          :disabled="disabled"
          :placeholder="placeholder"
          :style="{ width: width }"
          :maxlength="maxlength"
          :clearable="clearable"
          :show-word-limit="showWordLimit"
        ></el-input>
      </template>
      <template v-if="type == 'radio'">
        <el-radio-group v-model="dataModel" :style="{ width: width }" :disabled="disabled">
          <el-radio
            :style="{ display: inline ? 'inline-block' : 'block' }"
            :label="item.value"
            v-for="(item, index) in remote ? remoteOptions : defaultOptions"
            :key="index"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </template>
      <template v-if="type == 'checkbox'">
        <el-checkbox-group v-model="dataModel" :style="{ width: width }" :disabled="disabled">
          <el-checkbox
            :style="{ display: inline ? 'inline-block' : 'block' }"
            :label="item.value"
            v-for="(item, index) in remote ? remoteOptions : defaultOptions"
            :key="index"
          >
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-if="type == 'select'">
        <el-select
          v-model="dataModel"
          :disabled="disabled"
          :multiple="multiple"
          :clearable="clearable"
          :placeholder="placeholder"
          :style="{ width: width }"
          :filterable="filterable"
        >
          <el-option
            v-for="item in remote ? remoteOptions : defaultOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </template>
      <template v-if="type == 'cascader'">
        <el-cascader
          v-model="dataModel"
          :disabled="disabled"
          :clearable="clearable"
          :placeholder="placeholder"
          :style="{ width: width }"
          :props="protoProps"
          :options="remote ? remoteOptions : defaultOptions"
        >
        </el-cascader>
      </template>
      <template v-if="type == 'switch'">
        <el-switch v-model="dataModel" :disabled="disabled"> </el-switch>
      </template>
      <template v-if="type == 'text'">
        <span>{{ dataModel }}</span>
      </template>
      <template v-if="type == 'slider'">
        <el-slider
          v-model="dataModel"
          :min="options.min"
          :max="options.max"
          :disabled="disabled"
          :step="options.step"
          :show-input="options.showInput"
          :range="options.range"
          :style="{ width: width }"
        ></el-slider>
      </template>
      <template v-if="type == 'time'">
        <el-time-picker
          v-model="dataModel"
          :is-range="options.isRange"
          :placeholder="placeholder"
          :start-placeholder="options.startPlaceholder"
          :end-placeholder="options.endPlaceholder"
          :readonly="options.readonly"
          :disabled="disabled"
          :editable="options.editable"
          :clearable="clearable"
          :arrowControl="options.arrowControl"
          :value-format="options.format"
          :style="{ width: width }"
        >
        </el-time-picker>
      </template>
      <template v-if="type == 'date'">
        <el-date-picker
          v-model="dataModel"
          :type="options.type"
          :placeholder="placeholder"
          :start-placeholder="options.startPlaceholder"
          :end-placeholder="options.endPlaceholder"
          :readonly="options.readonly"
          :disabled="disabled"
          :editable="options.editable"
          :clearable="clearable"
          :value-format="options.timestamp ? 'timestamp' : options.format"
          :format="options.format"
          :style="{ width: width }"
        >
        </el-date-picker>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'aw-form-item',
  props: {
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '默认label'
    },
    model: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '100%'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dataType: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: -1
    },
    remotes: {
      type: Object,
      default: () => {}
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // select
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {}
    },
    defaultOptions: {
      type: Array,
      default: () => []
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteFunc: {
      type: String,
      default: ''
    },
    remoteOptions: {
      type: Array,
      default: () => []
    },
    autosize: {
      type: Object,
      default: () => {}
    },
    inline: {
      type: Boolean,
      default: true
    },
    protoProps: {
      type: Object,
      default: () => {}
    },
  },
  watch: {
    dataModel: {
      deep: true,
      handler(val) {
        this.models[this.model] = val
      }
    },
    models: {
      deep: true,
      handler(val) {
        this.dataModel = val[this.model]
      }
    },
  },

  created() {
    // 假如是远端请求 走这里请求
    if (this.remote && this.remotes[this.remoteFunc]) {
      let props = this.props
      this.remotes[this.remoteFunc]((data) => {
        this.remoteOptions = data.map((item) => {
          return {
            value: props && props.value ? item[props.value] : item.value,
            label: props && props.label ? item[props.label] : item.label,
            children: props && props.children ? item[props.children] : item.children
          }
        })
      })
    }
  },
  mounted() {
    console.log(this.model)
    console.log(this.models)
    this.models[this.model] = this.defaultValue ? this.defaultValue : ''

    this.dataModel = this.models[this.model]
  },
  data() {
    return {
      // dataModel: this.model,
      dataModel: '',
      models: {}
    }
  },
  methods: {}
}
</script>
