<template>
  <div>
    <h1>个人设置</h1>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="1000px" >
      <el-tabs v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="西安" name="西安"></el-tab-pane>
        <el-tab-pane label="深圳" name="深圳"></el-tab-pane>
        <el-tab-pane label="上海" name="上海"></el-tab-pane>
        <el-tab-pane label="其他" name="TSPSource"></el-tab-pane>
      </el-tabs>
      <template v-if="activeTab !== 'TSPSource'">
        <CloudTable :type='activeTab'/>
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
export default {
  components: {
    OtherTable,
		CloudTable
  },
  data() {
    return {
      dialogVisible: false,
      activeTab: '西安',
    };
  },
	watch:{
		activeTab(val){
			console.log('val',val)
		}
	},
  methods: {
    handleClick(tab, event) {
      console.log('tab, event',tab, event);
    },
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
  },
};
</script>

<style lang="scss" scoped></style>
