// pages/radar/radar.js
import { format } from '../../utils/utils';
Page({
  /**
   * 页面的初始数据
   */
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
    ],
    sourceHTML: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sourceHTML: format({
        data: this.data.data,
        max: this.data.max
      }),
    });
  },

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
});