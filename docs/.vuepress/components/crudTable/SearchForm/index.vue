<template>
  <div class="aw-table-search">
    <!-- :style="`max-width: ${maxWidth}px`" -->
    <el-form ref="formRef" :model="searchParam" :size="size" :inline="true" :label-width="labelWidth + 'px'">
      <el-form-item
        :label="`${item.label} :`"
        v-for="item in columns"
        :key="item.prop"
        :label-width="item.labelWidth ? item.labelWidth + 'px' : labelWidth + 'px'"
      >
        <SearchFormItem :item="item" :searchParam="searchParam"></SearchFormItem>
      </el-form-item>
      <slot name="searchForm"></slot>
    </el-form>
    <div class="aw-table-search-operation">
      <el-button type="primary" icon="el-icon-search" @click="search" :size="size">搜索</el-button>
      <el-button icon="el-icon-delete" @click="reset" :size="size">重置</el-button>
      <slot name="searchButton"></slot>
    </div>
  </div>
</template>

<script>
  import SearchFormItem from './components/SearchFormItem.vue'
  export default {
    name: 'aw-table-searchForm',
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      searchParam: {
        type: Object,
        default: () => ({})
      },
      initSearchParam: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'small'
      },
      search: {
        type: Function,
        default: () => ({})
      },
      reset: {
        type: Function,
        default: () => ({})
      },
      labelWidth: {
        type: Number,
        default: 100
      }
    },
    // props: ['columns', 'searchParam', 'size', 'search', 'reset'],
    components: { SearchFormItem },
    data() {
      return {
        maxWidth: 1260
      }
    }
  }
</script>

<style></style>
