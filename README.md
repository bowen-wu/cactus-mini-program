## taro

### 实用技巧

- `taro doctor` -> 诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案
- `taro create [fileName]` -> 可以在当前项目的 pages 目录下快速生成新的页面文件，并填充基础代码

### 微信小程序开发前注意

1. 微信开发者工具项目设置

   - 需要设置关闭 ES6 转 ES5 功能，开启可能报错
   - 需要设置关闭上传代码时样式自动补全，开启可能报错
   - 需要设置关闭代码压缩上传，开启可能报错

### tabBar

1. 在 app.config.ts 文件内全局配置 tabBar

| 属性            | 类型           | required | default       | 描述                                 |
| --------------- | -------------- | -------- | ------------- | ------------------------------------ |
| color           | 十六进制颜色值 | true     | -             | tab 上的文字默认颜色                 |
| selectedColor   | 十六进制颜色值 | true     | -             | tab 上文字选中的颜色                 |
| backgroundColor | 十六进制颜色值 | true     | -             | tab 的背景色                         |
| borderStyle     | String [black  | white]   | true          | black                                | tabBar 上边框的颜色 |
| list            | ListOption[]   | true     | -             | tab 的列表，最少 2 个，最多 5 个 tab |
| position        | string [bottom | top]     | false         | bottom                               | tabBar 的位置 |
| custom          | boolean        | false    | 自定义 tabBar |

2. ListOption 属性值

| 属性             | 类型   | required | 描述                                                                                                               |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| pagePath         | string | true     | 页面路径，必须在 pages 中先定义                                                                                    |
| text             | string | true     | tab 上按钮文字                                                                                                     |
| iconPath         | string | false    | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持使用网络图片，当 position === 'top' 时，不显示 icon |
| selectedIconPath | string | false    | 选中时图片路径，同 iconPath                                                                                        |

### React 相关

1. 所有内置组件必须从 `tarojs/components` 引入，组件的 Props 遵从大驼峰命名规范
2. 在 Taro 中时间遵从小驼峰命名规范，所有内置事件名以 `on` 开头，在事件处理函数中第一个参数是事件本身，可以通过调用 `stopPropagation` 来阻止冒泡

### 页面配置

```
export default {
  navigationBarBackgroundColor: '#000', // 导航栏背景颜色
  navigationBarTextStyle: 'white', // 导航栏标题颜色，black | white
  navigationBarTitleText: '首页', // 导航栏标题文字内容
  navigationStyle: 'default', // 导航栏样式 default -> 默认样式 custom -> 自定义导航栏，只保留右上角胶囊按钮
  backgroundColor: '', // 窗口的背景色
  backgroundTextStyle: 'dark', // 下拉 loading 的样式，仅支持 dark | light
  backgroundColorTop: '#fff', // 顶部窗口的背景色，仅 iOS 支持
  backgroundColorBottom: '#fff', // 底部窗口的背景色，仅 iOS 支持
  enablePullDownRefresh: false, // 是否开启当前页面的下拉刷新
  onReachBottomDistance: '50', // 页面上拉触底时间触发时距页面底部距离，单位为 px
  pageOrientation: 'portrait', // 屏幕旋转设置，auto | portrait | landscape
  disableScroll: false, // 设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置
  disableSwipeBack: false, // 禁止页面右滑手势返回
  // usingComponents: {}, // 页面自定义组件配置，一般不需要配置，只有在需要与引用原生小程序组件的时候才需要配置
}

export default {
  navigationBarBackgroundColor: '#000',
  navigationBarTextStyle: 'white',
  navigationBarTitleText: '首页',
  navigationStyle: 'default',
  backgroundColor: '',
  backgroundTextStyle: 'dark',
  backgroundColorTop: '#fff',
  backgroundColorBottom: '#fff',
  enablePullDownRefresh: false,
  onReachBottomDistance: '50',
  pageOrientation: 'portrait',
  disableScroll: false,
  disableSwipeBack: false,
}
```

### onReady[生命周期函数]

来源于微信小程序规范的生命周期，表示组件首次渲染完毕，准备好与视图交互。Taro 在运行时将大部分小程序规范页面生命周期注入到了页面组件中，同时 React 或 Vue 自带的生命周期也是完全可以正常使用的。

### View[组件]

来源于 `@taros/components` 的跨平台组件。在 Taro 中我们要全部使用这样的跨平台组件进行开发

### route

```
// 跳转到目的页面，打开新页面
Taro.navigateTo({
    url: 'pages/page/path/name'
})

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
    url: 'pages/page/path/name'
})

// 路由传参
Taro.navigateTo({
    url: 'pages/page/path/name?id=2&type=test'
})

// 获取路由参数。在跳转成功的目标页的生命周期 [componentWillMount] 方法里可以通过 ` getCurrentInstance().router.params ` 获取传入的参数

export default class C extends Component {
    componentDidMount() {
        console.log(getCurrentInstance().router.params) // 输出 {id: 2, type: 'test'}
    }
}
```

[更多](https://taro-docs.jd.com/taro/docs/apis/route/switchTab/)

### 设计稿及尺寸单位

Taro 默认以 750 作为换算尺寸标准，如果设计稿不是以 750 为标准，则需要在项目配置 `config/index.js` 中进行设置。目前 Taro 支持 750、640、828 三种尺寸设计稿

```
const config = {
    designWidth: 640,
    deviceRatio: {
        640: 2.32 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1, // 如果是设计稿 375，1. designWidth: 375 2. deviceRatio 中添加换算规则
    }
}
```

1. Taro 提供 `Taro.paTransform` API 来做运行时的尺寸转换，例如在 JS 中书写行内样式。
2. 默认配置会对所有的 px 单位进行转换，有大写字母的 `Px` 或 `PX` 则会被忽略
3. 对于头部包含注释 `/*postcss-pxtransform disable*/` 的文件，插件不予处理

配置参数默认值如下

```
{
  onePxTransform: true, // 设置 1px 是否需要被转换
  unitPrecision: 5, // rem 单位允许的小数位
  propList: ['*'], // 允许转换的属性
  selectorBlackList: [], // 黑名单里的选择器将会被忽略
  replace: true, // 直接替换而不是追加一条进行覆盖
  mediaQuery: false, // 允许媒体查询里的 px 单位转换
  minPixelValue: 0 // 设置一个可被转换的最小 px 值
}
```

## Hooks

Taro hooks 从 `@tarojs/taro` 中引入

### useState

1. 使用函数式更新，`setState(prevCount => prevCount + 1)`
2. 如果初始 state 需要通过复杂计算获得，则需要传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

   ```
   const [state, setState] = useState(() => {
     const initialState = someExpensiveComputation(props);
     return initialState;
   });
   ```

### useEffect

### useReducer

### useCallback

### useMemo

### useRef

### useLayoutEffect

### useContext

### useDidShow

Taro 专有 Hook，等同于 `componentDidShow` 页面生命周期钩子

### useDidHide

Taro 专有 Hook，等同于 `componentDidHide` 页面生命周期钩子

### usePullDownRefresh

Taro 专有 Hook，等同于 `onPullDownRefresh` 页面生命周期钩子

### useReachBottom

Taro 专有 Hook，等同于 `onReachBottom` 页面生命周期钩子

### usePageScroll

```
usePageScroll(res => {
  console.log(res.scrollTop)
})
```

Taro 专有 Hook，等同于 `onPageScroll` 页面生命周期钩子

### useResize

```
useResize(res => {
  console.log(res.size.windowWidth)
  console.log(res.size.windowHeight)
})
```

Taro 专有 Hook，等同于 `onResize` 页面生命周期钩子

### useShareAppMessage

使用此 Hook 时必须为页面配置 `enableShareAppMessage: true`

```
// page.js
function Index () {
  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  })
}

// page.config.js
export default {
  enableShareAppMessage: true
}
```

Taro 专有 Hook，等同于 `onShareAppMessage` 页面生命周期钩子

### useTabItemTap

```
useTabItemTap(item => {
  console.log(item.index)
  console.log(item.pagePath)
  console.log(item.text)
})
```

Taro 专有 Hook，等同于 `onTabItemTap` 页面生命周期钩子

### useRouter

```
const router = useRouter() // { path: '', params: { ... } }
```

Taro 专有 Hook，等同于页面为类时的 `getCurrentInstance().router`

### useReady

```
useReady(() => {
  const query = wx.createSelectorQuery()
})
```

Taro 专有 Hook，等同于 `onReady` 页面生命周期钩子

## 状态管理工具

- dva
- unstaged: 基于 React Hooks 的极简状态管理工具，压缩体积只有 200 字节
- Recoil: Facebook 推出的基于 React Hooks 的状态管理工具

## [渲染 HTML](https://taro-docs.jd.com/taro/docs/html)

```
<View dangerouslySetInnerHTML={{ __html: reply.content }} className='content'></View>
```

## 性能优化

### `VirtualList`[虚拟列表](https://taro-docs.jd.com/taro/docs/virtual-list/)

### Prerender [预渲染](https://taro-docs.jd.com/taro/docs/prerender/)

```
// config/prod.js
const config = {
  ...
  mini: {
    prerender: {
      include: ['pages/nodes/nodes'], // `pages/nodes/nodes` 也会参与 prerender
    }
  }
};

// 我们这里在编译生产模式时才开启预渲染
// 如果需要开发时也开启，那就把配置放在 `config/index` 或 `config/dev`
module.exports = config
```

### 打包体积

##### TypeScript

在 Taro 应用中，所有 TypeScript 都是通过 `babel.config.js` 配置的，具体来说是使用 `babel-preset-taro` 这个 Babel 插件编译的

Taro 会兼容所有 `@babel/preset-env` 支持的语法，并兼容到 `iOS 9` 和 `ANdroid 5`。[更多设置](https://babeljs.io/)

##### 打包体积分析

使用 `webpack-bundle-analyzer` 来分析依赖打包体积。[更多](https://www.npmjs.com/package/webpack-bundle-analyzer)

##### 分包

在一些情况，希望页面只有当用到时才按需进行加载。通过配置入口文件 `app.config.js` 即可
