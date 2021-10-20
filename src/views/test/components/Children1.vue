<template>
  <div>
    <h1>子路由1</h1>
    <button @click="handleRouter">路由跳转</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleRouter() {
      this.$router.push("/test4/children4/123");
    },
  },
};
</script>

<style lang="scss" scoped></style>
