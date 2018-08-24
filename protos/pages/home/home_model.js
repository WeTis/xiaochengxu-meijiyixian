import {Base} from '../../utils/base.js';

class Home extends Base {
  constructor(){
     super();
  }
  
  /**
   * 获取banner数据
   */
  getBanner(callback){
      var param = {
        url: 'banner/1',
        sSuccess: function(res){
          callback && callback(res.items);
        }
      }
      this.request(param);
  }
  /**
   * 获取主题数据
   * 
   */
  getTheme(callback){
    var param = {
      url: 'theme?ids=1,2,3,4',
      sSuccess: function(res){
        callback && callback(res);
      }
    
    }
    this.request(param);
  }
  /**
   * 获取最近新品数据
   */
  getNewProduct(callback){
     var param = {
       url: 'product/recent',
       sSuccess: function(res){
         callback && callback(res);
       }
     }
     this.request(param);
  }
}


export {Home};