module.exports = {
  env: {
    browser: true,
    es2021: true,
    Node:true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': 'off',
    'indent': [ 'error', 2 ],
    'quotes': [ 'error', 'single' ],
  }
}
