export default {
  data() {
    return {
      mixinName: "我是mixin中的变量",
    };
  },
  methods: {
    mixMethod() {
      console.log("执行mixMethod方法");
    },
  },
};
