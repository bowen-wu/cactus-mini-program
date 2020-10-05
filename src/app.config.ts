/**
 * 可以配置一些路由、tabBar、分包（subpackages） 相关参数
 */
export default {
  pages: [
    'pages/index/index'
  ],
  // 分包
  // subpackages: [
  //   {
  //     root: 'pages',
  //     pages: [
  //       // 'nodes.nodes'
  //     ]
  //   }
  // ],
  navigateToMiniProgramAppIdList: [], // 需要跳转的小程序列表, 当小程序需要使用 Taro.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个
  networkTimeout: {
    request: 3000, // 默认 6000
  },
  window: {
    backgroundTextStyle: 'light', // 下拉 loading 的样式 dark | light
    backgroundColorTop: '#fff', // 顶部窗口的背景色，仅 iOS 支持
    backgroundColorBottom: '#fff', // 底部窗口的背景色，仅 iOS 支持
    backgroundColor: '#fff', // 窗口的背景色
    navigationBarBackgroundColor: '#fff', // 导航栏背景颜色
    navigationBarTitleText: 'WeChat', // 导航栏标题文字内容
    navigationBarTextStyle: 'black', // 导航栏标题颜色
    navigationStyle: 'default', // 导航栏样式，default -> 默认样式 custom -> 自定义导航栏，只保留右上角胶囊按钮
    enablePullDownRefresh: false, // 是否开启当前页面的下拉刷新
    onReachBottomDistance: 50, // 页面上拉触底时间触发时距页面底部距离，单位为 px
    pageOrientation: 'portrait', // 屏幕旋转设置，支持 auto | portrait | landscape 详见 响应显示区域变化
  }
}
