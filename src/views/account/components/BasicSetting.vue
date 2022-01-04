<template>
	<div>
		<h1>基本设置</h1>
		<el-avatar size="number" :src="circleUrl"></el-avatar>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>