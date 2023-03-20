<template>
  <div>
    <h1>基础详情页</h1>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox__label {
  display: none;
}
</style>
