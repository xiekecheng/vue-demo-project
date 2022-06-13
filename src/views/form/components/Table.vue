<template>
	<div>
		<div v-for="(item,index) in TreeData" :key="index">
			<span>{{item.value}}</span>
			<div v-if="item.children">
				<MyList :TreeData="item.children"></MyList>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'MyList',
		props:{
			TreeData:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>