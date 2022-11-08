<template>
  <el-form label-width="90px" label-position="right">
    <el-form-item :label="name" :prop="model">
      <template v-if="type == 'input'">
        <el-input
          v-if="
            options.dataType == 'number' ||
            options.dataType == 'integer' ||
            options.dataType == 'float'
          "
          type="number"
          v-model.number="dataModel"
          :placeholder="options.placeholder"
          :style="{ width: options.width }"
          :disabled="options.disabled"
        ></el-input>
        <el-input
          v-else
          type="text"
          v-model="dataModel"
          :disabled="options.disabled"
          :placeholder="options.placeholder"
          :style="{ width: options.width }"
          :maxlength="maxlength"
          :show-word-limit="options.showWordLimit"
        ></el-input>
      </template>
      <template v-if="type == 'textarea'">
        <el-input
          type="textarea"
          :rows="5"
          v-model="dataModel"
          :autosize="options.autosize"
          :disabled="options.disabled"
          :placeholder="options.placeholder"
          :style="{ width: options.width }"
          :maxlength="maxlength"
          :show-word-limit="options.showWordLimit"
        ></el-input>
      </template>
      <template v-if="type == 'radio'">
        <el-radio-group
          v-model="dataModel"
          :style="{ width: options.width }"
          :disabled="options.disabled"
        >
          <el-radio
            :style="{ display: options.inline ? 'inline-block' : 'block' }"
            :label="item.value"
            v-for="(item, index) in options.remote ? options.remoteOptions : options.options"
            :key="index"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </template>
      <template v-if="type == 'checkbox'">
        <el-checkbox-group
          v-model="dataModel"
          :style="{ width: options.width }"
          :disabled="options.disabled"
        >
          <el-checkbox
            :style="{ display: options.inline ? 'inline-block' : 'block' }"
            :label="item.value"
            v-for="(item, index) in options.remote ? options.remoteOptions : options.options"
            :key="index"
          >
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </template>
      <template v-if="type == 'select'">
        <el-select
          v-model="dataModel"
          :disabled="options.disabled"
          :multiple="options.multiple"
          :clearable="options.clearable"
          :placeholder="options.placeholder"
          :style="{ width: options.width }"
          :filterable="options.filterable"
        >
          <el-option
            v-for="item in options.remote ? options.remoteOptions : options.options"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </template>
      <template v-if="type == 'cascader'">
        <el-cascader
          v-model="dataModel"
          :disabled="options.disabled"
          :clearable="options.clearable"
          :placeholder="options.placeholder"
          :style="{ width: options.width }"
          :props="options.protoProps"
          :options="options.remoteOptions"
        >
        </el-cascader>
      </template>
      <template v-if="type == 'switch'">
        <el-switch v-model="dataModel" :disabled="options.disabled"> </el-switch>
      </template>
      <template v-if="type == 'text'">
        <span>{{ dataModel }}</span>
      </template>
      <template v-if="type == 'slider'">
        <el-slider
          v-model="dataModel"
          :min="options.min"
          :max="options.max"
          :disabled="options.disabled"
          :step="options.step"
          :show-input="options.showInput"
          :range="options.range"
          :style="{ width: options.width }"
        ></el-slider>
      </template>
      <template v-if="type == 'time'">
        <el-time-picker
          v-model="dataModel"
          :is-range="options.isRange"
          :placeholder="options.placeholder"
          :start-placeholder="options.startPlaceholder"
          :end-placeholder="options.endPlaceholder"
          :readonly="options.readonly"
          :disabled="options.disabled"
          :editable="options.editable"
          :clearable="options.clearable"
          :arrowControl="options.arrowControl"
          :value-format="options.format"
          :style="{ width: options.width }"
        >
        </el-time-picker>
      </template>
      <template v-if="type == 'date'">
        <el-date-picker
          v-model="dataModel"
          :type="options.type"
          :placeholder="options.placeholder"
          :start-placeholder="options.startPlaceholder"
          :end-placeholder="options.endPlaceholder"
          :readonly="options.readonly"
          :disabled="options.disabled"
          :editable="options.editable"
          :clearable="options.clearable"
          :value-format="options.timestamp ? 'timestamp' : options.format"
          :format="options.format"
          :style="{ width: options.width }"
        >
        </el-date-picker>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'aw-form-item',
  // props: ['widget', 'models', 'remote', 'rules'],
  props: ['type', 'options', 'name', 'model', 'rules','maxlength','models','remote'],
  watch: {
    models: {
      deep: true,
      handler(val) {
        this.dataModel = val[this.model]
      }
    },
    dataModel: {
      deep: true,
      handler(val) {
        this.models[this.model] = val

        this.$emit('input-change', val, this.model)
      }
    }
  },
  computed: {},
  created() {
    // 假如是远端请求 走这里请求
    if (this.options.remote && this.remote[this.options.remoteFunc]) {
      let props = this.options.props
      this.remote[this.options.remoteFunc]((data) => {
        this.options.remoteOptions = data.map((item) => {
          return {
            value: props && props.value ? item[props.value] : item.value,
            label: props && props.label ? item[props.label] : item.label,
            children: props && props.children ? item[props.children] : item.children
          }
        })
      })
    }
  },
  data() {
    return {
      dataModel: this.models[this.model]
    }
  },

  methods: {}
}
</script>
