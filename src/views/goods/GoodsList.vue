<template>
  <div>
    <h1>商品列表</h1>
    <!-- 列表 -->
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="date" label="头像" width="50">
        <template slot-scope="scope">
          <img class="avatarStyle" :src="scope.row.author.avatar_url" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="阅读数" width="100">
        <template slot-scope="scope">
          <span class="readStyle"
            ><i class="reply_count">{{ scope.row.reply_count }}</i
            >/<i class="visit_count"> {{ scope.row.visit_count }}</i></span
          >
        </template>
      </el-table-column>
      <el-table-column prop="address" label="分类" width="70">
        <template slot-scope="scope">
          <span v-text="scope.row.tab"></span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="标题">
        <template slot-scope="scope">
          <span v-text="scope.row.title"></span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="address" label="头像"> </el-table-column> -->
      <el-table-column prop="address" label="回复时间">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.last_reply_at | computeDate }}</span> -->
          <span>{{ scope.row.last_reply_at | computeDate }}</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 列表 -->

    <!-- Start 分页 -->
    <!-- layout="prev, pager, next" -->
    <el-pagination
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      background
      :total="500"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
    <!-- End 分页 -->
  </div>
</template>

<script>
import { format } from "timeago.js";

import { fetTopics } from "@/api";
export default {
  name: "goodsList",
  data() {
    return {
      list: [],
      currentPage: 1,
      size: 10,
    };
  },
  methods: {
    getTopics() {
      fetTopics({ page: this.currentPage, limit: this.size }).then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
    },
    onSizeChange(size) {
      console.log("每页条数", size);
      this.size = size;
      // this.getTopics();
    },
    onCurrentChange(page) {
      console.log("当前页", page);
      this.currentPage = page;
      // this.getTopics();
    },
  },
  watch: {
    currentPage() {
      this.getTopics();
    },
    size() {
      this.getTopics();
    },
  },
  mounted() {
    console.log("获取请求数据");
    this.getTopics();
  },
  filters: {
    computeDate(value) {
      return format(value, "zh_CN");
    },
  },
};
</script>

<style lang="scss" scoped>
.avatarStyle {
  width: 30px;
  height: 30px;
}
.readStyle {
  // padding: 10px 0 10px 10px;
}
.reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.visit_count {
  font-size: 10px;
  color: #b4b4b4;
}
</style>
