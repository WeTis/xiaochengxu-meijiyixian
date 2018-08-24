import {Config} from '../utils/config.js';
import { Token } from 'token.js';

 class Base {
   constructor(){
     this.baseRequestUrl = Config.restUrl;
     this.onPay = Config.onPay;
   }
   /**
    * 发送http请求
    * @param 参数列表
    */
   request(param, noRefetch){
     var that = this;
     var url = this.baseRequestUrl + param.url;
      if(!param.type){
        param.type = 'GET';
      }
      wx.request({
        url: url,
        data: param.data,
        method: param.type,
        header:{
           'content-type':'application/json',
           'token': wx.getStorageSync('token')
        },
        success: function(res){
       
          param.sSuccess && param.sSuccess(res.data);
        },
        fail: function(err){
            console.log(err);
        }
      })
   }
   _processError(err) {
     console.log(err);
   }
   _refetch(param) {
     var token = new Token();
     token.getTokenFromServer((token) => {
       this.request(param, true);
     });
   }

   /*获得元素上的绑定的值*/
   getDataSet(event, key) {
     return event.currentTarget.dataset[key];
   };
 }

 export {Base};