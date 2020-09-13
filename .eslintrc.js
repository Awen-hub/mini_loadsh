/** @format */

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier/@typescript-eslint", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-console": "error",
    "arrow-parens": 0,
    "no-constant-condition": 2, //禁止在条件中使用常量表达式 if(true) if(1)
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-eval": 1, //禁止使用eval
    "no-floating-decimal": 2, //禁止省略浮点数中的0 .5 3.
    "no-func-assign": 2, //禁止重复的函数声明
  },
}
