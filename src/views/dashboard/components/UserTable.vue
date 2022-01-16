<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :height="288" @filter-change="handleFilterChange">
      <el-table-column prop="rank" label="排名" width="180"> </el-table-column>
      <el-table-column
        prop="keyword"
        column-key="keyword"
        :filters="filters.keywordFilters"
        label="搜索关键词"
        width="180"
      >
      </el-table-column>
      <el-table-column prop="user_number" column-key="user_number" :filters="filters.userNumberFilters" label="用户数">
      </el-table-column>
      <el-table-column prop="week_rise" label="周涨幅"> </el-table-column>
    </el-table>
    <el-pagination
      :current-page="pageObj.currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageObj.currentSize"
      layout=" prev, pager, next"
      :total="pageObj.totalCount"
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
      filters: {
        keywordFilters: [
          { text: '搜索关键词-01', value: '搜索关键词-01' },
          { text: '搜索关键词-02', value: '搜索关键词-02' },
          { text: '搜索关键词-06', value: '搜索关键词-06' },
        ],
        userNumberFilters: [
          { text: '433', value: '433' },
          { text: '11', value: '11' },
          { text: '3', value: '3' },
        ],
      },
      filterData: {
        keyword:[],
        user_number:[]
      },
      tableData: [],
      pageObj: {
        currentPage: 1,
        currentSize: 5,
        totalCount: 0,
      },
    };
  },
  computed: {
    ...mapState('hotSearch', ['searchList', 'searchTotal']),
  },
  watch: {
  },
  created() {
    // 获取热搜数据
    this.getList();
  },

  mounted() {
    // this.tableData = this.searchList
  },

  methods: {
    ...mapActions('hotSearch', ['getSearchList','getListFilterByPage']),
    // 处理筛选逻辑
    handleFilterChange(filtersObj) {
      this.handleFilterData(filtersObj)
      // console.log('filtersObj',filtersObj);
      // this.filterData = {...filtersObj}
      // this.filterData = {}
      this.getList();
    },
    handleFilterData(filtersObj){
      const keys = Object.keys(this.filterData)
      console.log('keys=>',keys);
      keys.forEach(item=>{
        console.log(`filtersObj[${item}]=>`,filtersObj[item]);
        if(filtersObj[item]){
          this.filterData[item] = filtersObj[item]
        }
      })
      console.log('this.filterData=>',this.filterData);
    },
    // 分页每页显示条数
    handleSizeChange(val) {
      this.pageObj.currentSize = val;
      this.getList();
    },
    // 分页当前页
    handleCurrentChange(val) {
      this.pageObj.currentPage = val;
      this.getList();
    },
    // 查询数据
    getList() {
      const params = {
        page: this.pageObj.currentPage,
        size: this.pageObj.currentSize,
        filters:this.filterData
      };
      this.getListFilterByPage(params).then((res) => {
        console.log('res', res);
        this.tableData = res.data.result;
        this.pageObj.totalCount = res.data.total;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
