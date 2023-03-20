<template>
  <el-container>
    <el-header height="48px" style="background-color: #001529">
      <MyHeader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <SiderBar />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
          <MyFooter />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import SiderBar from '@/views/layout/SiderBar'
import Header from '@/views/layout/Header'
import MyFooter from '@/views/layout/MyFooter.vue'

export default {
  components: {
    MyFooter,
    SiderBar,
    MyHeader: Header,
  },
}
</script>
