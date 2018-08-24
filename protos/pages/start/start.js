// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onGotUserInfo: function () {
    wx.switchTab({
      url: '../home/home',
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '每季一鲜',
      path: '/page/start/start',
      imageUrl: "/imgs/icon/miki.png"
    }
  },
 
  
 
})