// var productObj = require('product-model.js');

import { Product } from 'product-model.js';
import { Cart } from '../cart/cart-model.js';

var product = new Product();  //实例化 商品详情 对象
var cart = new Cart();
Page({
  data: {
    addScale: false,
    loadingHidden: false,
    hiddenSmallImg: true,
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCounts: 1,
    currentTabsIndex: 0,
    cartTotalCounts: 0,
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
        cartTotalCounts: cart.getCartTotalCounts().counts1,
        product: data,
        loadingHidden: true
      });
      callback && callback();
    });
  },

  //选择购买数目
  bindPickerChange: function (e) {
    this.setData({
      productCounts: this.data.countsArray[e.detail.value],
    })
  },

  //切换详情面板
  onTabsItemTap: function (event) {
    var index = product.getDataSet(event, 'index');
    this.setData({
      currentTabsIndex: index
    });
  },

  /*添加到购物车*/
  onAddingToCartTap: function (events) {
    //防止快速点击
    if (this.data.isFly) {
      return;
    }
    this._flyToCartEffect(events);
    this.addToCart();
  },

  /*将商品数据添加到内存中*/
  addToCart: function () {
    var tempObj = {}, keys = ['id', 'name', 'main_img_url', 'price'];
    for (var key in this.data.product) {
      if (keys.indexOf(key) >= 0) {
        tempObj[key] = this.data.product[key];
      }
    }

    cart.add(tempObj, this.data.productCounts);
  },

  /*加入购物车动效*/
  _flyToCartEffect: function (events) {

    var that = this;
    var counts = that.data.cartTotalCounts + that.data.productCounts;
    that.setData({
      isShake: false,
      cartTotalCounts: counts
    });
        wx.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000
        })

 
  },

  /*跳转到购物车*/
  onCartTap: function () {
    wx.switchTab({
      url: '/pages/cart/cart'
    });
  },

  /*下拉刷新页面*/
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  },

  //分享效果
  onShareAppMessage: function () {
    var that = this;
    return {
      title: that.data.product.name + "[点击购买]",
      imageUrl: that.data.product.main_img_url,
      path: 'pages/product/product?id=' + this.data.id
    }
  },
  addShow: function () {
    // 点击时添加class 利用css3动画使其旋转
    this.setData({
      addScale: !this.data.addScale
    })
  },
  returnIndex: function(){
    wx.switchTab({
      url: '/pages/home/home'
    });
  }

})


