<template>
	<div>
		我是子组件的内容
		<div v-text="title"></div>
		<button @click="change">修改标题title</button>
	</div>
</template>

<script>
	export default {
		props:{
			title:{
				type:String
			}
		},
		methods:{
			change(){
				// this.$emit('title','我是新的标题')
				this.$emit('update:title','我是新的标题')
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>