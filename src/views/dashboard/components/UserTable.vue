<template>
  <div>
    <el-table :data="searchList" style="width: 100%" :height="288">
      <el-table-column prop="rank" label="排名" width="180"> </el-table-column>
      <el-table-column prop="keyword" label="搜索关键词" width="180"> </el-table-column>
      <el-table-column prop="user_number" label="用户数"> </el-table-column>
      <el-table-column prop="week_rise" label="周涨幅"> </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="currentSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="searchTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      currentPage: 1,
      currentSize: 5,
    };
  },
  computed: {
    ...mapState('hotSearch', ['searchList', 'searchTotal']),
  },
  watch: {
    currentPage() {
      this.getList();
    },
    currentSize() {
      this.getList();
    },
  },
  created() {
    // 获取热搜数据
    this.getList();
  },

  mounted() {
    // this.tableData = this.searchList
  },

  methods: {
    ...mapActions('hotSearch', ['getSearchList']),
    handleSizeChange(val) {
      this.currentSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getList() {
      this.getSearchList({
        page: this.currentPage,
        size: this.currentSize,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
