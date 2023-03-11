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
import AnalyzeCard from '@/views/dashboard/analysis/components/AnalyzeCard.vue';
import SaleCard from '@/views/dashboard/analysis/components/SaleCard.vue';
import HotSearch from '@/views/dashboard/analysis/components/HotSearch.vue';

export default {
  components: { HotSearch, SaleCard, AnalyzeCard },
};
</script>

<style lang='scss' scoped>

</style>