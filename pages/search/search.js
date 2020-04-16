// pages/search/search.js
var API_URL = "https://douban.uieee.com/v2/movie/search"
Page({
  data: {
    movies: []
  },
  search: function(evt) {
    if (!evt.detail.value) {
      console.log('错误')
      return;
    }
    wx.showToast({
      title: '加载中....',
      icon: "loading",
      duration: 1000
    })
    // console.log(evt)
    wx.request({
      url: API_URL + "?q=" + evt.detail.value,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: (res) => {
        // console.log(res.data)
        wx.hideToast()
        this.setData({
          movies: res.data.subjects
        })
      },

    })
  },

  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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