<!-- 个人中心 应用模块组件 -->
<template>
  <div>
    <el-row :gutter="24">
      <el-col v-for="item in 30" :key="item" :md="12" :lg="8" :xl="8">
        <el-card class="box-card">
          <div class="card-info">Alipay
						<div>活跃用户</div>
					</div>
          <div>
            <ul class="operation">
              <li v-for="item in ops" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ops: ['下载', '编辑', '分享', ''],
    };
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 12px;
  .operation {
    display: flex;
    padding: 0;
    > li {
      flex: 1;
      list-style: none;
			text-align: center;
    }
  }
}
::v-deep .el-card__body{
	padding: 0;
}
.card-info{
	padding: 12px;
}
</style>
