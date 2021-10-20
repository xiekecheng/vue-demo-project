<template>
  <div>
    <h1>子路由3</h1>
    <span>路由传递参数:{{ $route.query.id }}</span>
    <button @click="handleRoute">路由传参跳转children2</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("this.$route", this.$route.query.id);
  },
  methods: {
    handleRoute() {
      this.$router.push({
        name: "children2",
        params: { name: "jack", age: 18 },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
