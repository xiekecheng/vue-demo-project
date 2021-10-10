<template>
  <div>
    <h1 v-text="children"></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      children: "我是children",
    };
  },
};
</script>

<style lang="scss" scoped></style>
