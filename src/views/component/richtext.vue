<template>
	<div>
				<ckeditor v-model="richtext" :config='config'></ckeditor>
				<el-button @click="checkData">查看富文本内容</el-button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				richtext:'hello richtext',
				config:{
					uiColor:'#AADC6E'
				}
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