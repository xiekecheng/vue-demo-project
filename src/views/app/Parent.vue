<template>
  <div>
    <h1 v-text="parent"></h1>
    <Brother1 v-model="text" />
    <Brother2 />
    <Brother3 ref="bro3" />
  </div>
</template>

<script>
import Brother1 from "./Brother1.vue";
import Brother2 from "./Brother2.vue";
import Brother3 from "./Brother3.vue";
export default {
  name: "parent",
  data() {
    return {
      text: "父组件的值",
      parent: "我是父组件",
    };
  },
  components: {
    Brother1,
    Brother2,
    Brother3,
  },
  methods: {
    changeValue() {
      alert("changeValue");
    },
  },
  created() {
    // console.log("created", this.$refs.bro3);
    console.log("created", this.$children);
  },
  mounted() {
    // $parent
    // console.log(this.$refs.bro3.name);
    // console.log("mounted", this.$refs.bro3);
    console.log("mounted", this.$children);
  },
};
</script>

<style lang="scss" scoped></style>
