// pages/card-list/card-list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,
    times: 0,
    list: [
      {
        id: '23423342',
        title: '组件模板和样式',
        content: '类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。',
        image: 'http://www.xiongdalin.com/img/avatar.jpg',
      },
      {
        id: '2342342',
        title: 'Component 构造器',
        content:
          'Component 构造器可用于定义组件，调用 Component 构造器时可以指定组件的属性、数据、方法等。详细的参数含义和使用请参考 Component 参考文档。',
      },
      {
        id: '24365445',
        title: '组件间通信',
        content: '组件间的基本通信方式有以下几种。',
        image: 'http://www.xiongdalin.com/img/avatar.jpg',
      },
      {
        id: '24365455',
        title: '组件间通信',
        content: '组件间的基本通信方式有以下几种。',
        image: 'http://www.xiongdalin.com/img/avatar.jpg',
      },
      {
        id: '244343445',
        title: '组件间通信',
        content: '组件间的基本通信方式有以下几种。',
        image: 'http://www.xiongdalin.com/img/avatar.jpg',
      },
      {
        id: '243435445',
        title: '组件间通信',
        content: '组件间的基本通信方式有以下几种。',
        image: 'http://www.xiongdalin.com/img/avatar.jpg',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  loadMore () {
    const arr = []
    for (var i = 0; i < 3; i++) {
      arr.push({
        id: Math.random().toString(),
        title: '组件模板和样式',
        content: '类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。',
        image: 'http://www.xiongdalin.com/img/avatar.jpg',
      })
    }
    setTimeout(() => {
      this.setData({
        list: [ ...this.data.list, ...arr ]
      })
      if (this.data.list.length > 10) {
        this.setData({ hasMore: false })
      }
    }, 1000)
  }
})
