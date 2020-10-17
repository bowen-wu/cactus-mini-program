/**
 * 可以设置页面的导航栏、背景颜色等参数
 */
export default {
  navigationBarBackgroundColor: '#000', // 导航栏背景颜色
  navigationBarTextStyle: 'white', // 导航栏标题颜色，black | white
  navigationBarTitleText: '首页', // 导航栏标题文字内容
  navigationStyle: 'default', // 导航栏样式 default -> 默认样式 custom -> 自定义导航栏，只保留右上角胶囊按钮
  backgroundColor: '#fff', // 窗口的背景色
  backgroundTextStyle: 'dark', // 下拉 loading 的样式，仅支持 dark | light
  backgroundColorTop: '#fff', // 顶部窗口的背景色，仅 iOS 支持
  backgroundColorBottom: '#fff', // 底部窗口的背景色，仅 iOS 支持
  enablePullDownRefresh: false, // 是否开启当前页面的下拉刷新
  onReachBottomDistance: 50, // 页面上拉触底时间触发时距页面底部距离，单位为 px
  pageOrientation: 'portrait', // 屏幕旋转设置，auto | portrait | landscape
  disableScroll: false, // 设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置
  disableSwipeBack: false // 禁止页面右滑手势返回
  // usingComponents: {}, // 页面自定义组件配置
};
