// packages/card-item/card-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: String,
    title: String,
    url: String,
    image: String,
    content: {
      type: String,
      observer: 'sliceContent',
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      if (this.properties.url) wx.navigateTo({ url: this.properties.url });
    },
    sliceContent(content) {
      if (this.properties.image && content.length > 30) {
        this.setData({
          content: content.slice(0, 30) + '...'
        })
      } else if ((!this.properties.image) && content.length > 40) {
        this.setData({
          content: content.slice(0, 40) + '...',
        });
      }
    },
  },
});
