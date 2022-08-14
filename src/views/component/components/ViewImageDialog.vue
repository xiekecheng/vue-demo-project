<!-- 查看图片对话框 -->
<template>
  <div>
    <el-dialog title="查看图片" :visible.sync="dialogVisible" width="50%" destroy-on-close close-on-click-modal >
      <el-image style="width: 500px; height: 500px" :src="url" fit="fill"></el-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
	props:{
		url:{
			type: String,
		}
	},
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped></style>
