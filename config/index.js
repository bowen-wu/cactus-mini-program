import path from 'path';

const config = {
  projectName: 'taro-demo',
  date: '2020-10-4',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-sass'],
  // 全局变量设置
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  sass: {
    projectDirectory: path.resolve(__dirname, '..'),
    resource: [
      'src/styles/_customVariables.scss',
      'src/styles/_variable.scss',
      'src/styles/_mixins.scss',
      'src/styles/_zIndex.scss',
      'src/styles/_function.scss'
    ]
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  framework: 'react',
  // 小程序端专用配置
  mini: {
    // 自定义 webpack 配置 ->  打包体积分析
    webpackChain(chain) {
      chain
        .plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
    },
    prerender: {
      // TODO: `pages/nodes/nodes` 也会参与 prerender
      // include: ['pages/nodes/nodes']
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      // 小程序端样式引用本地资源内联
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
