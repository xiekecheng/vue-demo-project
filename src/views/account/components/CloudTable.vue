<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" height="400">
      <el-table-column prop="date" sortable label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
    </el-table>
    <el-pagination
      :current-page="pageOV.currentPage"
      :page-sizes="pageOV.pageSizes"
      :page-size="pageOV.currentSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageOV.totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getAddressList } from '@/api';

export default {
  props: ['type'],
  data() {
    return {
      tableData: [],
      pageOV: {
        currentPage: 1,
        currentSize: 10,
        pageSizes: [2, 10, 15, 20],
        totalCount: 400,
      },
    };
  },
  watch: {
    type(val) {
      this.pageOV.currentPage = 1;
      this.pageOV.currentSize = 10;
      this.getTableData();
    },
  },
  created() {
    this.getTableData();
  },
  methods: {
    handleSizeChange(val) {
      this.pageOV.currentSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.pageOV.currentPage = val;
      this.getTableData();
    },
    getTableData() {
      const params = {
        currentPage: this.pageOV.currentPage,
        currentSize: this.pageOV.currentSize,
        type: this.type,
      };
      getAddressList(params).then((res) => {
        this.tableData = res.result.result;
        this.pageOV.totalCount = res.result.total;
      });
    },
  },
};
</script>
