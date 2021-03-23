// pages/barline/barline.js
import { format } from '../../utils/utils'
Page({

  /**
   * 页面的初始数据
   */
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
    ],
    sourceHTML: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sourceHTML: format({
        xAxis: this.data.xAxis,
        series: this.data.series
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})