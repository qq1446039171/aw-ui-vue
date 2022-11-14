<template>
  <el-form-item :label="widget.name" :prop="widget.model" :label-width="labelWidth">
    <template v-if="widget.type == 'input'">
      <el-input
        v-if="
          widget.options.dataType == 'number' ||
          widget.options.dataType == 'integer' ||
          widget.options.dataType == 'float'
        "
        type="number"
        v-model.number="dataModel"
        :placeholder="widget.options.placeholder"
        :style="{ width: widget.options.width }"
        :disabled="widget.options.disabled"
        :clearable="widget.options.clearable"
      ></el-input>
      <el-input
        v-else
        type="text"
        v-model="dataModel"
        :disabled="widget.options.disabled"
        :placeholder="widget.options.placeholder"
        :style="{ width: widget.options.width }"
        :maxlength="widget.options.maxlength"
        :show-word-limit="widget.options.showWordLimit"
        :clearable="widget.options.clearable"
      ></el-input>
    </template>
    <template v-if="widget.type == 'textarea'">
      <el-input
        type="textarea"
        :rows="5"
        v-model="dataModel"
        :autosize="widget.options.autosize"
        :disabled="widget.options.disabled"
        :placeholder="widget.options.placeholder"
        :style="{ width: widget.options.width }"
        :maxlength="widget.options.maxlength"
        :show-word-limit="widget.options.showWordLimit"
      ></el-input>
    </template>
    <template v-if="widget.type == 'radio'">
      <el-radio-group v-model="dataModel" :style="{ width: widget.options.width }" :disabled="widget.options.disabled">
        <el-radio
          :style="{ display: widget.options.inline ? 'inline-block' : 'block' }"
          :label="item.value"
          v-for="(item, index) in widget.options.remote ? widget.options.remoteOptions : widget.options.options"
          :key="index"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
    </template>
    <template v-if="widget.type == 'checkbox'">
      <el-checkbox-group
        v-model="dataModel"
        :style="{ width: widget.options.width }"
        :disabled="widget.options.disabled"
      >
        <el-checkbox
          :style="{ display: widget.options.inline ? 'inline-block' : 'block' }"
          :label="item.value"
          v-for="(item, index) in widget.options.remote ? widget.options.remoteOptions : widget.options.options"
          :key="index"
        >
          {{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
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
    <template v-if="widget.type == 'cascader'">
      <el-cascader
        v-model="dataModel"
        :disabled="widget.options.disabled"
        :clearable="widget.options.clearable"
        :placeholder="widget.options.placeholder"
        :style="{ width: widget.options.width }"
        :props="widget.options.protoProps"
        :options="widget.options.remoteOptions"
      >
      </el-cascader>
    </template>
    <template v-if="widget.type == 'switch'">
      <el-switch v-model="dataModel" :disabled="widget.options.disabled"> </el-switch>
    </template>
    <template v-if="widget.type == 'text'">
      <span>{{ dataModel }}</span>
    </template>
    <template v-if="widget.type == 'slider'">
      <el-slider
        v-model="dataModel"
        :min="widget.options.min"
        :max="widget.options.max"
        :disabled="widget.options.disabled"
        :step="widget.options.step"
        :show-input="widget.options.showInput"
        :range="widget.options.range"
        :style="{ width: widget.options.width }"
      ></el-slider>
    </template>
    <template v-if="widget.type == 'time'">
      <el-time-picker
        v-model="dataModel"
        :is-range="widget.options.isRange"
        :placeholder="widget.options.placeholder"
        :start-placeholder="widget.options.startPlaceholder"
        :end-placeholder="widget.options.endPlaceholder"
        :readonly="widget.options.readonly"
        :disabled="widget.options.disabled"
        :editable="widget.options.editable"
        :clearable="widget.options.clearable"
        :arrowControl="widget.options.arrowControl"
        :value-format="widget.options.format"
        :style="{ width: widget.options.width }"
      >
      </el-time-picker>
    </template>
    <template v-if="widget.type == 'date'">
      <el-date-picker
        v-model="dataModel"
        :type="widget.options.type"
        :placeholder="widget.options.placeholder"
        :start-placeholder="widget.options.startPlaceholder"
        :end-placeholder="widget.options.endPlaceholder"
        :readonly="widget.options.readonly"
        :disabled="widget.options.disabled"
        :editable="widget.options.editable"
        :clearable="widget.options.clearable"
        :value-format="widget.options.timestamp ? 'timestamp' : widget.options.format"
        :format="widget.options.format"
        :style="{ width: widget.options.width }"
      >
      </el-date-picker>
    </template>
  </el-form-item>
</template>

<script>
export default {
  props: ['widget', 'models', 'remote', 'rules', 'labelWidth'],
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
      let props = this.widget.options.props
      this.remote[this.widget.options.remoteFunc]((data) => {
        this.widget.options.remoteOptions = data.map((item) => {
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
      dataModel: this.models[this.widget.model]
    }
  },

  methods: {}
}
</script>
