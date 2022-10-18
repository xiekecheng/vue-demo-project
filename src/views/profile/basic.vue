<template>
  <div>
    <h1>基础详情页</h1>
    <el-button @click="onClear">清空选中数据</el-button>
    <el-checkbox-group v-model="checkList" @change="selectChange">
      <div v-for="(item, id) in tableData" :key="id">
        <el-checkbox :label="item">{{ item.name }}</el-checkbox>
      </div>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      selectedData: [],
      tableData: [
        {
          id: 1,
          name: 'jack',
          age: 18,
        },
        {
          id: 2,
          name: 'tom',
          age: 18,
        },
        {
          id: 3,
          name: 'rose',
          age: 18,
        },
        {
          id: 4,
          name: 'jam',
          age: 18,
        },
      ],
    };
  },
  methods: {
    onClear() {
      this.checkList = [];
    },
    // 选中变更
    selectChange(val) {
      console.log('selectChange->val', val);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox__label {
  display: none;
}
</style>
