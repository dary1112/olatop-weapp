## 柱线图



### json

```json
"usingComponents": {
  "ow-barline": "olaotp-weapp/barline/barline"
}

```



### wxml

```html
<ow-barline
  title="柱线图展示"
  color="{{['#fca4f3', '#0000ff']}}"
  xAxis="{{xAxis}}"
  series="{{series}}"
/>

```



### js

```js
data: {
  xAxis: [
    "2021-01-01",
    "2021-01-15",
    "2021-02-01",
    "2021-02-15",
    "2021-03-01",
    "2021-03-15",
  ],
  series: [
    {
      name: "正面得分",
      type: "line",
      smooth: true,
      data: [18, 36, 65, 30, 78, 40]
    },
    {
      name: "负面得分",
      type: "line",
      smooth: true,
      data: [12, 50, 51, 35, 70, 20]
    }
  ]
}
```

