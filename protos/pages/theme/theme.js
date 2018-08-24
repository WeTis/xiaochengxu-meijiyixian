// pages/theme/theme.js
import {Theme} from './theme-model.js';

var theme = new Theme;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 获取参数id
     this.setData({
       id: options.id
     });
     this._loadData(this.data.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  _loadData: function(id){
       
    theme.getTheme(id,(res)=>{
          this.setData({
            singleThemeArr: res
          })
    })
  },
  onProductDetailTap: function (res) {
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../product/product?id=' + id,
    })
  }
})