import {Base} from '../../utils/base.js';

class Product extends Base{
  constructor(){
    super();
  }

  getDetailInfo(id,callback){
    var param = {
      url: 'product/'+id,
      sSuccess: function(res){
         
         callback && callback(res);
      }
    }

    this.request(param);
  }

  /**
   * 获取对应详情图片
   */
  
}

export {Product};