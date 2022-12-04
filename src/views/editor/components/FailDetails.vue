<template>
  <div>
    <el-dialog :title='title' :visible.sync='dialogVisible'>
      <el-table :data='tableData' stripe max-height='440' size='small'>
        <el-table-column v-for='(item,index) in tableColumns' :key='index' :property='item.property'
                         :label='item.label' />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableColumns: [],
      tableData: [],
      title: '',
    };
  },
  methods: {
    // 显示错误信息
    showFailDetails(tableData, tableColumns, title = '失败详情') {
      this.tableData = tableData;
      this.tableColumns = tableColumns;
      this.title = title;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang='scss' scoped>

</style>