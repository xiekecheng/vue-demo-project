<template>
  <div>
    <!-- 分析卡片组 -->
    <AnalyzeCard />

    <!-- 销售额/访问量 卡片 -->
    <SaleCard />

    <!-- 热门搜索 -->
    <HotSearch />
  </div>
</template>

<script>
import AnalyzeCard from '@/views/dashboard/AnalyzeCard.vue';
import SaleCard from '@/views/dashboard/SaleCard.vue';
import HotSearch from '@/views/dashboard/HotSearch.vue';

export default {
  components: { HotSearch, SaleCard, AnalyzeCard },
};
</script>

<style lang='scss' scoped>

</style>