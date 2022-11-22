<template>
  <div>
    <el-collapse v-for="(item, index) in CatalogData" :key="index" v-model="activeNames">
      <el-collapse-item :title="item.title" name="1">
        <div v-if="mapType.includes(item.type)|| classObj[item.type]==='uat'" >
					<h1>{{item.type}}</h1>
          <h1>目录内容</h1>
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div class="text-color">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </div>
        <catalog-list :CatalogData="item.children" v-bind="$props"/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'CatalogList',
  props: {
    CatalogData: {
      type: Array,
      default: () => [],
    },
    mapType: {
      type: Array,
      default: () => [],
    },
		classObj: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      activeNames: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
