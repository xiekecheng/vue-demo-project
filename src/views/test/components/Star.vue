<template>
  <div>
    <ul>
      <li
        v-for="i in 5"
        :key="i"
        :class="{ on: textValue >= i, liStyle: true }"
        @click="handleValue(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: 1,
    };
  },
  methods: {
    handleValue(i) {
      this.textValue = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.liStyle {
  float: left;
  margin: 0 10px;
  width: 30px;
  height: 30px;
  background-color: pink;
  text-decoration: none;
}
.on {
  background-color: red;
}
ul,
li {
  list-style: none;
  text-decoration: none;
}
</style>
