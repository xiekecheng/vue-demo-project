<!-- 门店访问量排名 -->
<template>
  <div>
		<h4>门店销售排名</h4>
    <ul>
      <li v-for="(item,index) in listData" :key="item.id">
        <span class="rankNum">{{index+1}}</span>
				<span class="name">{{item.name}}</span>
				<span>{{item.num}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default: [
        {
          id: 1,
          name: '工专路 0 号店',
          num: 323234,
        },
        {
          id: 2,
          name: '工专路 1 号店',
          num: 323234,
        },
        {
          id: 3,
          name: '工专路 2 号店',
          num: 323234,
        },
        {
          id: 4,
          name: '工专路 3 号店',
          num: 323234,
        },
        {
          id: 5,
          name: '工专路 4 号店',
          num: 323234,
        },
        {
          id: 6,
          name: '工专路 5 号店',
          num: 323234,
        },
        {
          id: 7,
          name: '工专路 6 号店',
          num: 323234,
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
ul,li{
	list-style: none;
}
ul{
	// display: flex;
	.name{
		flex: 1;
	}
}
li{
	display: flex;
	margin-top: 16px;
	.rankNum{
		width: 20px;
		margin-right: 20px;
		border-radius: 20px;
		color: white;
		background-color: #314659;
		text-align: center;
	}
}
</style>
