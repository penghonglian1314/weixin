// pages/detail/detail.js
var API_URL = "https://douban.uieee.com/v2/movie/subject/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    wx: wx.showToast({
      title: '加载中....',
      icon: 'loading',
      duration: 1000
    })
    wx.request({
      url: API_URL + options.id, //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          subjects: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})