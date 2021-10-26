<template>
  <div>
    <h1>我是首页</h1>
    <div>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        tab-position="left"
      >
        <el-tab-pane label="供应链保理" name="first">
          <!-- Start 供应链保理 -->
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            tab-position="left"
          >
            <el-tab-pane label="商票贴现" name="first"
              ><my-table
            /></el-tab-pane>
            <el-tab-pane label="电子应付凭证保理" name="second"
              >配置管理</el-tab-pane
            >
          </el-tabs>
          <!-- End 供应链保理 -->
        </el-tab-pane>

        <el-tab-pane label="仓单质押" name="second">
          <!-- Start 仓单质押 -->
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            tab-position="left"
          >
            <el-tab-pane label="电子仓单质押222" name="first"
              ><my-table
            /></el-tab-pane>
            <el-tab-pane label="货物质押2222" name="second"
              >配置管理</el-tab-pane
            >
          </el-tabs>
          <!-- End 仓单质押 -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Table from "./Table.vue";
export default {
  name: "home",
  components: {
    "my-table": Table,
  },
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
