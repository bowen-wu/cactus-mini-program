/**
 * 所有 TypeScript 都是使用 ` babel-preset-taro ` Babel 插件编译的
 * babel-preset-taro 更多选项和默认值：
 * https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
 */
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ]
}
