<template>
  <div>
    <h1>商品页面</h1>
    <el-table :data="tableData" border :span-method="objectSpanMethod">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" width="180"> </el-table-column>
      <el-table-column prop="tag" label="编码" width="180"> </el-table-column>
    </el-table>
    <!-- Start 分页功能 -->
    <div class="block">
      <!-- <span class="demonstration">完整功能</span> -->
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <!-- End 分页功能 -->
  </div>
</template>

<script>
import Mock from 'mockjs';
export default {
  data() {
    return {
      spanArr: [],
      pageSize: 10,
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  created() {
    const mockData = Mock.mock({
      'data|40-70': [
        {
          date: '@DATE',
          name: '@CNAME',
          address: '@REGION',
          'tag|10-15': 1,
        },
      ],
    });
    console.log('mockData', mockData);
    this.tableData = mockData.data;
  },
  mounted() {
    let contactDot = 0;
    this.tableData4.forEach((item, index) => {
      item.index = index;
      if (index === 0) {
        this.spanArr.push(1);
      } else {
        if (item.id === this.tableData4[index - 1].id) {
          this.spanArr[contactDot] += 1;
          this.spanArr.push(0);
        } else {
          this.spanArr.push(1);
          contactDot = index;
        }
      }
    });
  },
  methods: {
    mounted() {
      this.onMergeLines();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onMergeLines() {
      this.dataTable.forEach((item, index) => {
        if (index === 0) {
          this.spanArr.push(1);
          this.position = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (this.dataTable[index].distribution === this.dataTable[index - 1].distribution) {
            this.spanArr[this.position] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.position = index;
          }
        }
      });
    },
    // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (columnIndex === ) {
    //     const _row = this.spanArr[rowIndex];
    //     const _col = _row > 0 ? 1 : 0;
    //     return {
    //       rowspan: _row,
    //       colspan: _col,
    //     };
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped></style>
