<template>
  <div>
    <button @click="handleGo">前进</button>
    <button @click="handleBack">后退</button>
    <button @click="handleFresh">刷新</button>
  </div>
</template>

<script>
export default {
  name:'MyHeader',
  methods: {
    handleGo() {
      history.forward();
    },
    handleBack() {
      history.back();
    },
    handleFresh() {
      history.go();
    },
  },
};
</script>

<style lang="scss" scoped></style>
