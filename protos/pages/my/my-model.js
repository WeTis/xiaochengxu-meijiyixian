/**
 * Created by jimmy on 17/3/24.
 */
import { Base } from '../../utils/base.js'

class My extends Base {
  constructor() {
    super();
  }

  //得到用户信息
  getUserInfo(cb) {
    var that = this;
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            typeof cb == "function" && cb(res.userInfo);

            //将用户昵称 提交到服务器
            if (!that.onPay) {
              that._updateUserInfo(res.userInfo);
            }

          },
          fail: function (res) {
            typeof cb == "function" && cb({
              avatarUrl: '../../imgs/icon/user@default.png',
              nickName: '美味水果'
            });
          }
        });
      },

    })
  }

  /*更新用户信息到服务器*/
  _updateUserInfo(res) {
    var nickName = res.nickName;
    delete res.avatarUrl;  //将昵称去除
    delete res.nickName;  //将昵称去除
    console.log(res);
    console.log("测试");
    var allParams = {
      url: 'user/wx_info',
      data: { nickname: nickName, extend: JSON.stringify(res) },
      type: 'post',
      sSuccess: function (data) {
      }
    };
    this.request(allParams);

  }

  /**
   * 预定成功发送模板消息
   */
  senMessage(id) {
    var params = {
      url: 'order/delivery',
      type: 'put',
      data: { id: id },
      tokenFlag: true,
      sSuccess: function (res) {
        console.log(res);
      },
      eCallback: function () {
        console.log("操作失败");
      }
    };
    this.request(params);
  }
}



export { My }