<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :height="288"
      border
      :span-method="spanMethod"
      @selection-change="handleSelectionChange"
      @filter-change="handleFilterChange"
    >
      <el-table-column type="selection" width="55" :selectable="selectable"></el-table-column>
      <el-table-column prop="rank" label="排名" width="180"></el-table-column>
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
      <el-table-column prop="week_rise" label="周涨幅"></el-table-column>
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

export default {
  data() {
    return {
      filterData: {
        keyword: [],
        user_number: [],
      },
      tableData: [],
      spanAll: [],
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
  watch: {},
  async created() {
    // 获取热搜数据
    this.getList();
  },
  mounted() {
    // this.tableData = this.searchList
  },
  methods: {
    userNumberFilters_filter: [
      { text: '433', value: '433' },
      { text: '11', value: '11' },
      { text: '3', value: '3' },
    ],
    keywordFilters_filter: [
      { text: '搜索关键词-01', value: '搜索关键词-01' },
      { text: '搜索关键词-02', value: '搜索关键词-02' },
      { text: '搜索关键词-06', value: '搜索关键词-06' },
    ],
    // 构造合并数据
    generateData(data) {
      ['rank', 'keyword', 'user_number', 'week_rise'].forEach((val) => {
        this.getSpanNum(val, data);
      });
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      const combinedArr = ['user_number'];
      if (combinedArr.includes(column.property)) {
        // console.log('this.spanAll', this.spanAll);
        // console.log('columnIndex', columnIndex);
        // console.log(this.spanAll);
        // 得到行合并的数据
        const rowNum = this.spanAll[columnIndex][rowIndex];
        // 列合并
        const colNum = rowNum > 0 ? 1 : 0;
        // 当前位置的行合并和列合并数据

        let dic = {
          rowspan: rowNum,
          colspan: colNum,
        };
        return dic;
      }
    },
    getSpanNum(curName, data) {
      const spanArry = [];
      let pos = 0;
      data.forEach((val, i) => {
        if (i === 0) {
          spanArry.push(1);
          pos = 0;
        } else {
          // 判断当前列数据与下一行的该列数据是否相同
          if (data[i][curName] === data[i - 1][curName]) {
            // 每一列每一行的合并数量
            spanArry[pos] += 1;
            spanArry.push(0);
          } else {
            spanArry.push(1);
            pos = i;
          }
        }
      });
      // 把合并数据放入spanAll里面
      this.spanAll.push(spanArry);
    },
    selectable(row, index) {
      if (row.rank !== 1) {
        return false;
      }
      return true;
    },
    // 处理筛选逻辑
    handleFilterChange(filtersObj) {
      this.handleFilterData(filtersObj);
      this.getList();
    },
    handleFilterData(filtersObj) {
      const keys = Object.keys(this.filterData);
      keys.forEach((item) => {
        if (filtersObj[item]) {
          this.filterData[item] = filtersObj[item];
        }
      });
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
        filters: this.filterData,
      };
      return this.getListFilterByPage(params).then((res) => {
        this.tableData = res.data.result;
        this.pageObj.totalCount = res.data.total;
        this.spanAll = [];
        this.generateData(res.data.result);
      });
    },
    handleSelectionChange(selection) {},
  },
};
</script>
