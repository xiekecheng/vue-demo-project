<template>
  <div class="wrap">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 主题 -->
      <el-collapse-item v-for="(item, index) in data" :key="index" :title="item.title" :name="index">
        <div class="text-color">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <CatalogList :CatalogData="item.catalogList" :mapType="mapType" :classObj="classObj" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import CatalogList from './CatalogList.vue';
export default {
  components: {
    CatalogList,
  },
  data() {
    return {
      activeNames: [0],
      mapType: [1, 2, 3, 4, 5],
      classObj: {
        1: 'dev',
        2: 'sit',
        3: 'uat',
      },
      data: [
        {
          title: '主题1',
          No: '1',
          catalogList: [
            {
              title: '目录1.1',
              No: '1.1',
              type: 3,
              content: [
                {
                  tableData: [],
                },
              ],
              children: [
                {
                  title: '目录1.1.1',
                  No: '1.1.1',
                  type: 5,
                  content: [
                    {
                      tableData: [],
                    },
                  ],
                },
              ],
            },
            {
              title: '目录1.2',
              No: '1.2',
              type: 3,
              content: [
                {
                  tableData: [],
                },
              ],
            },
          ],
        },
        {
          title: '主题2',
          No: '1',
          catalogList: [
            {
              title: '目录2.1',
              No: '2.1',
              type: 3,
              content: [
                {
                  tableData: [],
                },
              ],
            },
          ],
        },
        {
          title: '主题3',
          No: '1',
          catalogList: [
            {
              title: '目录3.1',
              No: '3.1',
              type: 3,
              content: [
                {
                  tableData: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap{
  ::v-deep{
    .text-color{
    background-color: pink;
  }
  }
}
</style>
