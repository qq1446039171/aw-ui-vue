<template>
  <div class="aw-form">
    <el-form
      ref="awForm"
      label-suffix=":"
      :size="data.config.size"
      :model="models"
      :rules="rules"
      :label-position="data.config.labelPosition"
      :label-width="data.config.labelWidth + 'px'"
    >
      <template v-for="item in data.list">
        <!--  网格布局的时候 -->
        <template v-if="item.type == 'grid'">
          <el-row
            :key="item.key"
            type="flex"
            :gutter="item.options.gutter ? item.options.gutter : 0"
            :justify="item.options.justify"
            :align="item.options.align"
          >
            <el-col v-for="(col, colIndex) in item.columns" :key="colIndex" :span="col.span">
              <template v-for="colItem in col.list">
                <el-form-item
                  v-if="colItem.type == 'blank'"
                  :label="colItem.name"
                  :prop="colItem.model"
                  :key="colItem.model"
                >
                  <slot :name="colItem.model" :model="models"></slot>
                </el-form-item>
                <aw-form-item
                  v-else
                  :key="colItem.model"
                  :models.sync="models"
                  :remote="remote"
                  :widget="colItem"
                  :rules="rules"
                  @input-change="onInputChange"
                >
                </aw-form-item>
              </template>
            </el-col>
          </el-row>
        </template>
        <template v-else-if="item.type == 'blank'">
          <el-form-item :label="item.name" :prop="item.model" :key="item.key">
            <slot :name="item.model" :model="models"></slot>
          </el-form-item>
        </template>
        <template v-else>
          <aw-form-item
            :key="item.model"
            :models.sync="models"
            :remote="remote"
            :widget="item"
            :rules="rules"
            @input-change="onInputChange"
          >
          </aw-form-item>
        </template>
      </template>

      <div class="aw-form-footer" :style="{ 'justify-content': data.config.footer }">
        <slot name="footer"></slot>
      </div>
    </el-form>
  </div>
</template>

<script>
import AwFormItem from './FormItem.vue'

export default {
  name: 'aw-form',
  components: {
    AwFormItem
  },
  props: ['data', 'value', 'remote'],
  watch: {
    data: {
      deep: true,
      handler(val) {
        this.generateModel(val.list)
      }
    },
    value: {
      deep: true,
      handler(val) {
        console.log(JSON.stringify(val))
        this.models = { ...this.models, ...val }
      }
    }
  },
  data() {
    return {
      models: {},
      rules: {}
    }
  },
  created() {
    this.generateModel(this.data.list)
  },
  mounted() {},
  methods: {
    generateModel(genList) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach((item) => {
            this.generateModel(item.list)
          })
        } else {
          let isRules = genList[i].rules && genList[i].rules.length
          if (this.value && Object.keys(this.value).indexOf(genList[i].model) >= 0) {
            this.models[genList[i].model] = this.value[genList[i].model]
          } else {
            this.models[genList[i].model] = genList[i].options.defaultValue
          }
          if (this.rules[genList[i].model]) {
            if (isRules) {
              this.rules[genList[i].model] = [
                ...this.rules[genList[i].model],
                ...genList[i].rules.map((item) => {
                  if (item.pattern) {
                    return { ...item, pattern: new RegExp(item.pattern) }
                  } else {
                    return { ...item }
                  }
                })
              ]
            }
          } else {
            if (isRules) {
              this.rules[genList[i].model] = [
                ...genList[i].rules.map((item) => {
                  if (item.pattern) {
                    return { ...item, pattern: new RegExp(item.pattern) }
                  } else {
                    return { ...item }
                  }
                })
              ]
            }
          }
        }
      }
    },
    onInputChange(value, field) {
      this.$emit('on-change', field, value, this.models)
    },
    getData() {
      return new Promise((resolve, reject) => {
        this.$refs.awForm.validate((valid) => {
          if (valid) {
            resolve(this.models)
          } else {
            reject(new Error('获取数据出错'))
          }
        })
      })
    },
    reset() {
      this.$refs.awForm.resetFields()
    },
    onInputChange(value, field) {
      this.$emit('on-change', field, value, this.models)
    },
    refresh() {}
  }
}
</script>