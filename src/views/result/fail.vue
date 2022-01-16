<template>
  <div>
    <h1>失败页</h1>
    <span>我是父组件的title:{{ title }}</span>
    <text-document :title.sync="title" />
    <!-- <text-document :title='title' @update-title='title=$event' /> -->
  </div>
</template>

<script>
import TextDocument from './TextDocument.vue';
// import child from './child.vue';
export default {
  components: {
    TextDocument,
		// child
  },
  data() {
    return {
      title: '我是标题',
    };
  },
};
</script>

<style lang="scss" scoped></style>
