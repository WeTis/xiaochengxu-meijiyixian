// var productObj = require('product-model.js');
import { Product } from '../product/product-model.js';
var product = new Product();  //实例化 商品详情 对象
Page({
  data: {
  },
  onLoad: function (option) {
    var id = option.id;
    this.data.id = id;
    this._loadData();
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    product.getDetailInfo(this.data.id, (data) => {
      that.setData({
        product: data,
      });
      callback && callback();
    });
  },
  onShareAppMessage: function () {
    var that = this;
    return {
      title:  "当季猕猴桃 [点击购买]",
      imageUrl:"https://www.witim.cn/wximg/share.png",
      path: 'pages/home/home'
    }
  },
  tabProduct: function(){
    wx.navigateTo({
      url: '../product/product?id=1'
    })
  }

})


