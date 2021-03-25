## 雷达图



### json

```json
"usingComponents": {
  "ow-radar": "/dist/radar/radar"
}

```



### wxml

```html
<ow-radar
  title="雷达图展示"
  data="{{data}}"
  max="{{max}}"
/>

```



### js

```js
data: {
  max: [
    { name: '销售（sales）', max: 6500 },
    { name: '管理（Administration）', max: 16000 },
    { name: '信息技术（Information Techology）', max: 30000 },
    { name: '客服（Customer Support）', max: 38000 },
    { name: '研发（Development）', max: 52000 },
    { name: '市场（Marketing）', max: 25000 }
  ],
  data: [
    {
      name: '预算分配（Allocated Budget）',
      value: [
        { name: '销售（sales）', value: 4300 },
        { name: '管理（Administration）', value: 10000 },
        { name: '信息技术（Information Techology）', value: 28000 },
        { name: '客服（Customer Support）', value: 35000 },
        { name: '研发（Development）', value: 50000 },
        { name: '市场（Marketing）', value: 19000 }
      ]
    },
    {
      name: '实际开销（Actual Spending）',
      value: [
        { name: '销售（sales）', value: 5000 },
        { name: '管理（Administration）', value: 14000 },
        { name: '信息技术（Information Techology）', value: 28000 },
        { name: '客服（Customer Support）', value: 31000 },
        { name: '研发（Development）', value: 42000 },
        { name: '市场（Marketing）', value: 21000 }
      ]
    }
  ]
}
```

