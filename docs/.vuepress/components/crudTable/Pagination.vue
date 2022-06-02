<template>
  <el-pagination
    :currentPage="pageable.pageNum"
    :page-size="pageable.pageSize"
    :page-sizes="[10, 25, 50, 100]"
    :background="true"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageable.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>

<script>
export default {
  name:'aw-table-pagination',
  props: ['pageable', 'handleSizeChange', 'handleCurrentChange']
}
</script>

<style></style>
