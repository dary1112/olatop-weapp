## 图文卡片列表



### json

```json
"usingComponents": {
  "ow-card-list": "olatop-weapp/card-list/card-list",
  "ow-card-item": "olatop-weapp/card-item/card-item"
}

```



### wxml

```html
<ow-card-list bind:loadMore="loadMore" hasMore="{{hasMore}}">
  <ow-card-item
    wx:for="{{list}}" wx:for-item="card" wx:for-index="index" wx:key="id"
    id="{{card.id}}"
    title="{{card.title}}"
    content="{{card.content}}"
    image="{{card.image}}"
  >
    <!-- slot start -->
    <view class="footer">
      <view>收藏</view>
      <view>点踩</view>
    </view>
    <!-- slot end -->
  </ow-card-item>
</ow-card-list>
```



### js

```js
data: {
  // 是否还有更多数据，如果不需要上拉触底加载更多则默认可以设置为false
  hasMore: true,
  // 数据列表，image字端非必须
  list: [
    {
      id: '23423342',
      title: '组件模板和样式',
      content: '类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。',
      image: 'http://www.xiongdalin.com/img/avatar.jpg',
    },
    {
      id: '23423424',
      title: 'Component 构造器',
      content: 'Component 构造器可用于定义组件，调用 Component 构造器时可以指定组件的属性、数据、方法等。详细的参数含义和使用请参考 Component 参考文档。'
    }
},
loadMore () {
  // 上拉触底时出发，在这里发送请求获取下一组数据放入list，并通过对hasMore的控制来决定是否还有更多数据
}
```

