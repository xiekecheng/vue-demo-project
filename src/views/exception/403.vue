<template>
  <div>
    <h1>403</h1>
    <el-result title="403" subTitle="抱歉，请求错误">
      <template v-slot:icon>
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
      </template>
      <template v-slot:extra>
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
export default {};
</script>
