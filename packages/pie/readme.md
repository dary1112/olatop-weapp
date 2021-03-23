## 饼状图



### json

```json
"usingComponents": {
  "ow-pie": "olatop-weapp/pie/pie"
}

```



### wxml

```html
<ow-pie
  title="饼状图展示"
  data="{{data}}"
/>

```



### js

```js
data: {
  data: [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' },
  ]
}
```
