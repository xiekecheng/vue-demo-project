<template>
  <div>
    <!-- <router-link to="/test4/children1">页面1</router-link>
    <router-link to="/test4/children2">页面2</router-link>
    <router-link to="/test4/children3">页面3</router-link>
    <router-link to="/test4/children4">页面4</router-link>
    <router-view></router-view> -->

    <ul>
      <li v-for="item in list" :key="item"></li>
    </ul>
  </div>
</template>

<script>
import axios from '@/utils/axios'
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    axios({
      url:''
    })
  }
};
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: red;
}
</style>
