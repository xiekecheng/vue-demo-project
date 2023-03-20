<template>
  <div class="wrap">
    <el-tabs :tab-position="tabPosition" style="height: 100%">
      <el-tab-pane label="基本设置">
        <BasicSetting />
      </el-tab-pane>
      <el-tab-pane label="安全设置">安全设置</el-tab-pane>
      <el-tab-pane label="账号绑定">账号绑定</el-tab-pane>
      <el-tab-pane label="新消息通知">新消息通知</el-tab-pane>
    </el-tabs>

    <el-dialog title="提示" v-model="dialogVisible" width="1000px">
      <el-tabs v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="西安" name="西安"></el-tab-pane>
        <el-tab-pane label="深圳" name="深圳"></el-tab-pane>
        <el-tab-pane label="上海" name="上海"></el-tab-pane>
        <el-tab-pane label="其他" name="TSPSource"></el-tab-pane>
      </el-tabs>
      <template v-if="activeTab !== 'TSPSource'">
        <CloudTable :type="activeTab" />
      </template>
      <template v-else>
        <OtherTable />
      </template>
    </el-dialog>
  </div>
</template>

<script>
import OtherTable from './components/OtherTable.vue';
import CloudTable from './components/CloudTable.vue';
import BasicSetting from './components/BasicSetting.vue';

export default {
  components: {
    OtherTable,
    CloudTable,
    BasicSetting,
  },
  data() {
    return {
      dialogVisible: false,
      activeTab: '西安',
      tabPosition: 'left',
    };
  },
  watch: {
    activeTab(val) {
      console.log('val', val);
    },
  },
  methods: {
    handleClick(tab, event) {
      console.log('tab, event', tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fff;
}
</style>
