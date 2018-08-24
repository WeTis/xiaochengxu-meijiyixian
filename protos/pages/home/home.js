
import {Home} from './home_model.js';

var home = new Home();

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
     this._loadData();
  },

  _loadData: function(){
     home.getBanner((res)=>{
       this.setData({
         bannerArr: res
       })
     });
     home.getTheme((res)=>{
       this.setData({
         themeArr:res
       })
     });
     home.getNewProduct((res)=>{
       this.setData({
         productArr: res
       })
     })
  },
  
  onThemeTap: function(res){
    var id = res.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../theme/theme?id='+id,
    })
  },
  onProductDetailTap:function(res){
    var id = res.currentTarget.dataset.id;
    if(id == "11"){
      // 跳转到展示页面
      wx.navigateTo({
        url: '../yushou/yushou?id=' + id,
      })
    }
    else if(id == "25"){
      wx.navigateTo({
        url: '../eat/eat',
      })
    }
    else{
      wx.navigateTo({
        url: '../product/product?id=' + id,
      })
    }
   
  }
})