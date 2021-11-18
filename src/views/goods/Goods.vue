<template>
  <div style="width: 240px">
    <p>
      <label style="margin-right: 16px">切换 Loading</label>
      <el-switch v-model="loading" />
    </p>
    <el-skeleton style="width: 240px" :loading="loading" :count="3" animated>
      <template slot="template">
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px">
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template>
        <el-card v-for="item in list" :key="item.name" :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            :src="item.imgUrl"
            class="image"
          />
          <div style="padding: 14px">
            <span>{{item.name}}</span>
            <div class="bottom card-header">
              <span class="time">{{ item.price }}</span>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      currentDate: '2021-06-01',
      list: [],
    };
  },
  mounted() {
    this.list = [
      {
        imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        price: 19,
        name: '好吃的汉堡包鹿',
      },
      {
        imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        price: 192,
        name: '好吃的汉堡包马',
      },
      {
        imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        price: 21,
        name: '好吃的汉堡包山狮',
      },
    ];
  },
};
</script>

<style lang="scss" scoped></style>
