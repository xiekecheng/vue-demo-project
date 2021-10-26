<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" v-text="item.name"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped></style>
