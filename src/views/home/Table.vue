<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="order" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="业务场景" width="180">
      </el-table-column>
      <el-table-column prop="date" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          order: 1,
          date: "2016-05-02",
          name: "平行进口车",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          order: 2,
          date: "2016-05-04",
          name: "平行进口车",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          order: 3,
          date: "2016-05-01",
          name: "无车承运",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          order: 4,
          date: "2016-05-03",
          name: "无车承运",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
