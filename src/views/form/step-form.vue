<template>
  <div>
    <h1>分步表单</h1>
    <div ref="box" class="wrap">
      <div>
        <ul>
          <li v-for="i in 20" :key="i">1111</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';

export default {
  mounted() {
    const wrap = document.querySelector('.wrap');
    // eslint-disable-next-line no-unused-vars
    const bs = new BetterScroll(wrap);
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 300px;
  background-color: pink;
  overflow: hidden;
}
</style>
