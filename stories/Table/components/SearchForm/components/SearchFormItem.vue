<template>
  <div>
    <!--  输入框 -->
    <template v-if="item.searchType == undefined || item.searchType == 'text'">
      <el-input
        v-model="searchParam[item.prop]"
        :style="`width: ${item.inputWidth ? item.inputWidth : ''}px`"
        :placeholder="item.placeholder ? item.placeholder : '请输入'"
        clearable
      ></el-input>
    </template>
    <!--  选择器  multipleSelect 多选的意思-->
    <template v-if="item.searchType == 'select' || item.searchType == 'multipleSelect'">
      <el-select
        v-model="searchParam[item.prop]"
        :style="`width: ${item.inputWidth ? item.inputWidth : ''}px`"
        :multiple="item.searchType == 'multipleSelect'"
        :placeholder="item.placeholder ? item.placeholder : '请选择'"
        clearable
      >
        <!-- :clearable="item.initSearchParam == null || item.initSearchParam == undefined" -->
        <el-option
          v-for="itemValue in Enum"
          :key="itemValue.value"
          :label="itemValue.label"
          :value="itemValue.value"
          :disabled="itemValue.disabled"
        />
      </el-select>
    </template>
    <!--  日期选择器 -->
    <template v-if="item.searchType == 'datetimerange'">
      <el-date-picker
        v-model="searchParam[item.prop]"
        type="datetimerange"
        value-format="yyyy-MM-DD HH:mm:ss"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :clearable="item.initSearchParam == null || item.initSearchParam == undefined"
      />
    </template>

    <template v-if="item.searchType == 'daterange'">
      <el-date-picker
        v-model="searchParam[item.prop]"
        value-format="yyyy-MM-dd"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="daterangeChange"
      >
      </el-date-picker>
    </template>
  </div>
</template>

<script>
export default {
  name: 'aw-table-searchFormItem',
  props: ['item', 'searchParam', 'remote'],
  data() {
    return {
      Enum: []
    }
  },
  mounted() {},
  created() {
    if (this.item.searchType == 'multipleSelect' || this.item.searchType == 'select') {
      if (this.item.remote && this.remote[this.item.remoteFunc]) {
        this.remote[this.item.remoteFunc]((data) => {
          this.Enum = data.map((item) => {
            return {
              value: item[this.item.props.value],
              label: item[this.item.props.label],
              children: item[this.item.props.children]
            }
          })
        })
      } else {
        this.Enum = this.item.enum
      }
    }
  },
  methods: {
    daterangeChange(val) {
      console.log(val)
      this.searchParam[this.item.prop] = val
    }
  }
}
</script>

<style></style>
