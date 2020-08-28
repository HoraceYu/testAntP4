const {
  strictEslint
} = require('@umijs/fabric');

const customRules = {
  // 单行代码不超过160个字母 https://eslint.org/docs/rules/max-len
  'max-len': ["error", {
    "code": 200
  }],
  // 禁止在返回语句中赋值
  'no-return-assign': "off",
}
strictEslint.rules = {
  ...strictEslint.rules,
  ...customRules,
}

module.exports = {
  ...strictEslint,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
