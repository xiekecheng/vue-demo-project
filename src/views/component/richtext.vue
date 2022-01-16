<template>
	<div>
				<ckeditor v-model="richtext"></ckeditor>
				<el-button @click="checkData">查看富文本内容</el-button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				richtext:'hello richtext'
			}
		},
		methods:{
			checkData(){
				console.log('内容=>',this.richtext);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>