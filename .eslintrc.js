module.exports = {
  extends: ['alloy', 'alloy/vue'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    es2021: true,
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    'vue/no-empty-component-block': 0,
    'vue/component-tags-order': 0,
    'vue/no-deprecated-slot-attribute': 0,
  },
};
