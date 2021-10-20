<template>
  <div>
    <h1>子路由4</h1>
    <span>{{ $route.params.id }}</span>
    <button @click="jumpRoute">路由传参跳转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    // $route(to, from) {
    //   console.log("to,from", to, from);
    // },
    $route: function (newVal, oldVal) {
      console.log("newVal, oldVal", newVal, oldVal);
    },
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log("to, from, next", to, from, next);
    next();
  },
  methods: {
    jumpRoute() {
      this.$router.push({ path: "/test4/children3", query: { id: 35 } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
