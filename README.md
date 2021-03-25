

# olatop-weapp

### 介绍

欧拉图谱前端组小程序ui组件库

npm地址：[https://www.npmjs.com/package/olatop-weapp](https://www.npmjs.com/package/olatop-weapp)

git仓库地址：[https://github.com/dary1112/olatop-weapp](https://github.com/dary1112/olatop-weapp)

## 使用之前

使用 olatop Weapp 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

> 另外，olatop-weapp依赖vant-weapp，所以要使用olatop-weapp请先在项目中安装构建vant-weapp

## 安装

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
# 通过 npm 安装
npm i olatop-weapp -S --production

# 通过 yarn 安装
yarn add olatop-weapp --production
```

### 方式二. 下载代码

直接通过 git 下载 olatop-weapp 源代码，并将`lib`目录拷贝到自己的项目中
```bash
git clone https://github.com/dary1112/olatop-weapp
```

## 使用组件

以柱线图组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "ow-barline": "olatop-weapp/barline/barline"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<ow-barline />
```

## 构建和预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev

# 执行组件构建
npm run build
```

打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，把`olatop-weapp/example`目录添加进去安装依赖构建之后就可以预览示例了。

## 基础库版本

olatop-weapp 最低支持到小程序基础库 2.2.3 版本

## 组件文档

#### 图表类组件
* [柱线图](./packages/barline/readme.md)
* [饼状图](./packages/pie/readme.md)
* [散点图](./packages/scatter/readme.md)
* [雷达图](./packages/radar/readme.md)

#### 数据类组件
* [图文卡片列表](./packages/card-list/readme.md)

