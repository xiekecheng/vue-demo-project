<template>
  <div>
    <router-link to="/test4/children1">页面1</router-link>
    <router-link to="/test4/children2">页面2</router-link>
    <router-link to="/test4/children3">页面3</router-link>
    <router-link to="/test4/children4">页面4</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: red;
}
</style>
