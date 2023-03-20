// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    // 自定义你的规则
    'vue/no-empty-component-block': 0,
    'vue/component-tags-order': 0,
    'vue/no-deprecated-slot-attribute': 0,
    'vue/multi-word-component-names':0
  },
};
